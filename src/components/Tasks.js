import { useState } from 'react'

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            Text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true,

        },
        {
            id: 2,
            Text: 'Meeting at School',
            day: 'Feb 6th at 1:30pm',
            reminder: true,

        },
        {
            id: 3,
            Text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,

        },



    ])
}


const tasks = () => {
    return (
        <>
            {tasks.map((tasks) => (
                <h3 key={tasks.id}>{tasks.Text}</h3>
            ))}
        </>
    )
}

export default tasks

