import React from "react";

const Comments = async ({ promise }) => {
  const comments = await promise;
  return (
    <div className="mt-6">
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
