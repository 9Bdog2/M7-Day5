export const GET_ARTIST_SONGS = "GET_ARTIST_SONGS";
export const GET_ARTIST_DATA = "GET_ARTIST_DATA";

export const getArtistSongs = (artistId) => {
  return async (dispatch) => {
    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
    });

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId,
        {
          method: "GET",
          headers,
        }
      );

      if (response.ok) {
        let artist = await response.json();
        dispatch({
          type: GET_ARTIST_DATA,
          payload: artist,
        });

        let tracksResponse = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
            artist.name,
          {
            method: "GET",
            headers,
          }
        );

        if (tracksResponse.ok) {
          let tracklist = await tracksResponse.json();
          dispatch({
            type: GET_ARTIST_SONGS,
            payload: tracklist.data,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
};
export const likeUnlike = (element, dispatchName) => {
  return async (dispatch) => {
    dispatch({
      type: dispatchName,
      payload: element,
    });
  };
};
