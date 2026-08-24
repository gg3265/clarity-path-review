const fs = require('fs');
let content = fs.readFileSync('src/routes/__root.tsx', 'utf8');

// Add import safely at the top
content = content.replace(
  'import { ContactAction } from "@/components/ContactAction";',
  'import { ContactAction } from "@/components/ContactAction";\nimport { EntryPopup } from "@/components/EntryPopup";'
);

fs.writeFileSync('src/routes/__root.tsx', content, 'utf8');
