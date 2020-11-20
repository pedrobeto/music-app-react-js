import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Money Made Me Do It",
      artist: "Post Malone",
      img_src: "./images/song-1.jpg",
      src: "./music/money-made-me-do-it.mp3"
    },
    {
      title: "Franchise",
      artist: "Travis Scott",
      img_src: "./images/song-2.jpg",
      src: "./music/travis-scott-feat-young-thug-mia-franchise-official-audio.mp3"
    },
    {
      title: "Alone",
      artist: "Russ",
      img_src: "./images/song-3.jpg",
      src: "./music/russ-alone-official-audio.mp3"
    },
    {
      title: "Conversations",
      artist: "Juice WRLD",
      img_src: "./images/song-4.jpg",
      src: "./music/juice-wrld-conversations-official-audio.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if ((currentSongIndex + 1) > (songs.length - 1)) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}


export default App;
