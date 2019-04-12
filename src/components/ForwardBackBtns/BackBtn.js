import React from "react";

// connect to Redux state
import { connect } from "react-redux";

//import individual API call abstractions
import { fetchCharacters } from "../../apis/CharacterApiCall";

// return a back btn that will perform an action onClick
const BackBtn = props => {
  const handleBack = () => {
    props.fetchCharacters(props.charactersBack);
  };

  return (
    <div className="backBtn" onClick={handleBack}>
      <i class="fas fa-caret-left fa-6x" />
    </div>
  );
};

const mapStateToProps = state => {
  return { charactersBack: state.charactersBack };
};

const mapDispatchToProps = dispatch => {
  return { fetchCharacters: endpoint => fetchCharacters(dispatch, endpoint) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackBtn);
