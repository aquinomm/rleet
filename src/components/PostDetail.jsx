import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPostById } from '/src/services/api.js';

function PostDetail() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Get the postId from the URL using the useParams hook
  const { postId } = useParams();

  useEffect(() => {
    // Fetch the specific post when the component mounts or postId changes
    fetchPostById(postId)
      .then(fetchedPost => {
        setPost(fetchedPost);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [postId]); // Re-run this effect if the postId in the URL changes

  if (isLoading) {
    return <p className="text-center text-gray-500 mt-8">⏳ Loading post...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500 mt-8">{error}</p>;
  }

  if (!post) {
    return null; 
  }

  return (
    <main className="container mx-auto p-6">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>
        <p className="text-gray-500 mb-6">By: {post.authorName}</p>
        
        <div className="text-gray-700 leading-relaxed text-lg break-words">
          <p style={{ whiteSpace: 'pre-wrap' }}>{post.content}</p>
        </div>
        
        <div className="mt-8 pt-4 border-t">
          <Link to="/" className="text-blue-600 hover:underline">
            &larr; Back to all posts
          </Link>
        </div>
      </div>
    </main>
  );
}

export default PostDetail;

