import React from 'react'
import {Redirect} from 'react-router-dom'
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            username:'',
            password:''
         }
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = ()=>{
        const {app} = this.props
        const {username,password} = this.state 
        let payload = {
            username,password
        }       
        app.validateUser(payload)
    }

    render() { 
        const {username, password} = this.state;
        const {handleChange} = this;
        console.log(this.state)
        const {app} =this.props

        if(app.isAuthenticated()){
            return <Redirect to = "/"/>
        }

        return ( 
            <div >
                <input style={{margin:20, padding:10}} type="text" value={username} name="username" onChange={handleChange} />

                <input style={{margin:20, padding:10}} type="password" value={password} name="password" onChange={handleChange} />
                <button style={{padding:10}} onClick={this.handleClick}>Login</button>
            </div>
         );
    }
}
 
export default Login;