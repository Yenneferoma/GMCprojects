# Movie App

A simple movie management app built with React. This app allows users to view a list of movies, filter them by title and rating, and add new movies to the list. It uses **React** for the front-end, along with **React-Bootstrap** for UI components.

## Features

- Display a list of movies with their title, description, poster image, and rating.
- Filter movies by title and minimum rating.
- Add new movies to the list with details like title, description, poster URL, and rating.
- Responsive design that works well on both desktop and mobile devices.
- Validation for input fields when creating new movies.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React-Bootstrap**: A Bootstrap library for React to handle UI components.
- **useState, useEffect**: React hooks to manage the component state and side effects.
- **PropTypes**: For type checking of props passed into components.

## Live Demo

You can view a live demo of the app [here](#) (replace with actual URL if applicable).

## Getting Started

### Prerequisites

Ensure you have **Node.js** and **npm** installed. You can check if you have them installed by running the following commands in your terminal:

```bash
node -v
npm -v
```

### Installing

To get started with the project locally:

Clone the repository:

```bash
git clone https://github.com/Yenneferoma/GProjects.git
cd movie-app
```

Install the required dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Your app will be running at http://localhost:3000.

### Running Tests

To run the tests for the app:

```bash
npm test
```

This will launch the test runner in watch mode.

### Building for Production

To create a production build of your app:

```bash
npm run build
```

This will generate a minified build of the app in the build folder, ready for deployment.

### Ejecting

If you need full control over the configuration of your app (e.g., Babel, Webpack), you can eject:

```bash
npm run eject
```

Note: This action is irreversible and should only be done if you need to customize the configuration beyond the default setup.

## Usage

Once the app is running:

- **Viewing Movies**: The app will display a list of movies. Each movie shows its title, description, and rating, along with a poster image.
- **Filtering Movies**: You can filter the list of movies by title or by a minimum rating.
- **Adding New Movies**: You can add new movies by filling in the form with the movie title, description, poster URL, and rating.

## Folder Structure

```plaintext
movie-app/
│
├── public/
│   ├── index.html           # HTML template
│   └── ...
│
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── MovieCard.js     # Component for displaying individual movie
│   │   ├── MovieForm.js     # Form to create a new movie
│   │   └── Filter.js        # Movie filter component
│   │
│   ├── App.js               # Main app component
│   ├── index.js             # Entry point of the app
│   └── App.css              # App-level styles
│
├── package.json             # Project metadata and dependencies
└── README.md                # Readme file
```

## Components

- **MovieCard**: Displays individual movie details such as title, description, poster, and rating.
- **MovieForm**: Allows users to add a new movie to the list by providing title, description, poster URL, and rating.
- **Filter**: Lets users filter movies by title and minimum rating.

## Contributing

We welcome contributions to improve this app. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to your forked branch (`git push origin feature-name`).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- The app uses React and React-Bootstrap for UI components.
- Icons and images used in the app are from free sources (if applicable).

## Additional Resources

For more information about React or the technologies used in this app, check out these resources:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [React-Bootstrap Documentation](https://react-bootstrap.github.io/getting-started/introduction/)
- [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)
