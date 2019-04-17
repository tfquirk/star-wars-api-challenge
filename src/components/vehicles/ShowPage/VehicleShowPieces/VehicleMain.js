import React from "react";

// import Tag compoent to be able to display tags, if created by user
import Tag from "../../../ReusableComponents/Tag";

const VehicleMain = props => {
  // if there any tags after the filter checked in the parent component,
  // create tags to be displayed
  const createTags = () => {
    return props.tags.map(tag => {
      return (
        <Tag
          key={tag.url + tag.tagName}
          tagColor={tag.color}
          tagName={tag.tagName}
        />
      );
    });
  };

  return (
    <div className="vehicleShowPageMain">
      {/* Display vehicle image*/}
      <div className="vehicleShowImg">
        <img
          src="https://dummyimage.com/250x250/fff/aaa"
          alt="Star Wars Planet"
        />
      </div>

      <div className="displayBlock">
        {/* Display vehicle name as header */}
        <div className="vehicleShowName">
          <h1>{props.vehicle.name}</h1>
        </div>

        {/* Display all relevant vehicle details */}
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

      {/* display all tags that have been created for only this vehicle */}
      <div className="tags">{createTags()}</div>
    </div>
  );
};

export default VehicleMain;
