import React from "react";
import { Link } from "@reach/router";

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name, animal, breed, media, location, id } = this.props;
    let pic;
    if (media && media.photos.photo && media.photos) {
      pic = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }
    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img alt={"image of" + name} src={pic[0].value} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </Link>
    );
  }
}

export default Pet;
