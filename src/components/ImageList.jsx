import React from "react";
import ImageShow from "./ImageShow";
const ImageList = ({ images }) => {
  //     const renderImages = () => {
  //     return images.map((images, index) => {
  //       return <ImageShow images={images} />;
  //     });
  //   };

  const renderImages = images.map((image, index) => {
    return (
      <div className="col-4 py-5" key={index}>
        <ImageShow image={image} />
      </div>
    );
  });

  return (
    <div className="">
      <div className="row">{renderImages}</div>
    </div>
  );
};

export default ImageList;
