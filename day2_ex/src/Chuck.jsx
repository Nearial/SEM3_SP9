import { useEffect, useState } from "react";

function Chuck() {
  const [joke, setJoke] = useState("");
  const URL = "https://api.chucknorris.io/jokes/random";

  function getChuck() {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.value);
      });
  }

  return (
    <div>
      <button onClick={getChuck}>Get Chuck Joke</button>
      <p>{joke}</p>
    </div>
  );
}

export default Chuck;
