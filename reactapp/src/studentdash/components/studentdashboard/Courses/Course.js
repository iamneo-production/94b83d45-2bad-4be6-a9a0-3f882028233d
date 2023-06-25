import React, { useState } from 'react';
import Comment from "./Comment";
import '../../../src/assets/styles/Common.css';
// import '../../../src/assets/styles/Post.css';

function Course(props) {
  const { author, content, createdAt, comments } = props.post;
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [liked, setLiked] = useState(false);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== "") {
      props.addComment(props.post.id, commentText);
      setCommentText("");
    }
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={author.avatarUrl} alt={author.name} className="post-avatar" />
        <div className="post-info">
          <div className="post-author">{author.name}</div>
          <div className="post-date">{createdAt.toDateString()}</div>
        </div>
      </div>
      <div className="post-content">{content}</div>
      <div className="post-buttons">
        <button className={`post-button like ${liked ? "liked" : ""}`} onClick={handleLike}>
          <i className="far fa-like"></i> Like
        </button>
        <button className="post-button comment" onClick={toggleComments}>
          <i className="far fa-comment"></i> Comment
        </button>
        <button className="post-button share">
          <i className="fas fa-share-share"></i> Share
        </button>
      </div>
      {showComments && (
        <div className="post-comments">
          {comments.map((comment, index) => (
            <div key={index} className="post-comment">
              <Comment comment={comment} />
            </div>
          ))}
        </div>
      )}
      <form className="post-commentBox" onSubmit={handleCommentSubmit}>
        <input
          className="post-input"
          type="text"
          placeholder="Add a comment..."
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button className="post-commentButton" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

export default Course;
