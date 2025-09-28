import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList'; // Import the PostList
import { posts as dummyPosts } from '../dummyData'; // Import our dummy data
import { fetchPosts } from '../services/api';

// Let's pretend the logged-in user has an ID of 1
const LOGGED_IN_USER_ID = 1;

function Posts({ isLoggedIn, currentUserId }) {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [postToEdit, setPostToEdit] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then(fetchedPosts => {
        setPosts(fetchedPosts);
      })
      .catch(err => {
        setError(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []); 

  const handleStartEdit = (post) => {
    setPostToEdit(post); 
    setIsModalOpen(true); 
  };

  const handleCreatePost = (newPostData) => {
    const newPost = {
      id: Date.now(), 
      authorId: currentUserId, 
      title: newPostData.title,
      content: newPostData.content,
    };

    setPosts([newPost, ...posts]);

    setIsModalOpen(false);
  };

  const handleDeletePost = (id) => {
    // some validation maybe?
    const newPosts = posts.filter(post => post.id !== id);
    setPosts(newPosts);
  }

  const handleUpdatePost = (updatedPostData) => {
    setPosts(posts.map(post => 
      post.id === updatedPostData.id ? updatedPostData : post
    ));
    closeModalAndReset(); 
  };
  
  const closeModalAndReset = () => {
    setIsModalOpen(false);
    setPostToEdit(null);
  };

  const renderContent = () => {
    if (isLoading) {
      return <p className="text-center text-gray-500">⏳ Loading posts...</p>;
    }

    if (error) {
      return <p className="text-center text-red-500">{error}</p>;
    }

    return (
      <PostList
        posts={posts}
        isLoggedIn={isLoggedIn}
        currentUserId={currentUserId}
        onOpenModal={() => setIsModalOpen(true)}
        onDeletePost={handleDeletePost}
        onStartEdit={handleStartEdit}
      />
    );
  };

  return (
    <>
      <main className="container mx-auto p-6">

        {renderContent()}
        
      </main>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <PostForm onClose={() => setIsModalOpen(false)} 
          onCreatePost={handleCreatePost} 
          onUpdatePost={handleUpdatePost}
          postToEdit={postToEdit}/>
      </Modal>
    </>
  );
}

export default Posts;