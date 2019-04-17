import React from "react";

// import Tag compoent to be able to display tags, if created by user
import Tag from "../../../ReusableComponents/Tag";

// displays a person's image, name, details, and any tags that may have been added
const PersonMain = props => {
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
    <div className="personShowPageMain">
      {/*Person's image */}
      <div className="personShowImg">
        <img
          src="https://dummyimage.com/250x250/fff/aaa"
          alt="Star Wars Character"
        />
      </div>

      <div className="displayBlock">
        {/*Person's name as header text */}
        <div className="personShowName">
          <h1>{props.person.name}</h1>
        </div>

        {/*Person's personal details */}
        <div className="personShowDetails">
          <h3>
            Hair color:{" "}
            {props.person.hair_color.charAt(0).toUpperCase() +
              props.person.hair_color.substring(1)}
          </h3>
          <h3>
            Eye color:{" "}
            {props.person.eye_color.charAt(0).toUpperCase() +
              props.person.eye_color.substring(1)}
          </h3>
          <h3>Height: {props.person.height}</h3>
          <h3>
            Gender:{" "}
            {props.person.gender.charAt(0).toUpperCase() +
              props.person.gender.substring(1)}
          </h3>
        </div>
      </div>

      {/*Person's tags display here if any have been created */}
      <div className="tags">{createTags()}</div>
    </div>
  );
};

export default PersonMain;
