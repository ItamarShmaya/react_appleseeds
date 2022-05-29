import React, { useState } from "react";
import "./Exercise18_2.css";

const list = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];

const Exercise18_2 = () => {
  const [todoList, setList] = useState(list);

  const onListItemClick = (index) => {
    const dummyList = [...todoList];
    dummyList[index].completed = !dummyList[index].completed;
    setList(dummyList);
  };

  const renderedList = todoList.map((item, index) => {
    const icon = item.completed ? <>&#10004;</> : <>&#10060;</>;
    const crossed = item.completed ? "crossed" : "";

    return (
      <div key={item.name} className="item">
        <span className={`item-name ${crossed}`}>{item.name}</span>
        <span className="icon" onClick={() => onListItemClick(index)}>
          {icon}
        </span>
      </div>
    );
  });

  return <div>{renderedList}</div>;
};

export default Exercise18_2;
