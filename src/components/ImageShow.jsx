import React from "react";

const ImageShow = ({ image }) => {
  return (
    <div>
      <img
        style={{ height: "200px", width: "200px" }}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
};

export default ImageShow;
