import React from 'react';
import { Redirect } from 'react-router-dom';

function Cart(props) {
    console.log(props)
    const { app } = props
    const isAuth = app.isAuthenticated()

    if(!isAuth){
        return <Redirect to ='/login'/>
    }

    const data = app.getCartItems()
    return (
        <div>
             <div>
                {data?.map((item)=>(
                    <div key={item.id} style={{display: "flex"}}>
                        <div style={{flex:1}}>{item.name}</div>
                        <div style={{flex:1}}>{item.price}</div>
                        <div style={{flex:1}}>{item.qty}</div>
                        <div style={{flex:1}}><img src={item.url}/></div>
                        <div style={{flex:1}}>{item.category}</div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Cart;