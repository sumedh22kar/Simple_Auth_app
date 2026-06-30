# React Authentication App

A simple authentication application built with React. This project demonstrates a basic authentication flow using Context API, React Router, and Local Storage without a backend.

## Features

* Home Page
* User Registration
* User Login
* Protected Dashboard
* Logout Functionality
* Context API Authentication
* Local Storage Session Management
* Session Persistence After Refresh
* React Router Navigation

## Technologies Used

* React
* React Router DOM
* Context API
* JavaScript (ES6)
* CSS

## Project Structure

```text
src
│
├── components
│   └── ProtectedRoute.jsx
│
├── context
│   └── AuthContext.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Register.jsx
│   ├── Login.jsx
│   └── Dashboard.jsx
│
├── App.jsx
└── main.jsx
```

## Authentication Flow

```text
Home
 │
 ├── Register
 │      │
 │      ▼
 │   Login
 │      │
 │      ▼
 └── Dashboard
        │
        ▼
      Logout
        │
        ▼
       Home
```

## Installation

Clone the repository:

```bash
git clone https://github.com/sumedh22kar/Simple_Auth_app/
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Concepts Practiced

* React Components
* React Hooks
* Context API
* React Router
* Protected Routes
* Local Storage
* Authentication Flow
* State Management

## Future Improvements

* Backend Authentication
* JWT Authentication
* Form Validation
* Password Hashing
* User Profile Page

## Author

**Sumedh Baviskar**
