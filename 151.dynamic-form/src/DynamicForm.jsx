import React, { useState } from 'react';
import './DynamicForm.css';

function DynamicForm() {
  const [members, setMembers] = useState([
    { name: 'Alice', role: 'Developer' }
  ]);

  const handleMemberChange = (index, event) => {
    // This is supposed to update a member's details
    const { name, value } = event.target;
    // const newMembers = [...members];
    // newMembers[index][name] = value;
    setMembers(prev=>prev.map((item,i)=>i == index ? {...item,[name]:value} : item))
  };

  const handleAddMember = () => {
    // This is supposed to add a new member field
    setMembers(prev=>[...prev,{name:'',role:''}])
  };
  
  const handleRemoveMember = (indexToRemove) => {
    // This is supposed to remove a member field
    setMembers(prev=>prev.filter((item,i)=>i != indexToRemove));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting team members:', members);
    alert('Team members saved! (Check the console)');
  };

  return (
    <form className="dynamic-form" onSubmit={handleSubmit}>
      {members.map((member, index) => (
        <div className="form-row">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={member.name}
            onChange={(e)=>handleMemberChange(index,e)}
          />
          <input
            type="text"
            name="role"
            placeholder="Role"
            value={member.role}
            onChange={(e) => handleMemberChange(index, e)}
          />
          <button type="button" className="remove-btn" onClick={()=>handleRemoveMember(index)}>
            Remove
          </button>
        </div>
      ))}
      <div className="controls">
        <button type="button" className="add-btn" onClick={handleAddMember}>
          + Add Member
        </button>
        <button type="submit" className="submit-btn">
          Save Team
        </button>
      </div>
    </form>
  );
}

export default DynamicForm;