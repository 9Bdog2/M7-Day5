import {CgMusicNote} from 'react-icons/cg'

const SingleSong = ({title, artist, duration}) => {
    return (
        <div className="song-wrap text-white">
            <div className="icon"><CgMusicNote/></div>
            <div className="info">
                <span className='title'>{title}</span>
                <span className='artist'>{artist}</span>
            </div>
            <div className="duration">{duration}</div>
        </div>
    )
}

export default SingleSong