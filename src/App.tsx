import { useState } from "react";
import TodoTask from "./components/TodoTask/TodoTask";

import './styles/styles.css'

function App() {

	const [task, setTask] = useState<string>('')
	const [todoList, setTodoList] = useState([])


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

				<button type="submit" className="btn-header">Adicionar Lista</button>
			</header>
			
			<div className="line"></div>

			<TodoTask />
			
		</div>
	);
}

export default App;
