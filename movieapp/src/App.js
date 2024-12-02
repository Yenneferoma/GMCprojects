import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MovieList from "./components/MovieList";
import MovieForm from "./components/MovieForm";
import Filter from "./components/Filter";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: "frtyuiop",
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology.",
      ratings: 8.8,
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
    },
    {
      id: "qwertyghtyrfd",
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker emerges from his mysterious past.",
      ratings: 9.0,
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: "bncxasdfgtui",
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      ratings: 8.6,
      posterUrl:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
    },
  ]);

  const [filterCriteria, setFilterCriteria] = useState({
    title: "",
    ratings: "",
  });

  const handleFilter = ({ title, ratings }) => {
    setFilterCriteria({ title, ratings });
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = filterCriteria.title
      ? movie.title.toLowerCase().includes(filterCriteria.title.toLowerCase())
      : true;
    const matchesRating = filterCriteria.ratings
      ? movie.ratings >= parseFloat(filterCriteria.ratings)
      : true;
    return matchesTitle && matchesRating;
  });

  const onCreateNewMovie = (movieData) => {
    setMovies([...movies, movieData]);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <Filter onFilter={handleFilter} />
          <div className="movie-list-container">
            <MovieList movies={filteredMovies} />
          </div>
          <MovieForm onCreateNewMovie={onCreateNewMovie} />
        </Col>
        <Col lg={3}></Col>
      </Row>
    </Container>
  );
};

export default App;
