# rleet Blog Front-End

This repository contains the front-end code for a modern blog application built with React and Vite. It features a complete user interface for viewing, creating, editing, and deleting blog posts, along with user authentication pages.

This project is designed to be connected to a backend API, which will be implemented separately using Spring Boot.

## Features
- Multi-Page Navigation: Uses react-router-dom for seamless navigation between pages (Home, Login, Signup).

- Post Management (CRUD):

    - Create new posts via a modal form.

    - Read all posts on the main page.

    - Update existing posts using the same modal form in "edit" mode.

    - Delete posts owned by the logged-in user.

- Conditional UI: The interface dynamically changes based on the user's authentication status. For example, "Edit" and "Delete" buttons are only visible to the post owner.

- User Authentication Flow: Includes dedicated pages for user Login and Signup.

- Client-Side Validation: The signup form includes validation for required fields, email format, and password matching to provide immediate feedback to the user.

- Loading & Error States: The post list gracefully handles loading and potential network errors, improving the user experience.

- Modular Structure: Code is organized into reusable components (components), pages (pages), and a dedicated API service layer (services).

- Modern Styling: Styled with Tailwind CSS for a clean, responsive, and utility-first design.

## Tech Stack

Framework: React

Build Tool: Vite

Routing: React Router

Styling: Tailwind CSS

Package Manager: npm

## Project Structure

The project follows a standard React application structure to keep the codebase organized and maintainable.
```
/src
|-- /components     # Reusable UI components (Header, Post, Modal, etc.)
|-- /pages          # Page-level components (Posts, Login, Signup)
|-- /services       # API call logic (api.js)
|-- App.jsx          # Main application component with routing setup
|-- dummyData.js    # Mock data for initial development
|-- index.css       # Tailwind CSS directives
|-- main.jsx        # Entry point of the application
```

## Backend Integration

Soon...
