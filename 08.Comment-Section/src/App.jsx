import React, { useState, useEffect } from 'react';
import CommentList from './CommentList';
import AddCommentForm from './AddCommentForm';

const App = () => {
  const [comments, setComments] = useState([
    { id: 1, author: 'Alice', text: 'This is the first comment!' },
    { id: 2, author: 'Bob', text: 'Great post, thanks for sharing.' },
  ]);

  // Effect to log when the component mounts
  useEffect(() => {
    console.log('Comments section has loaded.');
  }, [comments]);

  const addComment = (commentText) => {
    const newComment = {
      id: Date.now(),
      author: 'Guest', // Hardcoded for simplicity
      text: commentText,
    };
    setComments([...comments, newComment]);
    console.log('A new comment was added.');
  };
  
  const deleteComment = (commentIdToDelete) => {
    const updatedComments = comments.filter(
      (comment) => comment.id !== commentIdToDelete
    );
    setComments(updatedComments);
  };

  return (
    <div>
      <h1>Comments</h1>
      <CommentList comments={comments} deleteComment={deleteComment} />
      <AddCommentForm addComment={addComment} />
    </div>
  );
};

export default App;