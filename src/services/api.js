import { posts as dummyPosts } from '../dummyData';

// This function simulates fetching all posts from a server.
export const fetchPosts = () => {
  console.log('Fetching posts from API...');
  return new Promise((resolve, reject) => {
    // Simulate a network delay
    setTimeout(() => {
      // Simulate a chance of failure
      if (Math.random() > 0.3) {
        // Resolve the promise with the dummy data
        resolve(dummyPosts);
      } else {
        // Reject the promise with an error message
        reject(new Error('Network error: Could not fetch posts.'));
      }
    }, 1000);
  });
};

