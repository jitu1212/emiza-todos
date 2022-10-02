import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DropdownFun from './Dropdown';






function Read({user}) {
    // const navigate = useNavigate()

    const [APIData, setAPIData] = useState([]);
    let  [filterTask,setFilterTask]=useState('All');
    const [currentdata,setCurrentdata]=useState([]);
    


    useEffect(() => {
        axios.get(`https://mern-todos-task.herokuapp.com/api/task/`)
            .then((response) => {

                setAPIData(response.data);
                
                  
            })
            
    }, [])

    useEffect(()=>{
if(APIData.length){
    let temp=APIData.filter((e)=>{
        return e.userId===user;
    })
    setCurrentdata(temp)

}
            
    },[APIData])
   

    const onDelete = async (id) => {

        try {
            const res = axios.delete(`http://localhost:9002/api/task/${id}`);
            const newTask = APIData.filter(item => item._id !== id);
            setAPIData(newTask)

        } catch (error) {
            console.log(error)

        }
    }


    const setData = (data) => {

        let { _id, heading, description, date, status } = data;
        localStorage.setItem('id', _id);
        localStorage.setItem('heading', heading);
        localStorage.setItem('description', description);
        localStorage.setItem('date', date);
        localStorage.setItem('status', status);
    }

    let filterTodoTask=currentdata;

     if(filterTask!=='All'){
       filterTodoTask=currentdata.filter((todo)=>{
       
            return filterTask===todo.status;
        })     
    }                  
function onFilterDataSelect(filterData){
    setFilterTask(filterData);

}

    return (

        <>
         <DropdownFun FilterDataSelect={onFilterDataSelect} />

            <div className='items'>


                {/* {
                APIData.filter(todo=>todo.status==='completed').map(data=>{
                    return(
                                   <Row >
                                    <Col md={3} ><br />
                                    <Card style={{ width: '18rem', }}  >
                                    <Card.Body  >
                                   

                                        <Card.Title className='text-center'>{data.heading}</Card.Title>
                                        <Card.Text style={{ backgroundColor: 'green' }}>{data.status}


                                        </Card.Text>

                                       <Link to={'/update'}><Button className='btn btn-md btn-primary' onClick={()=>setData(data)}>Update</Button></Link> &nbsp;
                                         <Button className='btn btn-md btn-primary' onClick={()=>onDelete(data._id)} >Delete</Button>&nbsp;
                                        <Link> <Button className='btn btn-md btn-primary' onClick={()=>setData(data)} >View</Button></Link>
                                       
                                    </Card.Body>
                                    
                                     </Card>
                                     </Col>
                                        </Row>
                    )})} */}









                {
                    filterTodoTask.map((data, index) => {
                        return (
                            <Row key={index}>
                                <Col md={3} ><br />
                                    <Card style={{ width: '18rem', }}  >
                                        <Card.Body  >


                                            <Card.Title className='text-center'>{data.heading}</Card.Title>
                                            <Card.Text style={{ backgroundColor: 'green' }}>{data.status}


                                            </Card.Text>

                                            <Link to={'/update'}><Button className='btn btn-md btn-primary' onClick={() => setData(data)}>Update</Button></Link> &nbsp;
                                            <Button className='btn btn-md btn-primary' onClick={() => onDelete(data._id)}>Delete</Button>&nbsp;
                                            <Link to={'/view'}> <Button className='btn btn-md btn-primary' onClick={() => setData(data)}>View</Button></Link>

                                        </Card.Body>

                                    </Card>
                                </Col>
                            </Row>
                        )
                    }

                    )
                }
            </div>
        </>





    )



            }



export default Read;