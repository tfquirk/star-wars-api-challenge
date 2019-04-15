import React from "react";

// return a card with vehicle information

const VehicleCard = props => {
  const pushToVehicleShow = () => {
    // if a user clicks on a card, push them to the show page for that card
    props.history.push(props.vehicle.url.substring(20));
  };

  return (
    <div className="vehicleCard" onClick={pushToVehicleShow}>
      <div className="vehicleImg">
        <img
          src="https://dummyimage.com/250x250/fff/aaa"
          alt="Star Wars Vehicle"
        />
      </div>
      <div className="vehicleName">
        <h3>{props.vehicle.name}</h3>
      </div>
    </div>
  );
};

export default VehicleCard;
