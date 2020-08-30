import React, { useState, useEffect } from "react";
import { PDFDocument, rgb, StandardFonts, degrees } from "pdf-lib";

const LoadPDF = () => {
  const [pdfInfo, setPdfInfo] = useState({});

  useEffect(() => {
    modifyPdf();
  }, []);

  const modifyPdf = async () => {
    const existingPdfBytes = await fetch(
      "https://pdf-lib.js.org/assets/with_update_sections.pdf"
    ).then((res) => res.arrayBuffer());
    console.log("existingPdfBytes", existingPdfBytes);

    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    console.log("pdfDoc", pdfDoc);
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

    const pages = pdfDoc.getPages();
    console.log("pages", pages);
    const firstPage = pages[0];
    // Get the width and height of the first page
    const { width, height } = firstPage.getSize();
    firstPage.drawText("This text was added with JavaScript!", {
      x: 5,
      y: height / 2 + 300,
      size: 50,
      font: helveticaFont,
      color: rgb(0.95, 0.1, 0.1),
      rotate: degrees(-45),
    });

    const pdfBytes = await pdfDoc.save();
    setPdfInfo(pdfBytes);
    console.log(pdfBytes);
    const base64DataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    console.log("base64", base64DataUri);
    const image = document.createElement("img");
    image.src = base64DataUri;
    console.log(image);
    document.body.appendChild(image);
  };
  return <div>{/* <div title="test">{pdfInfo}</div> */}</div>;
};

export default LoadPDF;
