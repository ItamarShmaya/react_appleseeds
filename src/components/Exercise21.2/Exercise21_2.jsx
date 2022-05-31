import React, { useRef } from "react";

const Exercise21_2 = () => {
  const videoRef = useRef();

  const onStartClick = () => {
    videoRef.current.play();
  };

  const onPauseClick = () => {
    videoRef.current.pause();
  };

  return (
    <>
      <video ref={videoRef} width="750" height="500">
        <source
          src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          type="video/mp4"
        />
      </video>
      <div>
        <button onClick={onStartClick}>Play</button>
        <button onClick={onPauseClick}>Pause</button>
      </div>
    </>
  );
};

export default Exercise21_2;
