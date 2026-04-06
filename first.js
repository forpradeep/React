<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
   

function    Greet(props){
    return <h2>jainwin {props.name}{props.age}</h2>
}
 const element1 = <h1>hello bhaiya</h1>
 const element2 =<Greet name ="Rohit Negi" age ="23"/>
 const root = ReactDOM.createRoot(document.getElementById("root"))
=======
import React from "react";
import ReactDOM from "react-dom/client";
   

function    Greet(props){
    return <h2>jainwin {props.name}{props.age}</h2>
}
 const element1 = <h1>hello bhaiya</h1>
 const element2 =<Greet name ="Rohit Negi" age ="23"/>
 const root = ReactDOM.createRoot(document.getElementById("root"))
>>>>>>> b99b8f3e5f70b50bf29f97a9823cd7f6074202e8
 root.render(element2);