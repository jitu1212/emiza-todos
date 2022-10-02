import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';


function TaskDetails() {
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
            date:localStorage.getItem('date').slice(0,10),
            status:localStorage.getItem('status')
        });
        setId(localStorage.getItem('id'))
   
    },[])
    


    return (
        <div className='App'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
                
                <Form.Control type="text"  value={task.heading} />

            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLastName">
               
                <Form.Control type="text"   value={task.description} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">

            <Form.Control type="text"  value={task.date} />
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Control type="text"  value={task.status} />
               
               
            </Form.Group>
           <Link to={'/read'}><Button variant="primary" >
               Read
            </Button> </Link> 
           

          



        </Form>
        </div>
    );
}

export default TaskDetails;