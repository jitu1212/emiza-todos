import React, {useState} from "react"

import axios from "axios"
import { useNavigate } from "react-router-dom"
import './Login.css'
const PORT=process.env.PORT||9002;

const Login = ({setLoginUser}) => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post(`https://mern-todos-task.herokuapp.com/login`, user)
        .then(res => {
         
            alert(res.data.message)
            setLoginUser(res.data.user);
            

            navigate('/read');
        })
    }

    return (
        
           <div className="App">
            <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/register")}>Register</div>
        </div>
        </div>
       
          
    )
}

export default Login