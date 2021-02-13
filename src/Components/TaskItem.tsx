import React from 'react'
import { Task } from '../Types'
 
type Props = {
    task: Task
    // handleDone: (task: Task) => void
    // handleDelete: (task: Task) => void
}
 
const TaskItem: React.FC<Props> = ({task}) => {
    return (
      <li className={task.done ? 'done' : ''}>
            <label>
                <input
                    type="checkbox"
                    className="checkbox-input"
                    defaultChecked={task.done}
                />
                <span className="checkbox-label">{ task.title }</span>
            </label>
            <button className="btn is-delete" >削除</button>
        </li>
    )
}

export default TaskItem
