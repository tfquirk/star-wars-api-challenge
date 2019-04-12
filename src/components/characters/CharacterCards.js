import React from "react";

// connect to Redux state
import { connect } from "react-redux";

// import CharacterCard to use to make cards for each character
import CharacterCard from "./CharacterCard";
import BackBtn from "../ForwardBackBtns/BackBtn";
import ForwardBtn from "../ForwardBackBtns/ForwardBtn";

// return all container to hold all character cards on display
const CharacterCards = props => {
  const mapCharactersToCharacterCards = () => {
    return props.characters.map(character => {
      return <CharacterCard key={character.url} character={character} />;
    });
  };

  return (
    <div className="movementContainer">
      <BackBtn />
      <div className="charactersContainer">
        {mapCharactersToCharacterCards()}
      </div>
      <ForwardBtn />
    </div>
  );
};

const mapStateToProps = state => {
  return { characters: state.characters };
};

export default connect(mapStateToProps)(CharacterCards);
