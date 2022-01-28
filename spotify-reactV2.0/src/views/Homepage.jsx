import SingleCard from "../components/SingleCard"
import { useState, useEffect } from "react"
import { fetchMusic } from "../apicalls"
import Header from "../components/Header"
import { Link } from "react-router-dom"

const Homepage = () => {

    const [daftPunk, setDaftPunk] = useState([])
    const [disclosure, setDisclosure] = useState([])
    useEffect(() => {
        fetchMusic('daft punk').then((res) => setDaftPunk(res))
        fetchMusic('disclosure').then((res) => setDisclosure(res))
    }, [])

    return (
        <div className="home-wrap">
            <Header />
            <h3 className="mt-3">Made for you</h3>
            <div className="cards-wrap">
                {daftPunk && daftPunk.slice(0, 5).map((music) => <Link to={'album/' + music.album.id}> <SingleCard src={music.album.cover_medium} key={music.id} /> </Link>)}
            </div>
            <h3 className="mt-3">Recently played</h3>
            <div className="cards-wrap">
                {disclosure && disclosure.slice(0, 5).map((music) => <Link to={'album/' + music.album.id}> <SingleCard src={music.album.cover_medium} key={music.id} /> </Link>)}
            </div>
        </div>
    )
}

export default Homepage