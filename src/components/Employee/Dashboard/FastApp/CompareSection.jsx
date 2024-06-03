import React, { useState } from 'react';

const CompareSection = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPdfUrl(url);
    }
  };

  return (
    <div style={{ height: '100%', overflow: 'hidden' }}>
      <h2 className='text-2xl font-semibold mb-4'>Compare Section</h2>
      <div style={{ height: 'calc(50% - 16px)', overflow: 'auto', border: '1px solid #ccc', marginBottom: '16px' }}>
        <iframe 
          src="https://shopeefy-cdac.vercel.app" 
          title="Comparison"
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      </div>
      <div style={{ height: 'calc(50% - 16px)', overflow: 'auto', border: '1px solid #ccc' }}>
        {pdfUrl ? (
          <iframe 
            src={pdfUrl} 
            title="PDF Viewer"
            style={{ width: '100%', height: '100%', border: 'none' }}
          ></iframe>
        ) : (
          <div style={{ padding: '20px' }}>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <p>Please upload a PDF file to view it here.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CompareSection;
