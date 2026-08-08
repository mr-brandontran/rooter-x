import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      if (!file.includes('node_modules') && !file.includes('.git')) {
        results = results.concat(walk(file));
      }
    } else {
      if (file.endsWith('.astro') || file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.html')) {
        results.push(file);
      }
    }
  });
  return results;
}

console.log("=== ROOTER-X §16 QUALITY FLOOR AUDIT ===");

const files = walk('./src');

let hexErrors = [];
let twErrors = [];
let gradientErrors = [];
let emojiErrors = [];
let buzzwordErrors = [];
let fakeReviewErrors = [];

const hexRegex = /#(?:[0-9a-fA-F]{3}){1,2}\b/g;
const defaultTailwindRegex = /\b(blue|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|indigo|violet|purple|fuchsia|pink|rose)-(?:50|100|200|300|400|500|600|700|800|900|950)\b/g;
const gradientRegex = /bg-gradient-/g;
const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}]/u;
const buzzwords = ["elevate", "seamless", "unlock", "cutting-edge", "state-of-the-art", "your trusted partner", "peace of mind"];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');

  if (!file.endsWith('tokens.css')) {
    const hex = content.match(hexRegex);
    if (hex) hexErrors.push(`${file}: ${hex.join(', ')}`);
  }

  const tw = content.match(defaultTailwindRegex);
  if (tw) twErrors.push(`${file}: ${tw.join(', ')}`);

  if (gradientRegex.test(content)) gradientErrors.push(file);
  if (emojiRegex.test(content)) emojiErrors.push(file);

  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('<h1') || l.includes('<h2') || l.includes('<h3') || l.includes('<h4')) {
      buzzwords.forEach(b => {
        if (l.toLowerCase().includes(b)) {
          buzzwordErrors.push(`${file}:${idx+1} - "${b}" in line: ${l.trim()}`);
        }
      });
    }
  });
});

console.log(`1. Raw Hex outside tokens.css: ${hexErrors.length} found`);
if (hexErrors.length) hexErrors.forEach(e => console.log('  ', e));

console.log(`2. Default Tailwind color classes: ${twErrors.length} found`);
if (twErrors.length) twErrors.forEach(e => console.log('  ', e));

console.log(`3. CSS gradients (bg-gradient-*): ${gradientErrors.length} found`);
if (gradientErrors.length) gradientErrors.forEach(e => console.log('  ', e));

console.log(`4. Emojis: ${emojiErrors.length} found`);
if (emojiErrors.length) emojiErrors.forEach(e => console.log('  ', e));

console.log(`5. Prohibited buzzword headlines: ${buzzwordErrors.length} found`);
if (buzzwordErrors.length) buzzwordErrors.forEach(e => console.log('  ', e));

// Check paragraph uniqueness across services and cities
import { SERVICES } from '../src/data/services.ts';
import { CITIES } from '../src/data/cities.ts';

const serviceParagraphs = new Map();
let sharedServiceParas = 0;

SERVICES.forEach(s => {
  s.paragraphs.forEach(p => {
    if (serviceParagraphs.has(p)) {
      console.log(`DUPLICATE SERVICE PARAGRAPH between ${serviceParagraphs.get(p)} and ${s.title}: "${p.substring(0, 50)}..."`);
      sharedServiceParas++;
    } else {
      serviceParagraphs.set(p, s.title);
    }
  });
});
console.log(`6. Shared paragraphs across service pages: ${sharedServiceParas} found`);

const cityParagraphs = new Map();
let sharedCityParas = 0;

CITIES.forEach(c => {
  c.introParagraphs.forEach(p => {
    if (cityParagraphs.has(p)) {
      console.log(`DUPLICATE CITY PARAGRAPH between ${cityParagraphs.get(p)} and ${c.name}: "${p.substring(0, 50)}..."`);
      sharedCityParas++;
    } else {
      cityParagraphs.set(p, c.name);
    }
  });
});
console.log(`7. Shared paragraphs across city pages: ${sharedCityParas} found`);

// Check HTML view-source generation in dist
const distFiles = walk('./dist');
const htmlFiles = distFiles.filter(f => f.endsWith('.html'));
console.log(`8. Static HTML pages generated in dist/: ${htmlFiles.length} pages`);

let emptyShells = 0;
htmlFiles.forEach(h => {
  const content = fs.readFileSync(h, 'utf8');
  if (!content.includes('Rooter-X') || content.length < 500) {
    emptyShells++;
    console.log(`EMPTY SHELL DETECTED: ${h}`);
  }
});
console.log(`9. View-source empty shells: ${emptyShells} found`);
