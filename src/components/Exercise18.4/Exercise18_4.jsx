import React, { useState } from "react";

const items = ["one", "two", "three", "four", "five"];

const Exercise18_4 = () => {
  const mapCheckBoxes = () => {
    return items.map((item) => {
      return { name: item, checked: false };
    });
  };

  const [checkBoxes, setCheckBoxes] = useState(() => mapCheckBoxes());

  const onChange = (index) => {
    const dummyCheckBoxes = [...checkBoxes];
    dummyCheckBoxes[index].checked = !dummyCheckBoxes[index].checked;
    setCheckBoxes(dummyCheckBoxes);
  };

  const onDeleteButtonClick = () => {
    const newCheckBoxList = checkBoxes.filter((checkBox) => {
      return checkBox.checked === false;
    });
    setCheckBoxes(newCheckBoxList);
  };

  const onResetButtonClick = () => {
    setCheckBoxes(mapCheckBoxes());
  };

  const renderedList = checkBoxes.map((checkBox, index) => {
    return (
      <li key={checkBox.name}>
        <input
          id={checkBox.name}
          type="checkbox"
          checked={checkBox.checked}
          onChange={() => onChange(index)}
        />
        <label htmlFor={checkBox.name}>{checkBox.name}</label>
      </li>
    );
  });
  return (
    <div>
      <button onClick={onDeleteButtonClick}>Delete</button>
      <button onClick={onResetButtonClick}>Reset</button>
      <ul>{renderedList}</ul>
    </div>
  );
};

export default Exercise18_4;
