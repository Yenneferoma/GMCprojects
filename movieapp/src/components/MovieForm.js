import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const MovieForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rating, setRating] = useState("");

  const createNewMovie = (event) => {
    event.preventDefault();

    if (!title || !description || !posterUrl || rating < 1 || rating > 10) {
      return alert(
        "Please fill in all fields and ensure rating is between 1 and 10."
      );
    }

    const movieData = {
      id: uuidv4(),
      title,
      description,
      posterUrl,
      ratings: parseFloat(rating),
    };
    props.onCreateNewMovie(movieData);

    setTitle("");
    setDescription("");
    setPosterUrl("");
    setRating("");
  };

  return (
    <Fragment>
      <div className="mt-5 mb-3">
        <h3>Create New Movie</h3>
      </div>

      <Form onSubmit={createNewMovie}>
        <Form.Group className="mb-3">
          <Form.Control
            value={title}
            placeholder="Enter Title"
            type="text"
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={description}
            placeholder="Enter Description"
            type="text"
            onChange={(event) => setDescription(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={posterUrl}
            placeholder="Poster Url"
            type="text"
            onChange={(event) => setPosterUrl(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            value={rating}
            placeholder="Rating (1-10)"
            type="number"
            onChange={(event) => setRating(event.target.value)}
          />
        </Form.Group>

        <Button
          type="submit"
          variant="secondary"
          disabled={
            !title || !description || !posterUrl || rating < 1 || rating > 10
          }
        >
          Submit
        </Button>
      </Form>
    </Fragment>
  );
};

export default MovieForm;
