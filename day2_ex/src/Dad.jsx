import { useEffect, useState } from "react";

function Dad() {
  const [joke, setJoke] = useState("");
  const URL = "https://icanhazdadjoke.com/";

  function getDad() {
    fetch(URL, { headers: { Accept: "application/json" } })
      .then((res) => res.json())
      .then((data) => {
        setJoke(data.joke);
      });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      getDad();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>Dad Jokes</p>
      <p>{joke}</p>
    </div>
  );
}

export default Dad;
