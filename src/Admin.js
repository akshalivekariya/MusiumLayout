function Admin() {
    return(
        <>
         <div className="container">
        <div className="title1">
            <p className="t1">OUR TEAM</p>
                <h2>Expert Members</h2>
        </div>

        <div className="introc flex">
                <div className="introc1">
                <img src={require('./images/asset 21.jpeg')} ></img>
                <div className='it1'>
                    <h3>Johen Deceno</h3>
                    <p>Web Developer</p>
                </div>
                </div>
                <div className="introc1">
                <img src={require('./images/asset 22.jpeg')} ></img>
                <div className='it1'>
                    <h3>Rubina Delik</h3>
                    <p>Co-Founder</p>
                </div>
                </div>
                <div className="introc1">
                <img src={require('./images/asset 23.jpeg')} ></img>
                <div className='it1'>
                    <h3>Monoj Malik</h3>
                    <p>Front-end Engineer</p>
                </div>
                </div>
        </div>
       
        </div>

        <div className="video">
            <img src={require('./images/1.jfif')}></img>
          
        </div>

        
        </>
    )
}
export default Admin