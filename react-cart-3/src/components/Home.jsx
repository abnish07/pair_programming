import React from 'react'
import data from '../data.json'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }



    handleClick = (id)=>{
        let item = data.find(item =>item.id===id)

        const {app} = this.props
        console.log(item)
        app.addTOCart(item)
    }



    render() { 
        console.log(this.props)
        return ( 
            <div>
                {data.map((item)=>(
                    <div key={item.id} style={{display: "flex"}}>
                        <div style={{flex:1}}>{item.name}</div>
                        <div style={{flex:1}}>{item.price}</div>
                        <div style={{flex:1}}><img src={item.url}/></div>
                        <div style={{flex:1}}>{item.category}</div>
                        <button style={{margin:10}} onClick={()=>this.handleClick(item.id)}>Add to Cart</button>
                    </div>
                ))}
            </div>
         );
    }
}
 
export default Home;