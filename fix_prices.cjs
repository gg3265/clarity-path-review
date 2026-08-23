const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;

  // Replace â‚¹{var} with {formatPrice(var)}
  content = content.replace(/â‚¹\{([^}]+)\}/g, '{formatPrice($1)}');
  
  // Replace ₹{var} with {formatPrice(var)}
  content = content.replace(/₹\{([^}]+)\}/g, '{formatPrice($1)}');
  
  // Replace `₹${var}` with formatPrice(var)
  content = content.replace(/`â‚¹\$\{([^}]+)\}`/g, 'formatPrice($1)');
  content = content.replace(/`₹\$\{([^}]+)\}`/g, 'formatPrice($1)');
  
  // Also look out for `,1${...}` or similar artifacts
  content = content.replace(/`,1\$\{([^}]+)\}`/g, 'formatPrice($1)');
  content = content.replace(/,1\{([^}]+)\}/g, '{formatPrice($1)}');

  if (content !== original) {
    // Inject import if not exists
    if (!content.includes('formatPrice')) {
      const importStmt = `import { formatPrice } from "@/utils/formatPrice";\n`;
      const lastImportIndex = content.lastIndexOf('import ');
      if (lastImportIndex !== -1) {
        const endOfLine = content.indexOf('\n', lastImportIndex);
        content = content.slice(0, endOfLine + 1) + importStmt + content.slice(endOfLine + 1);
      } else {
        content = importStmt + content;
      }
    }
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Fixed', filePath);
  }
}

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      processFile(fullPath);
    }
  }
}

processDir('src/routes');
processDir('src/components');
