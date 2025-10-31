import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments, deleteComment }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <Comment comment={comment} deleteComment={deleteComment} key={comment.id}/>
      ))}
    </div>
  );
};

export default CommentList;