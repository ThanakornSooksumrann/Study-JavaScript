class Media {
    constructor(info) {
        this.publishData = info.publishData;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
    }
}

const mySong = new Song({
    artist:"Queen",
    name: "Bohemian Rhapsody",
    publishData: 1975,
});

console.log(mySong);