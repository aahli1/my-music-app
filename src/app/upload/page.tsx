// /src/app/upload/page.tsx
"use client";

import React from "react";
import { UploadButton } from "@bytescale/upload-widget-react";

const UploadPage = () => {
  // Configuration options for the widget
  const options = {
    apiKey: "public_12a1zA69U94W2K5cSJ4jDMppos4u", // Replace with your actual API key from Bytescale
    maxFileCount: 1,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "2rem" }}>
      <h1>Upload an Image</h1>
      <UploadButton options={options} onComplete={(files) => alert(files.map((file) => file.fileUrl).join("\n"))}>
        {({ onClick }) => (
          <button onClick={onClick} style={{ padding: "1rem 2rem", fontSize: "1rem", cursor: "pointer" }}>
            Upload a file...
          </button>
        )}
      </UploadButton>
    </div>
  );
};

export default UploadPage;
