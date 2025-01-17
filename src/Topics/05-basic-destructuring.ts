interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

//Esto es la desestructuración de objetos
const { song: anotherSong, songDuration: duration, details } = audioPlayer;
const { author: artist } = details;

// console.log("Song:", anotherSong);
// console.log("Duration:", duration);
// console.log("Author:", artist);

//Esto es la desestructuración de Arreglos

// const dbz: string[] = ["Goku", "Vegeta", "Trunks"];
// const trunks = dbz[3] || "No hay personaje";

// const [p1, p2, trunks]: string[] = ["Goku", "Vegeta", "Trunks"];

const [, , trunks = "Not found"]: string[] = ["Goku", "Vegeta"];

console.log("Personaje 3:", trunks);
