import React from 'react';
import { Link } from 'react-router-dom';

function Post({ post, isLoggedIn, currentUserId, onDelete, onEdit}) {
  const isOwner = isLoggedIn && currentUserId === post.authorId;

  const truncateContent = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };

  const contentSnippet = truncateContent(post.content, 150);

  return (
    <article className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h3>
      <p className="text-gray-600">{contentSnippet}</p>

      <Link to={`/posts/${post.id}`} className="text-blue-600 hover:underline font-semibold">
          Read More &rarr;
        </Link>

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