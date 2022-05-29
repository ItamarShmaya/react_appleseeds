import React, { useState } from "react";

const Exercise18_3 = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  // const [formData, setFormData] = useState({
  //   seconds: 0,
  //   minutes: 0,
  //   hours: 0,
  // });

  const onChange = ({ target }) => {
    const { name, value } = target;

    if (name === "seconds") {
      setSeconds(+value);
      setMinutes(+value / 60);
      setHours(+value / 3600);
    } else if (name === "minutes") {
      setMinutes(+value);
      setSeconds(+value * 60);
      setHours(+value / 60);
    } else if (name === "hours") {
      setHours(+value);
      setMinutes(+value * 60);
      setSeconds(+value * 3600);
    }
  };

  return (
    <div className="inputs">
      <label htmlFor="seconds">Seconds</label>
      <input
        id="seconds"
        name="seconds"
        type="text"
        value={seconds}
        onChange={(e) => onChange(e)}
      />
      <label htmlFor="minutes">Minutes</label>
      <input
        id="minutes"
        name="minutes"
        type="text"
        value={minutes}
        onChange={(e) => onChange(e)}
      />
      <label htmlFor="hours">Hours</label>
      <input
        id="hours"
        name="hours"
        type="text"
        value={hours}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Exercise18_3;
