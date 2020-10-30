import logo from "./logo.svg";
import "./App.css";
import upper, { text1, text2, text3 } from "./file1";
import person, { males, females } from "./file2";
import Welcome, { MultiWelcome } from "./file3";

const { firstName, email } = person;
const person1 = [...males, ...females];

let personV2 = person;
personV2.friends = person1;
personV2.phone = 123456;

const person2 = [...males, "Kurt", "Helle", ...females, "Tina"];

function App() {
  return (
    <div>
      <h2>Ex 1</h2>
      <p>{upper("please uppercase me")}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>
      <h2>Ex 2</h2>
      <p>
        {firstName}
        {email}
      </p>
      {console.log(person1)}
      {console.log(person2)}
      {console.log(personV2)}
      <h2>Ex 3</h2>
      <MultiWelcome />
    </div>
  );
}

export default App;
