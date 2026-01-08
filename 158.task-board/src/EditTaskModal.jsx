import React, { useState } from 'react';
import './EditTaskModal.css';

function EditTaskModal({ task, onSave, onClose }) {
  const [formData, setFormData] = useState(task);
// console.log(task)
  const handleChange = (e) => {
    // State is overwritten on every change
    // e.preventDefault()
    // e.stopPropagation()
    setFormData(prev=>({...prev , [e.target.name]: e.target.value }));
  };
  
  const handleSave = (e) => {
    e.preventDefault();
    // e.stopPropagation()
    // console.log(formData)
    onSave({ ...task, ...formData });
  };

  return (
    <div className="modal-overlay" onClick={e=>onClose(e)
    }>
      <div className="modal-content">
        <h3>Edit Task</h3>
        <form onSubmit={handleSave}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onClick={e=>e.stopPropagation()}
            onChange={handleChange}
          />
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onClick={e=>e.stopPropagation()}
            onChange={handleChange}
          ></textarea>
          <div className="modal-actions">
            <button type="submit" onClick={e=>e.stopPropagation()}>Save Changes</button>
            <button type="button" onClick={(e)=> onClose(e)
            }>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditTaskModal;