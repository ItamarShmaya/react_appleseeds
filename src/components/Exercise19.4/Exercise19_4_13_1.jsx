import React, { useEffect, useState } from "react";
import data from "../Exercise13_1/data";
import Names from "../Exercise13_1/Names";
import Card from "../Exercise13_1/Card";

const Exercise19_4_13_1 = () => {
  const [userNames, setUserNames] = useState([]);
  const [usersBornBefore1990, setUsersBornBefore1990] = useState([]);

  useEffect(() => {
    getNames();
    getUsersBefore1990();
  }, []);

  const getNames = () => {
    const names = data.map((user) => {
      return user.name;
    });
    setUserNames(names);
  };

  const getUsersBefore1990 = () => {
    const users = data.filter((user) => {
      return +user.birthday.slice(-4) < 1990;
    });
    setUsersBornBefore1990(users);
  };

  const renderedCards = usersBornBefore1990.map((user, i) => {
    return (
      <Card
        key={`${user.name}${i}`}
        name={user.name}
        birthday={user.birthday}
        meats={user.favoriteFoods.meats}
        fish={user.favoriteFoods.fish}
      />
    );
  });

  return (
    <>
      <Names names={userNames} />
      <div className="card-container">{renderedCards}</div>
    </>
  );
};

export default Exercise19_4_13_1;
