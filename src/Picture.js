function Picture() {
    return(
        <>
        <div className="ima">
        <div className="container">
            <div className="title">
            <p>GALLERY</p>
                <h2>Explore the Collection</h2>
                
            </div>
            <div className="tlist flex">
                    <p>Pictures</p>
                    <p>Display</p>
                    <p>Poster</p>
                    <p>Modern Arts</p>
                </div>
            <div className="flex">
                <div className="p1">
                <img src={require('./images/asset 6.jpeg')} ></img>
                <div className="p1t"><p>Date At Gallery Photo</p></div>
                </div>
                <div className="p1">
                <img src={require('./images/asset 7.jpeg')} ></img>
                <div className="p1t"><p>Artifact Roman Parque</p></div>
                </div>
                <div className="p1">
                <img src={require('./images/asset 8.jpeg')} ></img>
                <div className="p1t"><p>Near Brodick Isle Arran</p></div>
                </div>
            </div>
            <div className="flex">
                <div className="p1">
                <img src={require('./images/asset 9.jpeg')} ></img>
                <div className="p1t"><p>Parque Nacional Nevado</p></div>
                </div>
                <div className="p1">
                <img src={require('./images/asset 10.jpeg')} ></img>
                <div className="p1t"><p>Paul Landscape Paintings</p></div>
                </div>
                <div className="p1">
                <img src={require('./images/asset 11.jpeg')} ></img>
                <div className="p1t"><p>View Of The Roman Forum</p></div>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Picture