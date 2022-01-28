const Sidebar = () => {
    return (
        <div className="sidebar-wrap">
            <div className="col-2 side-bar show">
                <div className="d-flex py-3"><img src={process.env.PUBLIC_URL + '../../public/Spotify_Logo_RGB_White'} alt="logo" height="40px"/></div>
                <a href="./home-page.html">
                    <div className="home d-flex"><i className="bi bi-house-door-fill my-2 px-3" /><strong>Home</strong></div>
                </a>
                <div className="search d-flex"><i className="bi bi-search my-2 px-3" /><strong>Search</strong></div>
                <div className="library d-flex"><i className="bi bi-list my-2 px-3" /><strong>Your Library</strong></div>
                <div className="square d-flex mt-3"><i className="bi bi-plus-square-fill my-2 px-3" /><strong>Create
                    Playlists</strong></div>
                <div className="liked-songs d-flex mt-1"><i className="bi bi-heart-fill px-3" /><strong>Liked Songs</strong>
                </div>
                <hr />
                <div className="sidebar-list mr-n2">
                    <p className="my-1">Boiler Room: Room 1 🔥</p>
                    <p className="my-1">L'Imperatrice Mix</p>
                    <p className="my-1">Oceanvs Orientalis 🌙</p>
                    <p className="my-1">Afro Indie</p>
                    <p className="my-1">Taba Brasilis 🍁</p>
                    <p className="my-1">Discover Weekly</p>
                    <p className="my-1">Modern Psychedelia</p>
                    <p className="my-1">Voix de l'Hexagone</p>
                    <p className="my-1">Afrobeat Essencials ⚡</p>
                    <p className="my-1">Cuendano Tabado</p>
                    <p className="my-1">Boiler Room: Room 1</p>
                    <p className="my-1">L'Imperatrice Mix</p>
                    <p className="my-1">Oceanvs Orientalis</p>
                    <p className="my-1">Afro Indie</p>
                    <p className="my-1">Taba Brasilis</p>
                    <p className="my-1">Discover Weekly</p>
                    <p className="my-1">Modern Psychedelia 🌈</p>
                    <p className="my-1">Voix de l'Hexagone</p>
                    <p className="my-1">Afrobeat Essencials</p>
                    <p className="my-1">Cuendano Tabado</p>
                </div>
                <div className="install d-flex pt-1 mb-2"><i className="bi bi-arrow-down-circle pr-2" /><strong>Install
                    App</strong></div>
            </div>
        </div>
    )
}

export default Sidebar