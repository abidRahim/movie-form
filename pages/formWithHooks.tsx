import React, { useState } from "react";

export interface Inputs {
  movieTitle?: string;
  ratings?: number;
  posterLink?: string;
  releaseDate?: any;
}

const FormGroup: React.FunctionComponent = () => {
  const inputStateData: Inputs = {
    movieTitle: "",
    ratings: 0,
    posterLink: "",
    releaseDate: new Date()
  };

  const [inputState, setInputState] = useState<Inputs>(inputStateData);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (event) {
      event.preventDefault();
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setInputState(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Movie Title</label>
        <input
          type='text'
          name='movieTitle'
          onChange={handleInputChange}
          value={inputState.movieTitle}
        />
        <label>Movie Ratings</label>
        <input
          type='text'
          name='ratings'
          onChange={handleInputChange}
          value={inputState.ratings}
        />
        <label>Paster Poster link</label>
        <input
          type='text'
          name='posterLink'
          onChange={handleInputChange}
          value={inputState.posterLink}
        />
        <label>Release Date</label>
        <input
          type='date'
          name='releaseDate'
          onChange={handleInputChange}
          value={inputState.releaseDate}
        />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default FormGroup;
