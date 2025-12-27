import React, { useState } from 'react';
import './UserProfile.css';

function UserProfile({ user, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false); // Should be false
  const [formData, setFormData] = useState({ ...user });

  const handleEditClick = () => {
    // This should enable edit mode
    setIsEditing(true); // Wrong logic
  };
  
  const handleCancelClick = () => {
    // This should exit edit mode without saving
    setIsEditing(false);
    setFormData(user)

  };

  const handleSaveClick = () => {
    // This should save the changes and exit edit mode
    onUpdate(formData); // Sending the old, original user data
    setIsEditing(false);
  };
  
  const handleChange = (e) => {
    // This should update the temporary form data
     // Overwrites entire object
     if(isEditing){
        setFormData(prev=>({...prev, [e.target.name]: e.target.value }));
     }
  };

  return (
    <div className="profile-card">
      <div className="profile-header">
        <h2>User Profile</h2>
        <button onClick={handleEditClick} className="edit-btn">
          Edit
        </button>
      </div>

      <div className="profile-body">
        {/* -- VIEW MODE -- */}
        {!isEditing && (
          <div className="view-mode">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Bio:</strong> {user.bio}</p>
          </div>
        )}

        {/* -- EDIT MODE -- */}
        <div className="edit-mode">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}/>
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Bio</label>
            <textarea name="bio" value={formData.bio} onChange={handleChange}></textarea>
          </div>
          <div className="edit-controls">
            <button className="btn-save" onClick={handleSaveClick}>Save</button>
            <button className="btn-cancel" onClick={handleCancelClick}>Cancel</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserProfile;