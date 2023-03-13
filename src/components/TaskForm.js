import { useState } from "react"
import { useTasks } from "../context/TaskContext"

function TaskForm() {
    const [taskName, setTaskName] = useState("")
    const { createTask, adding } = useTasks();

    const handleSubmit = async (e) => {
        e.preventDefault()
        createTask(taskName)
        setTaskName("");
    }

    return (
        <form onSubmit={handleSubmit} className="card card-body">
            <input
                type="text"
                name="tarea"
                placeholder="Ingresa una nueva tarea"
                onChange={(e) => setTaskName(e.target.value)}
                value={taskName}
                className="form-control mb-2"
            />
            <div className="ms-auto ">
                <button disabled={adding} className="btn btn-primary btn-sm">
                    {adding ? "Añadiendo.." : "Añadir"}
                </button>
            </div>
        </form>
    )
}

export default TaskForm
