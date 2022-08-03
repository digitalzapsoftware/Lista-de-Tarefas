import { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";
import { ITask } from "./Interfaces";

import './styles/styles.css'



function App() {

	const [task, setTask] = useState<string>('')
	const [todoList, setTodoList] = useState<ITask[]>([])

	function addTask() {

		if(task === '') {
			alert('Insira uma nova TASK!')
		} else {
			const idRandom = (num:number) => Math.random() * num

		const newTask = {id: idRandom(9999999999999), nameTask: task}

		setTodoList([...todoList, newTask])
	}

	function deleteTask(DeleteTaskById: number): void {
		setTodoList(todoList.filter((taskName) => taskName.id !== DeleteTaskById))
	}


	return (
		<div className="App">

			<header>

				<h2>Lista de Tarefas</h2>

				<input
					type="text" autoComplete="off" 
					placeholder="Escrever task..." 
					value={task}
					onChange={(event) => setTask(event.target.value)}
					name="task"
					className="input"
				/>

				<button type="submit" className="btn-header" onClick={addTask}>Adicionar Lista</button>
			</header>
			
			<div className="line"></div>

			


			{todoList.map((task, key) => (

                 <TodoTask key={key} task={task} deleteTask={deleteTask} />


			))}
			
		</div>
	);
}

export default App;
