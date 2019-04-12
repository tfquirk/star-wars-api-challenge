import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// import CharacterCard to use to make cards for each character
import CharacterCard from "./CharacterCard";

// return all container to hold all character cards on display
const CharacterCards = props => {
  const mapCharactersToCharacterCards = () => {
    return props.characters.map(character => {
      return <CharacterCard key={character.url} character={character} />;
    });
  };

  return (
    <div className="charactersContainer">{mapCharactersToCharacterCards()}</div>
  );
};

const mapStateToProps = state => {
  return { characters: state.characters };
};

export default connect(mapStateToProps)(CharacterCards);
