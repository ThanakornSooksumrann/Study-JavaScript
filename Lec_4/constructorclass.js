class Song {
    constructor(title, artist, music) {
    this.title = title;
    this.artist = artist;
    this.music = music;
    }
}

const mySong = new Song("Bohemian Rhapsody", "Queen","Naruto");
console.log(mySong.title);
console.log(mySong.artist);
console.log(mySong.music);