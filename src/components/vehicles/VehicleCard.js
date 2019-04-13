import React from "react";

// return a card with vehicle information

const VehicleCard = props => {
  return (
    <div className="vehicleCard">
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
