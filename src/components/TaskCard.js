import { useTasks } from "../context/TaskContext"


function TaskCard({ task }) {

    const {deleteTask, updateTask} = useTasks()

    const handleDelete = () => {
        deleteTask(task.id) 
    }

    const handleToggleDone = () => {
        updateTask(task.id, {done: !task.done})
    }

    return (
        <div className="card card-body mb-2">
            <h1 className="h5">
                {task.id}. {task.name}
            </h1>
            <p>{task.done ? "Finzalido✅" : "No finalizado❌"}</p>
            <div className="ms-auto">
                <button className="btn btn-danger btn-sm me-1" onClick={() => handleDelete()}>Eliminar</button>
                <button className="btn btn-secondary btn-sm" onClick={() => handleToggleDone()}>Done</button>
            </div>
        </div>
    )
}

export default TaskCard
