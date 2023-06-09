import { useEffect } from "react";
import { useTasks } from "../context/TaskContext"
import TaskCard from "./TaskCard"


function TaskList({done = false}) {

    const { tasks, getTasks, loading } = useTasks();

    useEffect(() => {
        getTasks(done)
    }, [done])

    function renderTasks() {
        if (loading) {
            return <p>Cargando...</p>
        } else if (tasks.length === 0) {
            <p>No existen Tareas por favor cree una</p>
        }else {
            return (<div>
                {tasks.map(task => (
                    <TaskCard task={task} key={task.id} />
                ))}
            </div>
            )
        }
    }

    return <div>
        {renderTasks()}
    </div>

}

export default TaskList
