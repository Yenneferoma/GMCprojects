# Blog Client React Application

## Overview

The **Blog Client** is a React-based web application that serves as a platform for tech enthusiasts and developers to read, share, and discuss blogs. The app features a clean and responsive design, navigation, authentication, and dynamic routing to ensure a seamless user experience.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Technologies Used](#technologies-used)
4. [Folder Structure](#folder-structure)
5. [Environment Variables](#environment-variables)
6. [How to Use](#how-to-use)
7. [API Endpoints](#api-endpoints)

---

## Features

- **User Authentication:** Login, logout, and token refresh management.
- **Dynamic Routing:** Pages like Home, Blogs, About, Get Started, and Blog Details.
- **SEO Optimization:** Dynamic page titles and meta descriptions.
- **State Management:** Redux Toolkit for managing user state.
- **Error Handling:** Comprehensive error handling for expired tokens and API issues.
- **Responsive Design:** Bootstrap-based layout for mobile-first responsiveness.

---

## Installation

Follow these steps to run the project locally:

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Yenneferoma/GMCprojects.git

   cd blog-client
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables (see [Environment Variables](#environment-variables)).

4. Start the development server:

   ```bash
   npm start
   # or
   yarn start
   ```

5. Open the application in your browser at `http://localhost:(put_your_port_here)`.

---

## Technologies Used

- **Frontend:** React.js, React Router DOM, Redux Toolkit
- **Styling:** Bootstrap 5
- **SEO:** Custom helper function for setting page metadata
- **API Communication:** RTK Query
- **Build Tools:** Webpack, Babel

---

## Folder Structure

```
blog-client/
├── public/                # Static assets
├── src/
│   ├── components/       # Reusable components
│   │   ├── NavigationBar.js
│   │   └── Layout.js
│   ├── pages/            # Page components
│   │   ├── HomePage.js
│   │   ├── BlogsPage.js
│   │   ├── AboutPage.js
│   │   ├── GetStartedPage.js
│   │   └── LoginPage.js
│   ├── helpers/          # Utility functions
│   │   └── SEO.js
│   ├── lib/              # API logic
│   │   ├── APIs/
│   │   │   ├── authApis.js
│   │   │   └── userApis.js
│   │   └── store.js
│   ├── App.js            # Main app component
│   ├── AppRoutes.js      # Routes for the app
│   └── index.js          # Entry point
└── .env                  # Environment variables
```

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_API_BASE_URL=http://localhost:put_your_port_here
REACT_APP_ENV=development
```

---

## How to Use

### User Authentication

- Navigate to `/get-started` to see the "Get Started" page.
- Log in via the `/get-started/login` page.

### Blog Navigation

- View all blogs on the `/blogs` page.
- Access blog details by navigating to `/blogs/:id`.

### Dashboard

- Access user-specific content on the `/dashboard` page (if authenticated).

---

## API Endpoints

The app communicates with the backend API using the following endpoints:

### Auth Endpoints

- **Login:** `POST /auth/login`
- **Logout:** `GET /auth/logout`
- **Refresh Token:** `POST /auth/refresh`

### User Endpoints

- **Get Current User:** `GET /users/me`

### Blog Endpoints

- **Get All Blogs:** `GET /blogs`
- **Get Blog Details:** `GET /blogs/:id`

---

## Contributing

We welcome contributions to improve the Blog Client application. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear and concise messages.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

Please ensure your code adheres to the project's coding standards and includes relevant tests.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---
