import React from "react";
import PersonCard from "./PersonCard";

export const mapPersonToPeopleCards = (people, props) => {
  return people.map(person => {
    return <PersonCard key={person.url} person={person} {...props} />;
  });
};
