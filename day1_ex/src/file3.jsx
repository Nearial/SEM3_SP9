import React from "react";
import propTypes from "prop-types";
import { persons } from "./file2";

export default function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export function WelcomePerson(props) {
  const { firstName, lastName, email } = props.person;

  return (
    <p>
      {firstName} {lastName} your e-mail is {email}
    </p>
  );
}

WelcomePerson.propTypes = {
  person: propTypes.shape({
    firstName: propTypes.string.isRequired,
    lastName: propTypes.string.isRequired,
    email: propTypes.string.isRequired,
  }),
};

export function MultiWelcome() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edith" />

      {persons.map((person) => (
        <WelcomePerson
          person={person}
          key={person.firstName + person.lastName + person.email + person.phone}
        />
      ))}
    </div>
  );
}
