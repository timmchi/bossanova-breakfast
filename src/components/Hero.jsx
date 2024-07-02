const Hero = ({ handleScroll }) => {
    return (
        <div className="main-text">
            <h1 className="site-title">Bossa nova breakfast</h1>
            <h3 className="slogan"><i>Choose your soundtrack, then choose your breakfast</i></h3>
            <button onClick={handleScroll} className="CTA-button">Begin</button>
        </div>
    )
}

export default Hero