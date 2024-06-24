const LocationSearch = ({ searchValue, onSearch, handleSubmit }) => {
    return (
        <div className="location-search-container">
        <form onSubmit={handleSubmit}>
            <input value={searchValue} onChange={e => onSearch(e.target.value)} placeholder="Type in your location" className="location-search-input" />
            <button type="submit">Search</button>
        </form>
        </div>
    )
}

export default LocationSearch