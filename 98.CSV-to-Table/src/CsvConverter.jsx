import React, {useState} from 'react';
import './CsvConverter.css';

function CsvConverter() {
  const [tableData, setTableData] = useState({ headers: [], rows: [] }); // { headers: [], rows: [] }
  const [fileName, setFileName] = useState('');
  const [error, setError] = useState(null);
console.log(tableData)
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      try{
        setFileName(file.name);
      
      const reader = new FileReader();
      
      reader.onload = (event) => {
        const text = event.target.result;
        // Parse the CSV text (this logic is buggy)
        console.log(text)
        const rows = text.split(',');
        const headers = [rows.shift()]; // This won't work correctly
        setTableData({ headers, rows });
      };

      reader.readAsText(file); // Should be read as text
      }catch(err){
        setError('something went wrong.',err)
      }
    }
  };
  
  const handleReset = () => {
    setFileName('');
  };

  return (
    <div className="csv-converter">
      <div className="upload-controls">
        <input
          type="file"
          id="csv-file-input"
          className="file-input"
          accept=".csv"
          onChange={handleFileUpload}
        />
        <label htmlFor="csv-file-input" className="file-label">
          {fileName || 'Choose a CSV File'}
        </label>
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>

      {error && <div className="error-message">{error}</div>}
      
      {!error && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {tableData.headers.map(header => <th>{header}</th>)}
              </tr>
            </thead>
            <tbody>
              {tableData.rows.map(row => (
                <tr>
                  <td>{row}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CsvConverter;