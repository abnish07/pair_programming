import React from 'react'
import data from '../data.json'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                {data.map((item)=>(
                    <div key={item.id} style={{display: "flex"}}>
                        <div style={{flex:1}}>{item.name}</div>
                        <div style={{flex:1}}>{item.price}</div>
                        <div style={{flex:1}}><img src={item.url}/></div>
                        <div style={{flex:1}}>{item.category}</div>
                        <button style={{margin:10}}>Add to Cart</button>
                    </div>
                ))}
            </div>
         );
    }
}
 
export default Home;