import React from "react";
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";
const fs = require("fs");

const LoadPDF = () => {
  const existingPdfBytes = fs.readFile(
    "./testdocs/cm010.pdf",
    "utf8",
    function (err, data) {
      console.log(data);
    }
  );

  const pdfDoc = PDFDocument.load(existingPdfBytes);
  const helveticaFont = pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages = pdfDoc.getPages();
  const firstPage = pages[0];

  // Get the width and height of the first page
  const { width, height } = firstPage.getSize();

  const pdfBytes = pdfDoc.save();
  return <div>{pdfBytes}</div>;
};

export default LoadPDF;
