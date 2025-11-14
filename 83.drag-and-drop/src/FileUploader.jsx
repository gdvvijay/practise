import React, { useState, useEffect } from 'react';
import FileUploadItem from './FileUploadItem';
import './FileUploader.css';

const MAX_FILE_SIZE = 2 * 1024 * 1024; // 2 MB
const ALLOWED_FILE_TYPES = ['text/plain', 'application/pdf'];

function FileUploader() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

  // Drag event handlers
  const handleDragOver = (e) => {
    e.preventDefault(); // Bug 1 Fix: Prevent default browser behavior
    e.stopPropagation(); // Stops event from bubbling
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    // Bug 4 Fix: Set to true when dragging starts
    setIsDragging(true); 
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault(); // Bug 1 Fix: Prevent default browser behavior here too
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFiles = Array.from(e.dataTransfer.files);
    
    // Process dropped files with validation
    const newFilesToAdd = [];
    droppedFiles.forEach(file => {
      let status = 'pending';
      let errorMessage = '';

      // Bug 8 Fix: Implement file type and size validation
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        status = 'failed';
        errorMessage = 'Invalid file type.';
      } else if (file.size > MAX_FILE_SIZE) {
        status = 'failed';
        errorMessage = 'File too large.';
      }

      newFilesToAdd.push({
        id: file.name + '-' + Date.now(),
        file,
        progress: 0,
        status: status,
        errorMessage,
      });
    });

    // Bug 2 & 3 Fix: Update state immutably by spreading previous files and new ones.
    setFiles(prevFiles => [...prevFiles, ...newFilesToAdd]);
  };

  // Simulating file upload progress
  useEffect(() => {
    // Only run if there are pending files AND the component is not in a completed state
    if (files.some(f => f.status === 'pending' || f.status === 'uploading')) {
      const uploadTimer = setInterval(() => {
        setFiles(prevFiles =>
          prevFiles.map(f => {
            if (f.status === 'pending' || f.status === 'uploading') {
              // Ensure we don't exceed 100%
              const newProgress = Math.min(f.progress + 10, 100); 
              let newStatus = 'uploading';

              if (newProgress >= 100) {
                // Once progress hits 100, mark as completed
                newStatus = 'completed';
              }
              return { ...f, progress: newProgress, status: newStatus };
            }
            return f;
          })
        );
      }, 300); // Progress update interval
      
      // Clear interval on component unmount or if files change to prevent memory leaks/fast-ticking
      return () => clearInterval(uploadTimer);
    }
    // Bug 5 Fix: Add `files` to dependencies so effect re-runs if files array changes.
    // However, the `some` check helps control when it's active.
  }, [files]);


  const handleRemoveFile = (idToRemove) => {
    // Bug 7 Fix: Update state immutably by filtering the array.
    setFiles(prevFiles => prevFiles.filter(file => file.id !== idToRemove));
  };

  return (
    <div
      className={`drop-zone ${isDragging ? 'drag-over' : ''}`} 
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <p>Drag & Drop files here, or click to browse</p>
      
      <div className="file-list">
        {files.map(fileItem => (
          <FileUploadItem
            key={fileItem.id}
            file={fileItem.file}
            progress={fileItem.progress}
            status={fileItem.status}
            errorMessage={fileItem.errorMessage} // Pass error message for display
            onRemove={() => handleRemoveFile(fileItem.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default FileUploader;