import React, {useState} from 'react'
export default function Task(props){

    const [state, setState] = useState({
        edit: false,
        editInput: "",
        taskname: props.task
    });

    function handleDelete(){
        props.deleteitem(props.id);
    }

    function handleEdit(){
        setState({edit: true, editInput: state.editInput, taskname: state.taskname});
    }

    function confirmEdit(e){
        let newValue = state.editInput;
        setState({edit: false, editInput: "", taskname: newValue});
        
    }

    function changeEditInput(e){
        setState({edit: state.edit, editInput: e.target.value, taskname: state.taskname})
    }

    let display;
    if(state.edit == true){
        display = <div>
            <form onSubmit = {confirmEdit}>
                <input value= {state.editInput} onChange={changeEditInput}></input>
                <button type="submit">Confirm Edit</button>
            </form>
        </div>
    }
    else{
        display = <h1>{state.taskname}</h1>
    }

    return(
        <div>
            {display}
            <button onClick = {handleDelete}>Task finished</button>
            <button onClick = {handleEdit}>Edit Task</button>
        </div>
    );
}