import React from "react";

const VehicleMain = props => {
  return (
    <div className="vehicleShowPageMain">
      <div className="vehicleShowImg">
        <img
          src="https://dummyimage.com/250x250/fff/aaa"
          alt="Star Wars Planet"
        />
      </div>
      <div className="displayBlock">
        <div className="vehicleShowName">
          <h1>{props.vehicle.name}</h1>
        </div>
        <div className="vehicleShowDetails">
          <h3>Model: {props.vehicle.model}</h3>
          <h3>Manufacturer: {props.vehicle.manufacturer}</h3>
          <h3>Cost: {props.vehicle.cost_in_credits} credits</h3>
          <h3>Length: {props.vehicle.length} meters</h3>
          <h3>Max speed: {props.vehicle.max_atmosphering_speed}</h3>
          <h3>Crew: {props.vehicle.crew}</h3>
          <h3>Passengers: {props.vehicle.passengers}</h3>
          <h3>Cargo capacity: {props.vehicle.cargo_capacity}</h3>
          <h3>Consumables: {props.vehicle.consumables}</h3>
        </div>
      </div>
    </div>
  );
};

export default VehicleMain;
