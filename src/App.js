import { useState, useEffect } from "react";
import Player from "./components/Player";

function App() {
  const [songs] = useState([
    {
      title: "Titaliya",
      artist: "Hardy Sandhu",
      img_src: "./images/titaliya.jpg",
      src: "./music/Titliaan Warga.mp3",
    },
    {
      title: "Nach Meri Rani",
      artist: "Yo Yo Honey Singh",
      img_src: "./images/nach-meri-rani.jpg",
      src: "./music/Naach Meri Rani.mp3",
    },
    {
      title: "Care Ni Karda",
      artist: "Yo Yo Honey Singh",
      img_src: "./images/care-ni-karda.jpg",
      src: "./music/Care Ni Karda.mp3",
    },
    {
      title: "Zehnaseeb",
      artist: " Chinmayi and Shekhar Ravjiani",
      img_src: "./images/Zehnaseeb.jpeg",
      src: "./music/Zehnaseeb.mp3",
    },
    {
      title: "Maan meri jaan",
      artist: "King",
      img_src: "./images/maanmerijaan.jpeg",
      src: "./music/Maan Meri Jaan_192(PagalWorld.com.se) (1).mp3",
    },
    {
      title: "Kahani Sunno",
      artist: "Kafi kafi",
      img_src: "./images/kahani sunno.jpeg",
      src: "./music/Kahani Suno_192(PagalWorld.com.se).mp3",
    },
    {
      title: "Hum Marjayenge",
      artist: "Arijit Singh and Tulsi Kumar",
      img_src: "./images/hummrjayenge.jpeg",
      src: "./music/Hum Mar Jayenge.mp3",
    },
    {
      title: "Adat",
      artist: "Atif Aslam",
      img_src: "./images/Adat.jpeg",
      src: "./music/Aadat.mp3",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
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