function gramophone(bandName, albumName, songName) {
    let songTime = (albumName.length * bandName.length) * songName.length / 2;

    let secForOneRotation = 2.5;
    let rotations = songTime / secForOneRotation
    console.log(`The plate was rotated ${Math.ceil(rotations)} times.`)
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');