import React,{Component} from 'react';
import TaskComponentUI from './TaskComponentUI';
class TaskComponet extends Component{
    constructor(props){
     super(props)
     this.state ={
        rooms:0,
        adults:0,
        children:0
     }
 }
 reduceCount = (event) =>{
    event.preventDefault();
    var keyName = [event.currentTarget.name][0]; 
    if(this.state[event.currentTarget.name] <= 0){
        return ;
    }
    this.setState({
        [event.currentTarget.name] : this.state[event.currentTarget.name] - 1
    },()=>{
        this.handleValidation(keyName,'minus');
    })
 }
 handlePlus = (e) =>{
    e.preventDefault();
    var name = [e.currentTarget.name][0];
    if([e.currentTarget.name] =='rooms' && this.state.rooms >= 5){
        return;
    }
    if([e.currentTarget.name] !='rooms' && (this.state.adults+this.state.children >0)&& this.state.rooms >0 &&(this.state.adults+this.state.children) >= (this.state.rooms * 4)){
        return;
    }
    this.setState({
        [e.currentTarget.name] : this.state[e.currentTarget.name] + 1 
    },()=>{
        this.handleValidation(name,'plus');
    })
 }
 handleValidation = (objname,operand) =>{
    console.log('eventtt',this.state);
    if(operand === 'plus'){
        if(objname =='rooms'){
            this.setState((prev) =>({
                adults: prev.adults + 1
            }))
        }else if(objname =='adults' && this.state.rooms < 5 && (this.state.adults+this.state.children) >= (this.state.rooms * 4)){
            this.setState((prev) =>({
                rooms: prev.rooms + 1
            }))
        }  
    }else if(operand === 'minus'){
        if(objname =='rooms'){
            this.setState((prev) =>({
                adults: prev.adults - 1
            }))
        }else if(objname =='adults' && this.state.rooms <= 5 && this.state.rooms > 0 && this.state.adults < 5){
            this.setState((prev) =>({
                rooms: prev.rooms - 1
            }))
        }
        
        if(this.state.rooms == 0 && this.state.adults == 0){
            this.setState({
                children: 0
            })
            
        }
    }
 }
 render(){
     return (
        <div>
            <p style={{color:'blue'}}>Choose number of <b>People</b></p>
            <div style={{border: `1px solid black`,marginLeft:'10%',marginRight:'10%',borderRadius:'10px'}}>
                {Object.keys(this.state).map((obj, index) =>(
                    <>
                    <TaskComponentUI section ={obj} state={this.state} handlePlus={this.handlePlus} reduceCount={this.reduceCount}/>
                    {index !=2 ? <hr/> :''}
                    </>
                ))}
            </div>
        </div>
     )
 }
}
export default TaskComponet;