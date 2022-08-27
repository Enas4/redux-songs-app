//Action creator
const SelectSong = (song) => {
  //Return an Action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};

export default SelectSong;
