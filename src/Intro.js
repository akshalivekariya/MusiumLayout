function Intro() {
    return(
        <>
         <div className="container">
        <div className="title1">
            <p className="t1">WHAT’S GOING ON</p>
                <h2>Upcoming Exhibitions</h2>
        </div>

        <div className="introc flex">
                <div className="introc1">
                <img src={require('./images/asset 1.jpeg')} ></img>
                <div className='it1'>
                    <h3>Calvert Richard Jones’s Duomo.</h3>
                    <p>Oct 21, 2021 – Oct 30, 2021</p>
                </div>
                </div>
                <div className="introc1">
                <img src={require('./images/asset 2.jpeg')} ></img>
                <div className='it1'>
                    <h3>Calvert Richard Jones’s Duomo.</h3>
                    <p>Oct 21, 2021 – Oct 30, 2021</p>
                </div>
                </div>
                <div className="introc1">
                <img src={require('./images/asset 3.jpeg')} ></img>
                <div className='it1'>
                    <h3>Calvert Richard Jones’s Duomo.</h3>
                    <p>Oct 21, 2021 – Oct 30, 2021</p>
                </div>
                </div>
        </div>
       
        </div>
        </>
    )
}
export default Intro;