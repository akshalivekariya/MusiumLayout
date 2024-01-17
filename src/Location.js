function Location() {
 return(
    <>
    <div className="container">
        <div className="title">
            <p>INFORMATION</p>
                <h2>Museum Information</h2>
        </div>
        <div className='info flex'>
        <div className="box1">
                <div className="i1">
                <img src={require('./images/3.png')} ></img>
                </div>
                <div className='i2'>
                    <h2>Open Hours</h2>
                    <p>Daily: 9.30 AM–6.00 PM</p>
                    <p>Sunday & Holidays: Closed</p>
                </div>
                <div className='btn'>
                    <a href='#'><p>OUR EVENT</p></a>
                </div>
        </div>
        <div className="box1">
                <div className="i1">
                <img src={require('./images/4.png')} ></img>
                </div>
                <div className='i2-2'>
                    <h2>Find Location</h2>
                    <p className='i2-3'>193 Sturt Street, Westbank 3216,</p>
                    <p className='i2-4'>Australia.</p>
                </div>
                <div className='btn'>
                    <a href='#'><p>OUR EVENT</p></a>
                </div>
        </div>
        <div className="box1">
                <div className="i1-3">
                <img src={require('./images/5.png')} ></img>
                </div>
                <div className='i2'>
                    <h2>Get Ticket</h2>
                    <p className='i3-1'>Collect Your Ticket Before</p>
                    <p className='i3-2'>The End</p>
                </div>
                <div className='btn'>
                    <a href='#'><p>OUR EVENT</p></a>
                </div>
        </div>
        </div>
       
    </div>
    </>
 )
}
export default Location