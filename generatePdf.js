import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';
import { products } from './src/data/products.js';

const doc = new PDFDocument({ margin: 50, size: 'A4' }); // A4 is 595.28 x 841.89
doc.pipe(fs.createWriteStream('./src/assets/catalogue.pdf'));

// Header section
const logoPath = path.join('./src', 'assets', 'logo.png');
if (fs.existsSync(logoPath)) {
  doc.image(logoPath, 50, 25, { width: 80 });
  doc.fontSize(26).fillColor('#2563eb').text('Airdum Enterprises', 150, 35);
  doc.fontSize(16).fillColor('gray').text('Product Catalogue', 150, 65);
  doc.fontSize(12).fillColor('gray').text('Contact: +91 7011209823', 400, 45, { width: 145, align: 'right' });
} else {
  doc.fontSize(26).fillColor('#2563eb').text('Airdum Enterprises', 50, 35);
  doc.fontSize(16).fillColor('gray').text('Product Catalogue', 50, 65);
  doc.fontSize(12).fillColor('gray').text('Contact: +91 7011209823', 400, 45, { width: 145, align: 'right' });
}

// Draw a line
doc.moveTo(50, 110).lineTo(545, 110).strokeColor('#e5e7eb').stroke();

let currentY = 130;
const productHeight = 320;
const imageBoxSize = 250;

products.forEach((product, index) => {
  // Check if we need to add a new page
  if (currentY + productHeight > 800) {
    doc.addPage();
    currentY = 50;
  }

  // --- Left Side: Image ---
  let imagePathStr = product.image;
  if (imagePathStr.startsWith('../')) imagePathStr = imagePathStr.slice(3);
  if (imagePathStr.startsWith('./')) imagePathStr = imagePathStr.slice(2);
  const imagePath = path.join('./src', imagePathStr);

  let hasImage = false;
  if (fs.existsSync(imagePath)) {
    try {
      doc.image(imagePath, 50, currentY, { fit: [imageBoxSize, imageBoxSize], align: 'center', valign: 'center' });
      hasImage = true;
    } catch (e) {
      console.error('Error adding image for', product.title, e);
    }
  } else {
    console.error('Image not found:', imagePath);
  }

  // --- Right Side: Details ---
  const textX = 50 + imageBoxSize + 30; // 330
  const textWidth = 545 - textX; // 215

  doc.fontSize(18).fillColor('black').text(product.title, textX, currentY + 20, { width: textWidth });
  doc.fontSize(12).fillColor('gray').text(`Category: ${product.category}`, textX, doc.y + 5, { width: textWidth });

  doc.fontSize(14).fillColor('#16a34a').text(`Price: Rs. ${product.price}`, textX, doc.y + 10, { width: textWidth });

  doc.rect(textX, doc.y + 10, textWidth, 1).fill('#f3f4f6');

  doc.fontSize(11).fillColor('#374151').text(product.description, textX, doc.y + 20, { width: textWidth, lineGap: 2 });

  // Move Y for next product
  currentY += productHeight;
});

doc.end();
console.log('PDF generated successfully at src/assets/catalogue.pdf');
