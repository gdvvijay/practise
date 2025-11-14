import React from 'react';
import './FileUploadItem.css';

// Accept `errorMessage` prop for displaying validation failures
function FileUploadItem({ file, progress, status, errorMessage, onRemove }) {
  const fileName = file.name;
  const fileSize = (file.size / (1024 * 1024)).toFixed(2); // Convert to MB

  return (
    // Add the `status` class to the item for potential conditional styling
    <div className={`file-upload-item ${status}`}>
      <div className="file-info">
        <span>{fileName} ({fileSize} MB)</span>
        {/* Display status or error message */}
        <span className={`status ${status}`}>
          {status === 'failed' ? `FAILED: ${errorMessage}` : status.toUpperCase()}
        </span>
      </div>
      <div className="progress-bar-container">
        {/* Bug 6 Fix: Set width as a percentage. */}
        {/* Don't show progress bar for failed items */}
        {status !== 'failed' && (
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        )}
      </div>
      <button className="remove-btn" onClick={onRemove}>x</button>
    </div>
  );
}

export default FileUploadItem;