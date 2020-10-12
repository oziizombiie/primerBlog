import React from "react" // get the React object from the react module
import Header from "../components/header";
import Menu from "../components/menu";

const titles = { color: 'Red', fontSize:'22px' }
const regular = { color: 'gray' }
const container = { margin:"15px" }

export default () => (
    <div>
        <Menu/>
        <Header style={titles} message="Hey! We are almost close to know what's going on" />
        <div style={container}>
            <p style={regular}> Something cool is going to <small style={{color:"green"}}> (happen) {'\u2728	'}  </small> </p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
    </div>
    ) // expose the component to other modules
