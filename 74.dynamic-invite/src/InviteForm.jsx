
import React, { useState } from 'react';
import './InviteForm.css';

let nextId=0
function InviteForm() {
  const [members, setMembers] = useState([
    {id:nextId++, email: 'initial.member@example.com', role: 'Admin' }
  ]);
  

  const handleMemberChange = (index, event) => {
    // This should update a specific member's details
    const { name, value } = event.target;
    setMembers(prev=>{
       return (prev.map((item)=>{
          return (item.id == index) ? {...item,[name]:value} : item
      }))
    })
  };

  const handleAddMember = () => {
    // This should add a new, empty member field
    setMembers(prev=>([...prev,{id:nextId++,email:'',role:'Member'}]))
  };
  
  const handleRemoveMember = (indexToRemove) => {
    // This should remove a member at a specific index
    setMembers(prev=>prev.filter((item,i)=>item.id !== indexToRemove));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting team members:', members);
    alert('Team invitations sent (check the console)!');
  };

  return (
    <form className="invite-form" onSubmit={handleSubmit}>
      {members.map((member, index) => (
        <div key={member.id} className="member-row">
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={member.email} // Uses single email state for all inputs
            onChange={(e) =>{
               handleMemberChange(member.id, e)
               
            }}
          />
          <select
            name="role"
            value={member.role}
            onChange={(e) =>{
               handleMemberChange(member.id, e)

            }}
          >
            <option value="Admin">Admin</option>
            <option value="Member">Member</option>
            <option value="Guest">Guest</option>
          </select>
          <button type="button" className="remove-btn" onClick={()=>handleRemoveMember(member.id)}>
            Remove
          </button>
        </div>
      ))}
      <button type="button" className="add-btn" onClick={handleAddMember}>
        + Add Another
      </button>
      <button type="submit" className="submit-btn">
        Send Invitations
      </button>
    </form>
  );
}

export default InviteForm;