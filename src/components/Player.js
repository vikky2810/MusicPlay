import React, { useRef, useState, useEffect } from 'react';



const Player = ({ src , songName}) => {

  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);



  useEffect(() => {

    const handleKeyPress = (event) => {

      if (event.code === 'Space') {

        togglePlayPause();

      }

    };



    // Add event listener for keydown events

    document.addEventListener('keydown', handleKeyPress);



    // Clean up event listener on component unmount

    return () => {

      document.removeEventListener('keydown', handleKeyPress);

    };

  }, []);



  const togglePlayPause = () => {

    if (isPlaying) {

      audioRef.current.pause();

    } else {

      audioRef.current.play();

    }

    setIsPlaying(!isPlaying);

  };



  return (

    <div>

      <h3>Song : {songName}</h3>

      <audio ref={audioRef} src={src} />

      <button onClick={togglePlayPause}>

        {isPlaying ? 'Pause' : 'Play'}

      </button>

    </div>

  );

};



export default Player;
