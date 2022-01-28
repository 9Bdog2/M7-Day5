export const FETCH_SONGS = "FETCH_SONGS";

export const getSongs = (artist) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://deezerdevs-deezer.p.rapidapi.com/search?q=${artist}`,
        {
          method: "GET",
          headers: {
            "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
            "X-RapidAPI-Key":
              "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
          },
        }
      );

      let result = await response.json();
      let songs = result.data;
      console.log(songs);

      dispatch({
        type: FETCH_SONGS,
        payload: songs,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
