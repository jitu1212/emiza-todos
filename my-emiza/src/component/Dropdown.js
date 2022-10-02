import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


export default function DropdownFun(props) {

    function onFilterData(e){
       
        props.FilterDataSelect(e.target.value);


    }


  return (
    <div>
       <div className='item'>
     <select name="isAvailable" onChange={onFilterData}>
         <option value="All">All</option>
         <option value="completed">completed</option>
         <option value="onHold">onHold</option>
         <option value="pending">pending</option>
     </select>
</div> 
    </div>
  )
}
