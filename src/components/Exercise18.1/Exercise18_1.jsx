import { useState } from "react";
import "./Exercise18_1.css";

const Exercise18_1 = ({ text, maxLength }) => {
  const [isHidden, setIsHidden] = useState(true);

  const onClick = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <div>
      <p>
        {isHidden ? text.slice(0, maxLength) : text}
        <span onClick={onClick}>{isHidden ? "...Read more" : "Show less"}</span>
      </p>
    </div>
  );
};

export default Exercise18_1;
