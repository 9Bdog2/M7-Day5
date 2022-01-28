export const fetchMusic = async (query) => {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    let music = await response.json()
    return music.data
}

export const fetchAlbum = async (id) => {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`)
    let album = await response.json()
    return album
}