// src/App.jsx
import { useEffect, useState } from "react";

function FileUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    const uploaded = e.target.files[0];
    setFile(uploaded);

    // ❌ BUG 1: Directly setting file object as preview (not URL)
     if (uploaded) {
      setPreview(URL.createObjectURL(uploaded)); // ✅ proper preview
    }
    
  };

  const handleUpload = (e) => {
    if (!file) {
      alert("No file selected");
      return;
    }
    // ❌ BUG 2: Simulates upload but doesn't reset file/preview
    alert(`Uploaded ${file.name}`);
   
    setFile(null); // ✅ reset
    setPreview("");
    
  };
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);
  return (
    <div>
      <h2>Buggy File Upload</h2>
      {/* ❌ BUG 3: Missing accept filter (user can select any file) */}
      <input type="file" accept="image/*" onChange={handleChange} />

      {/* ❌ BUG 4: Crashes if preview is not a string URL */}
      {preview && <img src={preview} alt="preview" width="150" />}
      
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <FileUpload />
    </div>
  );
}

export default App;
