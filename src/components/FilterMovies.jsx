import { useState } from "react";

function FilterMovies(props) {
  console.log("Filtered Props:", props)
  const [firstLetter, setFirstLetter] = useState("All");

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);

    console.log("selected", e.target.value);
    props.filterMovies(e.target.value); //actions-up(lifting state-up)

    //filterMovies is a function 
    // that is passed to the FilterMovies component as a prop.
    // from a parent component(MovieList) 

    // Inside the handleSelect function, props.filterMovies(e.target.value) is 
    // called. This sends the selected value (e.g., "A," "B,", etc) back to
    // the "parent" component by invoking the filterMovies function that was 
    // originally passed down as a prop.

    // The filterMovies function in the parent component (MovieList) 
    // receives the selected value as its argument. 
    // It can then use this value to perform some action, 
    // such as filtering the list of movies based on the selected criteria.


  };

  return (
    <div className="FilterMovies">
      <label>Show movies by first letter:</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option value="All">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}

export default FilterMovies;
