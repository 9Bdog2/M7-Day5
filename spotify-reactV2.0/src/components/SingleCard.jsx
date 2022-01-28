const SingleCard = (props) => {
    return (
        <img className="coverPic" src={props.src} alt='art cover' key={props.key} />
    )
}

export default SingleCard