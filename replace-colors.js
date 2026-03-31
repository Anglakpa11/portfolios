const fs = require('fs');
const path = require('path');

const srcDir = path.resolve(__dirname, 'src');

const regexes = [
  /text-\[#EDEDED\](?:\/\d+)?/g,
  /text-\[#[Ff]{6}(?:[0-9A-Fa-f]{2})?\](?:\/\d+)?/g, // Catches text-[#FFFFFF], text-[#FFFFFF80], text-[#ffffff60], etc.
  /text-muted(?:\/\d+)?/g,
  /text-foreground(?:\/\d+)?/g,
  /text-white\/\d+/g
];

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const regex of regexes) {
        if (regex.test(content)) {
          changed = true;
          content = content.replace(regex, 'text-[#FFFFFF]');
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(srcDir);
