import { useRef, useEffect, useState } from 'react';

class Particle {
  constructor(canvas, colors) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 40 + 20;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    
    // Physics properties
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.friction = 0.95;
    this.gravity = Math.random() * 0.05 + 0.02; // How strongly it's pulled to mouse
    this.id = Math.random();
  }

  update(mouse, particles) {
    // 1. Friction
    this.vx *= this.friction;
    this.vy *= this.friction;

    // 2. Attraction to Mouse
    const dx = mouse.x - this.x;
    const dy = mouse.y - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    // Only attract if mouse is on screen
    if (mouse.x !== 0 || mouse.y !== 0) {
      if (distance > 60) { // Don't stick to the cursor — stay in a cloud
        this.vx += dx * this.gravity * 0.1;
        this.vy += dy * this.gravity * 0.1;
      } else {
        // Subtle repulsion from the exact center to prevent "sticking"
        const force = (60 - distance) * 0.2;
        this.vx -= (dx / distance) * force;
        this.vy -= (dy / distance) * force;
      }
    }

    // 3. Inter-particle Repulsion (Prevent Stacking)
    particles.forEach(p => {
      if (p.id === this.id) return;
      const pdx = p.x - this.x;
      const pdy = p.y - this.y;
      const pdist = Math.sqrt(pdx * pdx + pdy * pdy);
      const minDist = (p.radius + this.radius) * 0.8;

      if (pdist < minDist) {
        const force = (minDist - pdist) * 0.05;
        this.vx -= (pdx / pdist) * force;
        this.vy -= (pdy / pdist) * force;
      }
    });

    // 4. Idle Floating / Noise
    this.vx += (Math.random() - 0.5) * 0.2;
    this.vy += (Math.random() - 0.5) * 0.2;

    // 5. Update Position
    this.x += this.vx;
    this.y += this.vy;

    // 6. Screen Boundaries
    if (this.x < -this.radius) this.x = this.canvas.width + this.radius;
    if (this.x > this.canvas.width + this.radius) this.x = -this.radius;
    if (this.y < -this.radius) this.y = this.canvas.height + this.radius;
    if (this.y > this.canvas.height + this.radius) this.y = -this.radius;
  }

  draw(ctx) {
    ctx.beginPath();
    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius);
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, 'transparent');
    
    ctx.fillStyle = gradient;
    ctx.globalAlpha = 0.7;
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  burst(mx, my) {
    const bdx = mx - this.x;
    const bdy = my - this.y;
    const bdist = Math.sqrt(bdx * bdx + bdy * bdy);
    if (bdist < 300) {
      const force = (300 - bdist) * 0.15;
      this.vx -= (bdx / bdist) * force;
      this.vy -= (bdy / bdist) * force;
    }
  }
}

export default function FloatingBalls() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);
  const requestRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();

    const colors = ['#6C3BFF', '#4880FF', '#FFFFFF', '#6C3BFF88'];
    particlesRef.current = Array.from({ length: 18 }, () => new Particle(canvas, colors));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(p => {
        p.update(mouseRef.current, particlesRef.current);
        p.draw(ctx);
      });

      requestRef.current = requestAnimationFrame(animate);
    };
    animate();

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      window.dispatchEvent(new CustomEvent('cursorNearBall', { detail: true }));
    };

    const onMouseDown = (e) => {
      particlesRef.current.forEach(p => p.burst(e.clientX, e.clientY));
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none w-full h-full"
      style={{ filter: 'blur(20px)' }} // Added extra blur for the soft aura feel
    />
  );
}
