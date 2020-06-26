import React from 'react';
import {Link, Switch} from 'react-router-dom';

const Navbar=()=>{
    return (
        <div style={{display:"flex", margin:20}}>

            <Link style={{flex:1}} to="/">Home</Link>
            <Link style={{flex:1}} to="/login">Login</Link>
            <Link style={{flex:1}} to="/allproducts">All Products</Link>
            <Link style={{flex:1}} to="/cart">Cart</Link>
            </div>
    )
}
export default Navbar;