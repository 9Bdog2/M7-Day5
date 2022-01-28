import { fetchAlbum } from "../apicalls"
import { useEffect, useState } from "react"
import SingleSong from "../components/SingleSong"

const AlbumPage = (props) => {

    const [album, setAlbum] = useState({})

    useEffect(() => {
        fetchAlbum(props.match.params.id).then((res) => setAlbum(res))
    }, [])

    return (
        <div className="album-wrap">
            <div className="album-left-info mt-5">
                <img src={album.cover_medium} alt="cover" />
                <h3>{album.title}</h3>
            </div>
            <div className="album-right-info mt-5">
                {album?.tracks?.data.map((song) => <SingleSong title={song.title} artist={song.artist.name} duration={song.duration / 60} />)}
            </div>
        </div>
    )
}

export default AlbumPage