// src/dummyData.js
export const posts = [
  {
    id: 1,
    title: 'React for Beginners',
    content: 'A comprehensive guide to getting started with React. It covers components, state, and props.',
    authorId: 1, // This post belongs to user 1
  },
  {
    id: 2,
    title: 'Understanding Tailwind CSS',
    content: 'Learn how to style your applications faster with Tailwind CSS utility-first framework.',
    authorId: 2, // This post belongs to user 2
  },
  {
    id: 3,
    title: 'State Management in React',
    content: 'Exploring different ways to manage state, from useState to Context API.',
    authorId: 1, // This post also belongs to user 1
  },
];