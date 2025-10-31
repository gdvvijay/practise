import React from 'react';

const Comment = ({ comment, deleteComment }) => {
  const handleDelete = () => {
    // Pass the entire comment object to the delete function
    deleteComment(comment.id);
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <strong>{comment.author}</strong>
      <p>{comment.text}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Comment;