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
    <div className="allCharacters">
      <h1>Characters:</h1>
      {/* movementContainer holds the forward and back buttons as well as the
      character cards */}
      <div className="movementContainer">
        {/* only display back button if this is not the first serious of cards */}
        {props.charactersBack ? <BackBtn /> : <div className="backBtn" />}
        <div className="charactersContainer">
          {/* create cards from the characters currently in redux state */}
          {mapCharactersToCharacterCards()}
        </div>
        {/* only display forward button if this is not the last serious of cards */}
        {props.charactersNext ? <ForwardBtn /> : <div className="forwardBtn" />}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    characters: state.characters,
    charactersNext: state.charactersNext,
    charactersBack: state.charactersBack
  };
};

export default connect(mapStateToProps)(CharacterCards);
