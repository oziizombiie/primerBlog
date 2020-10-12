import React from "react";
import { Link } from "gatsby"

const contenedor = { display:"inline-block", backgroundColor:"black",  width:"100%", padding:"25px 0px" }
const buttonMenu = { textDecoration:"none", color:"white", padding:"0px 15px", float:"right" }
export default () => (
    <div style={contenedor} >
        <Link style={buttonMenu} to="/"> Home </Link>
        <Link style={buttonMenu} to="/about/"> About </Link>
        <Link style={buttonMenu} to="/contact/"> Contact </Link>
    </div>
)