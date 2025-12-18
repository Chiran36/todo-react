import "./App.css"
import { useState } from "react"

import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import DisplayTask from "./components/DisplayTask";
import EditingSection from "./components/EditingSection";




// const tasks = [
//   {
//     id: 1,
//     taskName: "running",
//     priority: "low",
//     checked: false
//   },
//   {
//     id: 2,
//     taskName: "bathing",
//     priority: "low",
//     checked: false
//   },
//   {
//     id: 3,
//     taskName: "reading",
//     priority: "high",
//     checked: false
//   },
//   {
//     id: 4,
//     taskName: "fighting",
//     priority: "high",
//     checked: false
//   }
// ]

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentEditingTask, setCurrentEditingTask] = useState(null);

  return (
    <>
      <main className="flex justify-end">
        <div className="container mx-auto mt-10 bg-white p-5 rounded-lg shadow-lg">
          <Header />
          <TodoInput setTasks={setTasks} />
          <DisplayTask tasks={tasks} setTasks={setTasks} setCurrentEditingTask={setCurrentEditingTask} />

        </div>
       {currentEditingTask && <EditingSection setTasks={setTasks} currentEditingTask={currentEditingTask} setCurrentEditingTask={setCurrentEditingTask} />} 
      </main>
    </>
  )
}

export default App












