const BreakfastOptionCard = ({ place }) => {

    return (
        <div className="breakfast-card">
            <div className="place-description">
            <p>{place?.name}</p>
            <p>{place?.rating}</p>
            <p>{place?.vicinity}</p>
            <p>{place?.types[0]}</p>
            </div>
            <div className="place-photo">
            <img height={100} width={100} alt={`${place?.name} picture`} src={place?.photos[0].getUrl()} />
            </div>
        </div>
    )
}

export default BreakfastOptionCard