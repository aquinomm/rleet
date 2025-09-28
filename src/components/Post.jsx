import React from 'react';

function Post({ post, isLoggedIn, currentUserId, onDelete, onEdit}) {
  // The user is the owner if they are logged in and their ID matches the post's authorId
  const isOwner = isLoggedIn && currentUserId === post.authorId;

  return (
    <article className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h3>
      <p className="text-gray-600">{post.content}</p>

      {/* Show action buttons only if the user is the owner */}
      {isOwner && (
        <div className="mt-4 flex gap-x-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-3 rounded-lg text-sm" onClick={() => onEdit(post)}>
            Edit
          </button>
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded-lg text-sm" onClick={() => onDelete(post.id)}>
            Delete
          </button>
        </div>
      )}
    </article>
  );
}

export default Post;