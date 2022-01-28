export const SET_SONGS = "SET_SONGS";

export const getSongsAction = (artist) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        `https://strive-proxy.herokuapp.com/https://api.deezer.com/search?q=${artist}`,
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

      dispatch({
        type: SET_SONGS,
        payload: songs,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
