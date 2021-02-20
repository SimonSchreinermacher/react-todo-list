import Task from './task.js'

export default function List(props){
    if(props.items.length == 0){
        return(
            <p>No tasks set yet. Start by adding a task above!</p>
        );
    }

    return(
        <div>
            {props.items.map(item => {
                return(
                    <Task key = {item.id} id = {item.id} task={item.name} deleteitem = {props.deleteitem}></Task>
                );
            })}
        </div>
    );
}