export default function Task(props){

    function handleDelete(){
        props.deleteitem(props.id);
    }

    return(
        <div>
            <h1>{props.task}</h1>
            <button onClick = {handleDelete}>Task finished</button>
        </div>
    );
}