import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function Update() {
    const navigate = useNavigate()
    const [ task, setUser] = useState({
        heading: "",
        description:"",
        date:"",
        status: "pending"
        
    })
    const [id,setId]=useState(null);

    useEffect(()=>{
        setUser({
            heading:localStorage.getItem('heading'),
            description:localStorage.getItem('description'),
            date:localStorage.getItem('date'),
            status:localStorage.getItem('status')
        });
        setId(localStorage.getItem('id'))
   
    },[])
    
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...task,
            [name]: value
        })

        
    }
    const update = () => {
        
        const { heading, description, date, status } = task
        
        if( heading && description && date && status ){
           
            axios.put(`https://mern-todos-task.herokuapp.com/api/task/${id}`, task)
            .then( res => {  
              if(res.status === 200){
                alert("Task Update successfully")
                setUser({ heading: "",
                description:"",
                date:"",
                status: ""});
                navigate("/read")
              }                 
            })
        } else {
            alert("invlid input")
        }
        
        
    }

    return (
        <>
        <div className='App'>
              
        <Form >
            <Form.Group className="mb-3" controlId="formBasicFirstName">
                
                <Form.Control type="text" placeholder="Enter your" name='heading' value={task.heading} onChange={handleChange } required />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
               
                <Form.Control type="text" placeholder="Enter Descripition" name='description' value={task.description} onChange={ handleChange } required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">

                
                <Form.Control type="date" name='date' value={task.date}  onChange={ handleChange } required />
            </Form.Group>
            <Form.Group className="mb-3">
               
                <Form.Select  name='status'  value={task.status}  onChange={ handleChange } required>
                    <option >pending</option>
                    <option >completed</option>
                    <option >onHold</option>
                </Form.Select>
            </Form.Group>
            <Button variant="primary"  onClick={update} >
               Update
            </Button> 

        </Form>
        </div>
        </>
    );
}

export default Update;