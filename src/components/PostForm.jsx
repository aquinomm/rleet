import React, { useState, useEffect } from 'react';

function CreatePostForm({ onClose, onCreatePost, onUpdatePost, postToEdit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const isEditMode = Boolean(postToEdit);
  useEffect(() => {
    if (isEditMode) {
      setTitle(postToEdit.title);
      setContent(postToEdit.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [postToEdit, isEditMode]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert('Please fill in both the title and content.');
      return;
    }

    if (isEditMode) {
      onUpdatePost({ ...postToEdit, title, content });
    } else {
      onCreatePost({ title, content });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4"> {isEditMode ? 'Edit Post' : 'Create a New Post'}</h2>

      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title} 
          onChange={(e) => setTitle(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">
          Content
        </label>
        <textarea
          id="content"
          rows="5"
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        ></textarea>
      </div>

      <div className="flex items-center justify-end gap-x-4">
        <button
          type="button"
          onClick={onClose}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-lg"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          {isEditMode ? 'Save Changes' : 'Create Post'}
        </button>
      </div>
    </form>
  );
}

export default CreatePostForm;