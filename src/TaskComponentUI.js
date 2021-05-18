import React from 'react';
const TaskComponentUI = ( props) => {
    return(
        <div className='row' style={{marginTop:'10px',marginBottom:'10px'}}>
            <div className ='col-sm-6' style={{textAlign:'center',color:'blue'}}>{props.section.toUpperCase()}</div>
            <div className = 'col-sm-6' style={{textAlign:'center'}}>
            <a onClick = {props.reduceCount} name ={props.section}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 20 20" style={{color:'darkblue'}}>
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg></a>
            <span style ={{marginRight:'10px',marginLeft : '10px'}}>{props.state[props.section]}</span>
            <a onClick = {props.handlePlus} name ={props.section}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 20 20" style={{color:'darkred'}}>
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg></a>
            </div>
         </div>
    )
} 
export default TaskComponentUI;