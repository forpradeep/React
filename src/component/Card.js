function Card(props){
    return(
        <div  className ="card "style={{border:"2px solid black" , padding:"2px"}}>
            <img src="https://images.meesho.com/images/products/261992578/z0qjf_512.webp" 
                 style={{width: "200px"}} />
            <div style={{textAlign: "center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}
export default Card;