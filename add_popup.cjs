const fs = require('fs');
let content = fs.readFileSync('src/routes/__root.tsx', 'utf8');

// Add import
if (!content.includes('EntryPopup')) {
  content = content.replace(
    'import { MobileContactBar } from \"@/components/MobileContactBar\";',
    'import { MobileContactBar } from \"@/components/MobileContactBar\";\nimport { EntryPopup } from \"@/components/EntryPopup\";'
  );

  // Add component
  content = content.replace(
    '<Toaster position=\"top-center\" />',
    '<EntryPopup />\n          <Toaster position=\"top-center\" />'
  );

  fs.writeFileSync('src/routes/__root.tsx', content, 'utf8');
  console.log('Added EntryPopup to __root.tsx');
} else {
  console.log('Already added');
}
