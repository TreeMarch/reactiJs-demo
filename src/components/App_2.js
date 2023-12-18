import React from "react";

function Welcome({myName}){
    return(
        <section>
            <h1>Hello, <span>{myName}</span></h1>
        </section>

    );
}
export default function myApp(){
    return(
        <div className="App">
            <Welcome myName={"Lee"}/>
        </div>
    );
}