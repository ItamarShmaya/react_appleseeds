import React, { useEffect, useRef, useState } from "react";

const Exercise21_1 = () => {
  const [editMode, setEditMode] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (editMode) inputRef.current.focus();
  }, [editMode]);
  return (
    <>
      <button onClick={() => setEditMode((prev) => !prev)}>
        {editMode ? "Save" : "Edit"}
      </button>
      {editMode && <input ref={inputRef} type="text" />}
    </>
  );
};

export default Exercise21_1;
