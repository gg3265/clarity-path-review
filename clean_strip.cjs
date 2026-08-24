const fs = require('fs');
const files = [
  'src/routes/about.tsx',
  'src/routes/contact.tsx',
  'src/routes/doctors.tsx',
  'src/routes/index.tsx',
  'src/routes/quality-standards.tsx',
  'src/routes/second-opinion.tsx',
  'src/routes/services.tsx',
  'src/routes/tests.tsx'
];

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/import \{ FeaturedTestsBar \} from \"@\/components\/FeaturedTestsBar\";\n/g, '');
  content = content.replace(/<FeaturedTestsBar \/>\n?\s*/g, '');
  fs.writeFileSync(file, content, 'utf8');
  console.log('Cleaned', file);
}

// Delete the component file
if (fs.existsSync('src/components/FeaturedTestsBar.tsx')) {
  fs.unlinkSync('src/components/FeaturedTestsBar.tsx');
  console.log('Deleted src/components/FeaturedTestsBar.tsx');
}
