export const GET_ALBUM = "GET_ALBUM";
export const GET_ALBUM_ERROR = "GET_ALBUM_ERROR";

export const getAlbum = (albumId) => {
  return async (dispatch, getState) => {
    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    });

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/album/" + albumId,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        console.log(response);
        const album = await response.json();

        dispatch({
          type: GET_ALBUM,
          payload: album,
        });
      } else {
        dispatch({
          type: GET_ALBUM_ERROR,
          payload: response.status,
        });
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
