export default function Control(props){
    return(
        <div>
            <form onSubmit={props.addtolist}>
                <input value = {props.itemname} onChange={props.updateinput} placeholder="Task"></input>
                <button type="submit">Add new Task</button>
            </form>
        </div>
    );
}