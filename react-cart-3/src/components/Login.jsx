import React from 'react'

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

    render() { 
        const {username, password} = this.state;
        const {handleChange} = this;
        console.log(this.state)
        return ( 
            <div >
                <input style={{margin:20, padding:10}} type="text" value={username} name="username" onChange={handleChange} />

                <input style={{margin:20, padding:10}} type="password" value={password} name="password" onChange={handleChange} />
                <button style={{padding:10}}>Login</button>
            </div>
         );
    }
}
 
export default Login;