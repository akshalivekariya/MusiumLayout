function Resource() {
    return(
        <>
        <div className="resorce">
            <div className="container">
            <p>MUSEUM NEWS</p>
            <h1>Curated Visits</h1>
            <div className="res flex">
               <div className="res1">
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting indu stry. Ipsum has been the industry’s.</p>
               <p>It is a long established fact that a reader will be distracted by the reada ble content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-less normal distribution of letters, as opposed to using ‘Content here,</p>
               </div>
               <div className="res2">
                <p>There are many variations of passages of Lorem Ipsum available, but maj which don’t look even slightly believabl you are going to use a passage of Ipsum, you need to sure there isn’t anything embarrassing hidden in the text. All the Lorem Ipsum generators on the Internet tend to repeat pre hunks as necessary,</p>
               </div>
            </div>
            <div className="resimg">
            <img src={require('./images/asset 20.jpeg')}></img>
            </div>
            </div>
           
        </div>
        </>
    )
}
export default Resource