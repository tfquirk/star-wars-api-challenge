import React from "react";

// connect to Redux state
import { connect } from "react-redux";

//import individual API call abstractions
import { fetchCharacters } from "../../apis/ApiCalls";

// return a forward btn that will perform an action onClick
const ForwardBtn = props => {
  const handleNext = () => {
    props.fetchCharacters(props.charactersNext);
  };

  return (
    <div className="forwardBtn" onClick={handleNext}>
      <i className="fas fa-caret-right fa-6x" />
    </div>
  );
};

const mapStateToProps = state => {
  return { charactersNext: state.charactersNext };
};

const mapDispatchToProps = dispatch => {
  return { fetchCharacters: endpoint => fetchCharacters(dispatch, endpoint) };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForwardBtn);
