function Card(props) {
    return (
        <div className="card" style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            width: "200px",
            boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
            cursor: "pointer"
        }}>
            <img
                src={props.image}
                style={{ width: "200px", borderRadius: "6px" }}
                alt={props.cloth}
            />
            <div style={{ textAlign: "center", marginTop: "8px" }}>
                <h3>{props.cloth}</h3>
                <p style={{ color: "green", fontWeight: "bold" }}>{props.offer}</p>
                <p>₹{props.price}</p>
                <button style={{
                    backgroundColor: "#ff3f6c",
                    color: "white",
                    border: "none",
                    padding: "8px 20px",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginTop: "6px"
                }}>
                    Shop Now
                </button>
            </div>
        </div>
    );
}
export default Card;