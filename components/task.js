export default function Task(props){
    return(
        <div>
            <h1>{props.task}</h1>
            <button>Task finished</button>
        </div>
    );
}