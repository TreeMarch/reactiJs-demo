import React from "react";

const Text = ({style = {}}) => (
    <p style={{...style,fontFamily:"Inter"}}>Hello World!</p>
);


const StyledText = withStyles(Text); //New component 

function withStyles(component){
    return(props) =>{
        const style = {
            color:"red",
            fontSize:"2em",
            // Merge props
            ...props.style,
        };
        return <component {...props} style={style}/>
    };
}


function Welcome({myName}){
    return(
        <section>
            <h1>Hello <span>{myName}</span></h1>
        </section>
    )
}

export default function MyApp(){
    return(
        <div className="App">
            <Welcome myName="Lee"/>
            Text component <Text/>
            StyledText Compoent <StyledText/>
        </div>
    );
}