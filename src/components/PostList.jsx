import React from 'react';
import Post from './Post';

function PostList({ posts, isLoggedIn, currentUserId, onOpenModal, onDeletePost, onStartEdit}) {
  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Blog Posts</h2>
        {isLoggedIn && (
          <button
            onClick={onOpenModal} 
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
          >
            Create New Post
          </button>
        )}
      </div>

      <div className="space-y-6">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            isLoggedIn={isLoggedIn}
            currentUserId={currentUserId}
            onDelete={onDeletePost}
            onEdit={onStartEdit}
          />
        ))}
      </div>
    </section>
  );
}

export default PostList;