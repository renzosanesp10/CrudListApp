import React, { useEffect, useState } from 'react'
import { supabase } from '../supabase/client'
import { useNavigate } from 'react-router-dom'
import TaskForm from '../components/TaskForm';
import { useTasks } from '../context/TaskContext'
import TaskList from '../components/TaskList'


function Home() {
    const [showTaskDone, setShowTaskDone] = useState(false)
    const navigate = useNavigate()
    const obj = useTasks()
    console.log(obj)

    useEffect(() => {
        if (!supabase.auth.user()) {
            navigate("/login")
        }
    }, [navigate]);

    return (
        <div className='row pt-4'>
            <div className='col-md-4 offset-md-4'>
                <TaskForm />
                <header className='d-flex justify-content-between my-3'>
                    <span className='h5'>
                        {showTaskDone ? "Tareas Hechas" : "Tareas por Hacer"}
                    </span>
                    <button className='btn btn-dark btn-sm' onClick={() => setShowTaskDone(!showTaskDone)}>
                        {showTaskDone ? "Mostrar tareas por hacer": "Mostrar tareas hechas"}
                    </button>
                </header>
                <TaskList done={showTaskDone} />
            </div>
        </div>
    )
}

export default Home
