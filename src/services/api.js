import { posts as dummyPosts } from '../dummyData';

// This function simulates fetching all posts from a server.
export const fetchPosts = () => {
  console.log('Fetching posts from API...');
  return new Promise((resolve, reject) => {
    // Simulate a network delay
    setTimeout(() => {
      if (Math.random() > 0.1) {
        // Resolve the promise with the dummy data
        resolve(dummyPosts);
      } else {
        // Reject the promise with an error message
        reject(new Error('Network error: Could not fetch posts.'));
      }
    }, 100);
  });
};

export const fetchPostById = (postId) => {
  console.log(`Fetching post with ID: ${postId} from API...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = dummyPosts.find(p => p.id === parseInt(postId));
      
      if (post) {
        resolve(post);
      } else {
        reject(new Error('Post not found.'));
      }
    }, 500);
  });
};


