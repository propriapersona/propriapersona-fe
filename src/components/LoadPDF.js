import React from "react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const LoadPDF = async () => {
  const existingPdfBytes = await fetch("./testdocs/cm010.pdf").then((res) => {
    console.log(res);
    res.arrayBuffer();
  });

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const helveticaFont = pdfDoc.embedFont(StandardFonts.Helvetica);
  const pages = await pdfDoc.getPages();
  const firstPage = pages[0];

  // Get the width and height of the first page
  const { width, height } = firstPage.getSize();

  const pdfBytes = pdfDoc.save();
  return (
    <div>
      <iframe title="test">{pdfBytes}</iframe>
    </div>
  );
};

export default LoadPDF;
