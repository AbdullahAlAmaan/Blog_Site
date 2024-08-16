const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Define the input and output paths
const inputPath = path.join(__dirname, 'views', 'index.ejs');
const outputPath = path.join(__dirname, 'dist', 'index.html');

// Read the EJS file
const template = fs.readFileSync(inputPath, 'utf8');

// Render the EJS file to HTML
const renderedHtml = ejs.render(template);

// Ensure the output directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

// Write the HTML to the output file
fs.writeFileSync(outputPath, renderedHtml);
