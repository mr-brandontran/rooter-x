import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('dist')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.astro') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.md')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('./src');

let errors = [];

const hexRegex = /#(?:[0-9a-fA-F]{3}){1,2}\b/g;
const defaultTailwindRegex = /\b(blue|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950)\b/g;
const gradientRegex = /bg-gradient-/g;
const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
const prohibitedWords = ["elevate", "seamless", "unlock", "cutting-edge", "state-of-the-art", "your trusted partner", "peace of mind"];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  
  // Exclude tokens.css from raw hex check
  if (!file.endsWith('tokens.css')) {
    const hexMatches = content.match(hexRegex);
    if (hexMatches) {
      errors.push(`Raw hex color found in ${file}: ${hexMatches.join(', ')}`);
    }
  }

  // Default tailwind color check
  const twMatches = content.match(defaultTailwindRegex);
  if (twMatches) {
    errors.push(`Default Tailwind color class found in ${file}: ${twMatches.join(', ')}`);
  }

  // Gradient check
  const gradMatches = content.match(gradientRegex);
  if (gradMatches) {
    errors.push(`CSS gradient found in ${file}`);
  }

  // Emoji check
  if (emojiRegex.test(content)) {
    errors.push(`Emoji found in ${file}`);
  }

  // Prohibited words in headlines
  const lines = content.split('\n');
  lines.forEach((line, index) => {
    if (line.includes('<h1') || line.includes('<h2') || line.includes('<h3') || line.includes('<h4')) {
      prohibitedWords.forEach(word => {
        if (line.toLowerCase().includes(word.toLowerCase())) {
          errors.push(`Prohibited word "${word}" found in headline in ${file} L${index+1}: ${line.trim()}`);
        }
      });
    }
  });
});

console.log("=== AUDIT RESULTS ===");
if (errors.length === 0) {
  console.log("SUCCESS: 0 §4 violations found in src/!");
} else {
  console.log(`FOUND ${errors.length} VIOLATIONS:`);
  errors.forEach(e => console.log(` - ${e}`));
}
