import React, { useState } from 'react';
import './Comment.css';

// A recursive component for displaying comments and their replies
function Comment({ comment, onAddReply }) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText) {
      onAddReply(comment.id,replyText); // The parent's ID is missing
      setReplyText('');
    }
  };

  return (
    <div className="comment">
      <div className="comment-body">
        <strong className="comment-author">{comment.author}</strong>
        <p className="comment-text">{comment.text}</p>
        <button className="reply-btn" onClick={()=>setShowReplyForm(true)}>Reply</button>
      </div>

      {showReplyForm && (
        <form onSubmit={handleReplySubmit} className="reply-form">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
          />
          <button type="submit">Post Reply</button>
        </form>
      )}

      {comment.replies && comment.replies.length > 0 && (
        <div className="comment-replies">
          {comment.replies.map(reply => (
            <Comment
              comment={reply}
              onAddReply={onAddReply}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;