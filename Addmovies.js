import React, { useState, useContext } from "react";
import { Moviecontext } from "./Moviecontext";

function Addmovies() {
  const [name, setName] = useState("");
  const [age, setage] = useState(10);
  const [gender, setGender] = useState("");
  const [movies, setMovies] = useContext(Moviecontext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name) {
      alert(`User ${name} added`);
      setMovies([...movies, { name: name, age: age, gender: gender }]);
    } else {
      alert("Input a name");
      return;
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add User</h2>
        <input
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="number"
          value={age}
          min={10}
          placeholder="age"
          onChange={(e) => {
            setage(e.target.value);
          }}
        />
        <input
          type="text"
          value={gender}
          placeholder="gender"
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Submit
        </button>
        <br />
      </form>
    </div>
  );
}

export default Addmovies;
