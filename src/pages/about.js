import React from 'react'; // get the React object from the react module
import  Header  from "../components/header";
import Menu from "../components/menu";

export default () => (
    <div>
        <Menu/>
        <Header message="Wait, gatsby makes in automatic the routing"/>
        <p>Wow is not magic, is science</p>
    </div>
) // expose the component to other modules