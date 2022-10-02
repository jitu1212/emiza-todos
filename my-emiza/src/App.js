
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import Create from './component/Create';
import 'bootstrap/dist/css/bootstrap.min.css';
import Read from './component/Read';
import Update from './component/Update';
import TaskDetails from './component/TaskDetails';
import NavabarItem from './component/NavabarItem';
import { useState } from 'react';

function App() {
  const[user, setLoginUser]= useState({})
  
 
  return (
    <div >
      <Router>
      <NavabarItem  />
        <Routes>
       
       
          <Route path='/' element={<Login setLoginUser={setLoginUser}/>}/>
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={
             user && user._id ? <Create user={user._id} /> :<Login setLoginUser={setLoginUser}/>
          }/>
          <Route path="/read" element= {
            user && user._id ? <Read user={user._id} /> :<Login setLoginUser={setLoginUser}/>
          }/>
          <Route path="/update" element={<Update/>}/>
          <Route path='/view' element={<TaskDetails/>}/>
         

        </Routes>

      </Router>
    </div>
  );
}

export default App;
