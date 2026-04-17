import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./Card";
import Footer from "./Footer";
import Header from "./Header";
import arr from "./utils/dummy";

function App() {
    const [A, setA] = useState(arr);

    function sortArray() {
        const sorted = [...A].sort((a, b) => a.price - b.price);
        setA(sorted);
    }

    function priceAbove500() {
        const filtered = arr.filter((value) => value.price > 499);
        setA(filtered);
    }

    function resetAll() {
        setA(arr);
    }

    return (
        <>
            <Header />
            <div style={{ padding: "10px 20px", display: "flex", gap: "10px" }}>
                <button onClick={sortArray}>Sort by Price</button>
                <button onClick={priceAbove500}>Price Above ₹499</button>
                <button onClick={resetAll}>Reset</button>
            </div>
            <div className="middle" style={{ display: "flex", gap: "10px", flexWrap: "wrap", padding: "20px" }}>
                {
                    A.map((value, index) => (
                        <Card key={index} cloth={value.cloth} offer={value.offer} price={value.price} image={value.image} />
                    ))
                }
            </div>
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);