import fs from 'fs';
import path from 'path';

const pkgsDir = 'packages';
const pkgs = fs.readdirSync(pkgsDir).filter(f => 
  fs.statSync(path.join(pkgsDir, f)).isDirectory() && 
  fs.existsSync(path.join(pkgsDir, f, 'package.json'))
);

const versions = {};
pkgs.forEach(p => {
  const pj = JSON.parse(fs.readFileSync(path.join(pkgsDir, p, 'package.json'), 'utf8'));
  versions[pj.name] = pj.version;
});

console.log('Detected package versions:', versions);

pkgs.forEach(p => {
  const pjPath = path.join(pkgsDir, p, 'package.json');
  let content = fs.readFileSync(pjPath, 'utf8');
  let modified = false;

  Object.entries(versions).forEach(([name, ver]) => {
    // Replace "package-name": "workspace:*" with "package-name": "^ver"
    const regex = new RegExp(`"${name}":\\s*"workspace:\\*"`, 'g');
    if (regex.test(content)) {
      console.log(`Resolving ${name} to ^${ver} in ${p}`);
      content = content.replace(regex, `"${name}": "^${ver}"`);
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(pjPath, content);
  }
});
