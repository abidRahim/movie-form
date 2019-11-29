import React, { useState } from "react";

interface Inputs {
  movieTitle?: "Avatar" | string;
  ratings?: number;
  posterLink?: string;
  releaseDate?: object;
}

const FormGroup: React.FunctionComponent = () => {
  const inputStateData: Inputs = {
    movieTitle: "Avatar",
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
    <div className='container'>
      <h2>Movie Details</h2>
      <div className='card'>
        <div className='card-body'>
          <form onSubmit={handleSubmit}>
            <link
              rel='stylesheet'
              href='https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css'
              integrity='sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh'
              crossorigin='anonymous'
            ></link>
            <div className='form-group'>
              <label>Movie Title</label>
              <input
                type='text'
                name='movieTitle'
                className='form-control'
                onChange={handleInputChange}
                value={inputState.movieTitle}
              />
              <label>Movie Ratings</label>
              <input
                type='text'
                name='ratings'
                className='form-control'
                onChange={handleInputChange}
                value={inputState.ratings}
              />
              <label>Paster Poster link</label>
              <input
                type='text'
                name='posterLink'
                className='form-control'
                onChange={handleInputChange}
                value={inputState.posterLink}
              />
              <label>Release Date</label>
              <input
                type='date'
                name='releaseDate'
                className='form-control'
                onChange={handleInputChange}
                value={inputState.releaseDate}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormGroup;
