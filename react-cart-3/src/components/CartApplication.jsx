import React from 'react'
import Routes from '../Route/Routes';
import Navbar from '../Navbar/Navbar';
import {Redirect} from 'react-router-dom'

class CartApplication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartArray : [],
            users : [{
                name:"abnish",
                password:"abnish"
            }],
            isAuth :false
        }
    }

    isAuthenticated = ()=>{
        if(this.state.isAuth){
            return true
        }else{
            return false
        }
    }

    addTOCart=(product)=>{
        if(!this.isAuthenticated()){
            alert("you must have login first")
        }
        let cart = [...this.state.cartArray]
        let id = product.id
        console.log(cart)
        let item = {
            ...product,
            qty:1
        }

        let duplicate = false
        for(let i = 0 ;i<cart.length;i++){
            if(cart[i].id===id){
                duplicate =true
                cart[i].qty++
            }
        }
        if(duplicate){
            this.setState({
                cartArray:cart
                
            })
        }else{
            this.setState({
                cartArray:[...cart,item]
            })
        }
    }

    getCartItems = ()=>{
        return this.state.cartArray
    }

    // login - > authentication

    validateUser = ({username,password}) =>{
        let flag = false;
        this.state.users.forEach(user=>{
            if(user.name === username && user.password === password)
            {
                flag = true
            }
        }) 
        if(flag){
            alert("user is valid")
            this.setState({
                isAuth:true
            })
        }else{
            alert("give write credential")
        }
    }


    render() {
        let methods = {
            addTOCart:this.addTOCart,
            getCartItems:this.getCartItems,
            validateUser:this.validateUser,
            isAuthenticated:this.isAuthenticated
        }

        return (
            <div>
                <Navbar />
                <Routes app = {methods}/>
            </div>
        );
    }
}

export default CartApplication;