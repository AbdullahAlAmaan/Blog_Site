const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

// Define the input and output paths
const inputPath = path.join(__dirname, 'views', 'index.ejs');
const outputPath = path.join(__dirname, 'dist', 'index.html');

// Define the data to pass to the EJS template
const templateData = {
  title: 'LekhaLekhi', // Define the title here
  blogs: [], // Include a sample blogs array or fetch from a source
  user: null // Set to null or provide a user object if available
};

// Read the EJS file
const template = fs.readFileSync(inputPath, 'utf8');

// Render the EJS file to HTML, passing the data and setting the views directory for includes
const renderedHtml = ejs.render(template, templateData, {
  views: [path.join(__dirname, 'views')] // Specify the views directory
});

// Ensure the output directory exists
fs.mkdirSync(path.dirname(outputPath), { recursive: true });

// Write the HTML to the output file
fs.writeFileSync(outputPath, renderedHtml);

console.log('EJS file rendered successfully!');
