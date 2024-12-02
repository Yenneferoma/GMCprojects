import React from "react";
import { Button, Card } from "react-bootstrap";

const MovieCard = (props) => {
  const { title, description, posterUrl, ratings } = props.movie;

  return (
    <Card style={{ width: "100%" }} className="mb-3 shadow-sm">
      <Card.Img
        variant="top"
        src={posterUrl || "https://via.placeholder.com/150"}
        alt={`${title} movie poster`}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <strong>Rating:</strong> {ratings || "N/A"}/10
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => alert(`Details about ${title}`)}
        >
          More Details
        </Button>
      </Card.Body>
    </Card>
  );
};

MovieCard.defaultProps = {
  movie: {
    posterUrl: "https://via.placeholder.com/150",
    title: "Unknown Title",
    description: "No description available.",
    ratings: "N/A",
  },
};

export default MovieCard;
