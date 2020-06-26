import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home'
import Login from '../components/Login'
import Cart from '../components/Cart'
import AllProducts from '../components/AllProducts'

const Routes=()=>{
    return (
        <div>
            <Switch>
            <Route path ="/" exact component={Home}/>
            <Route path ="/login"  component={Login}/>
            <Route path ="/allproducts"  component={AllProducts}/>
            <Route path ="/cart"  component={Cart}/>
            </Switch>
        </div>
    )
}

export default Routes;