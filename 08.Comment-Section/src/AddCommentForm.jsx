import React, { useState } from 'react';

const AddCommentForm = ({ addComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      addComment(commentText);
    }
    setCommentText(''); // Attempt to clear the input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Write a comment..."
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default AddCommentForm;