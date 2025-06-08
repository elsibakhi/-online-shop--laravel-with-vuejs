const fs = require('fs');
const path = require('path');

const baseLangPath = path.resolve('resources/js/lang/en.json');
const modulesDir = path.resolve('Modules');

let finalLang = {};

// Deep merge helper
function deepMerge(target, source) {
  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === 'object' &&
      !Array.isArray(source[key])
    ) {
      if (!target[key]) target[key] = {};
      deepMerge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// Load base lang file
if (fs.existsSync(baseLangPath)) {
  finalLang = JSON.parse(fs.readFileSync(baseLangPath, 'utf8'));
}

// Loop modules and merge lang files
fs.readdirSync(modulesDir).forEach((moduleName) => {
  const langPath = path.join(
    modulesDir,
    moduleName,
    'resources/assets/js/lang/en.json'
  );

  if (fs.existsSync(langPath)) {
    const moduleLang = JSON.parse(fs.readFileSync(langPath, 'utf8'));
    finalLang = deepMerge(finalLang, moduleLang);
  }
});

// Save final merged file
fs.writeFileSync(baseLangPath, JSON.stringify(finalLang, null, 2), 'utf8');

console.log('✅ Merged all module language files into:', baseLangPath);
