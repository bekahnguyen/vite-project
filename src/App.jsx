import { puppyList } from "./data.js";
import "./App.css";
import { useState } from "react";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  console.log(puppyList);

  function handleClick() {
    <></>;
  }

  return (
    <div className="App">
      {featPupId && <p>{featPupId}</p>}
      {puppies.map((puppy) => {
        return (
          <p
            onClick={() => {
              setFeatPupId(puppy.id);
            }}
            key={puppy.id}
          >
            {puppy.name}
          </p>
        );
      })}
    </div>
  );
}

export default App;
