import React,{useState} from 'react'
import axios from "axios"
import {useNavigate} from 'react-router-dom';
import './Register.css'

function Register() {
    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        role: "",
        registerdate:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const register = () => {
        const { name, email, password, role,registerdate } = user
        if( name && email && password && role && registerdate ){
            axios.post(`https://mern-todos-task.herokuapp.com/register`, user)
            .then( res => {
                alert(res.data.message)
                navigate("/")
            })
        } else {
            alert("invlid input")
        }
        
    }
  return (
    <div className="App">
    <div className="register">
           
            <h1>Register</h1>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="text" name="role" value={user.role} placeholder="Enter Your Role" onChange={ handleChange }></input>
            <input type="date" name="registerdate" value={user.registrdate} onChange={handleChange} />
            <div className="button" onClick={register} >Register</div>
            <div>or</div>
            <div className="button" onClick={() => navigate("/")}>Login</div>
        </div>
        </div>
  )
}

export default Register
