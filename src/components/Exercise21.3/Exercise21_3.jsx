import image1 from "./image1.png";
import image2 from "./image2.jpg";
import image1Modified from "./image1-modified.png";
import image2Modified from "./image2-modified.jpg";
import React, { useRef } from "react";

const Exercise21_3 = () => {
  const image1Ref = useRef();
  const image2Ref = useRef();

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <img
        style={{ width: "300px", height: "300px" }}
        alt="alksds"
        src={image1Modified}
        ref={image1Ref}
        onMouseEnter={() => (image1Ref.current.src = image1)}
        onMouseOut={() => (image1Ref.current.src = image1Modified)}
      />
      <img
        style={{ width: "300px", height: "300px" }}
        alt="alksds"
        src={image2Modified}
        ref={image2Ref}
        onMouseEnter={() => (image2Ref.current.src = image2)}
        onMouseOut={() => (image2Ref.current.src = image2Modified)}
      />
    </div>
  );
};

export default Exercise21_3;
