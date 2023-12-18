import React from "react";
import PricingPage from "./PricingPages"

const Text = ({ style = {}}) => (
    <p style={{...style,fontFamily:"Inter"}}>Hello World! Im Coming</p>
);

const StyledText = withStyles(Text); // new components

function withStyles(Compoent){
    return(props) =>{
        const style = {
            color:'red',
            fontSize:'1em',
            //Merge props
            ...props.style,
        };
        return <Compoent {...props} style={style}/>;
    };
}

function Welcome({myName}){
    return(
        <section>
            <h1>Hello , <span>{myName}</span></h1>
        </section>
    );
}
export default function MyApp(){
    return(
        <div className="App">
            <Welcome myName="Rock"/>
            <Text/>
            <StyledText/>
        </div>

    );
}