import { useState } from "react";

function AddMovie(props) {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [IMDBRating, setIMDBRating] = useState(5);
  const [hasOscars, setHasOscars] = useState(true);

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleDirectorInput = (e) => {
    setDirector(e.target.value);
  };

  const handleRatingInput = (e) => {
    setIMDBRating(e.target.value);
  };

  const handleOscarsInput = (e) => {
    setHasOscars(e.target.checked); // boolean `checked` value from the `checkbox`
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const state = {
      title,
      director,
      IMDBRating,
      hasOscars,
    };

    // console.log("Form submitted", state);
    props.addMovie(state);

    // Reset the state
    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(false);
  };

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleInput}
        />

        <label>Director:</label>
        <input
          type="text"
          name="director"
          value={director}
          onChange={handleDirectorInput}
        />

        <label>IMDB Rating:</label>
        <input
          type="number"
          name="IMDBRating"
          value={IMDBRating}
          onChange={handleRatingInput}
        />

        <label>Won Oscars:</label>
        <input
          type="checkbox"
          name="hasOscars"
          checked={hasOscars}
          onChange={handleOscarsInput}
        />
        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
