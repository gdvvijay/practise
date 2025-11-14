import React, { useState } from 'react';
import Comment from './Comment';
import './CommentSection.css';

let nextId = 3;
const initialComments = [
  {
    id: 1,
    author: 'Alice',
    text: 'This is the first comment!',
    replies: [
      { id: 101, author: 'Bob', text: 'Great point, Alice!', replies: [] },
    ],
  },
  { id: 2, author: 'Charlie', text: 'How does this work?', replies: [] },
];


function CommentSection() {
  const [comments, setComments] = useState(initialComments);
  const [newCommentText, setNewCommentText] = useState('');
    
  const handleAddComment = () => {
    // This should add a new top-level comment
    if (newCommentText) {
        setComments(prev=>[...prev,{ id: crypto.randomUUID(), author: 'admin', text: newCommentText, replies: [] }])
      setNewCommentText('');
    }else{
        return
    }
  };

  const handleAddReply = (parentId, replyText) => {
    // // This is meant to add a reply to a comment with the given parentId
    // console.log(parentId)
    // function findAndAddReply(comment) {
    //   if (comment.id === parentId) {
    //     comment.replies.push({ id: Date.now(), author: 'CurrentUser', text: replyText, replies: [] });
    //   } else if (comment.replies) {
    //     comment.replies.forEach(reply => findAndAddReply(reply));
    //   }
    // }
    
    // // This approach mutates the state
    // comments.forEach(comment => findAndAddReply(comment));
    // setComments(comments);
    console.log(parentId, replyText)
    setComments(prev=>prev.map((item)=>item.id == parentId ? ({...item,replies:[...item.replies,{ id: crypto.randomUUID(), author: 'CurrentUser', text: replyText, replies: [] }]}) : item))
  };


  return (
    <div className="comment-section">
      <div className="comment-form">
        <textarea
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          placeholder="Write a new comment..."
        />
        <button onClick={handleAddComment}>Post Comment</button>
      </div>
      <div className="comment-list">
        {comments.map(comment => (
          <Comment
            comment={comment}
            onAddReply={handleAddReply}
          />
        ))}
      </div>
    </div>
  );
}

export default CommentSection;