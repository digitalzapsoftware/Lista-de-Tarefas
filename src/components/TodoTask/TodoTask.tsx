import { ITask } from '../../Interfaces';
import './styles.css'

interface Taskprops {
    task: ITask,
    deleteTask(DeleteTaskById: number): void
}

function TodoTask({ task, deleteTask }: Taskprops) {
	
	return (
		<div className="card">
			<div>
                <p>{task.nameTask}</p>
            </div>

            <div className="line2" >
            <span className="btn-card" onClick={() => deleteTask(task.id)}>X</span>
            </div>
		</div>
	);
}

export default TodoTask;
