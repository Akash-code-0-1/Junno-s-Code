import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PdfViewer = ({ pdfUrl }) => {
  const pdfWorkerUrl = `https://unpkg.com/pdfjs-dist@3.12.0/build/pdf.worker.min.js`;

  return (
    <div style={{ height: '750px', width: '100%' }}>
      <Worker workerUrl={pdfWorkerUrl}>
        <Viewer fileUrl={pdfUrl} />
      </Worker>
    </div>
  );
};

export default PdfViewer;

