import React from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from '../components/Home'
import Login from '../components/Login'
import Cart from '../components/Cart'
import AllProducts from '../components/AllProducts'

const Routes=(props)=>{
    console.log(props)
    const {app} = props
    return (
        <div>
            <Switch>
            <Route path ="/" exact render={(...props)=><Home {...props} app = {app}/>}/>
            <Route path ="/login" render={(...props)=><Login {...props} app = {app}/>}/>
            <Route path ="/allproducts"  component={AllProducts}/>
            <Route path ="/cart" render={(...props)=><Cart {...props} app = {app}/>}/>
            </Switch>
        </div>
    )
}

export default Routes;