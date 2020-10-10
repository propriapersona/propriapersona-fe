import React, { useState, useEffect } from "react";
import { PDFDocument, rgb, StandardFonts, degrees } from "pdf-lib";

const LoadPDF = () => {
  const [pdfInfo, setPdfInfo] = useState([]);

  useEffect(() => {
    modifyPdf();
  }, []);
  // https://cors-anywhere.herokuapp.com/https://www.courts.ca.gov/documents/cm010.pdf
  const modifyPdf = async () => {
    const existingPdfBytes = await fetch(
      "https://pdf-lib.js.org/assets/with_update_sections.pdf"
    ).then((res) => res.arrayBuffer());
    console.log("existingPdfBytes", existingPdfBytes);

    const pdfDoc = await PDFDocument.load(existingPdfBytes, {
      ignoreEncryption: true,
    });
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
    const docUrl = URL.createObjectURL(
      new Blob(pdfBytes, { type: "application/pdf" })
    ).replace("blob:", "");
    setPdfInfo(docUrl);
    console.log(pdfBytes);
    // const base64DataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    // const pdfData = base64DataUri;
  };
  console.log("pdfInfo", pdfInfo);
  return (
    <>
      {
        <iframe
          title="test-frame"
          type="application/pdf"
          src={pdfInfo}
        ></iframe>
      }
    </>
  );
};

export default LoadPDF;
