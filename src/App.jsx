import "./App.css"
import { useState } from "react"


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


function EditingSection({ currentEditingTask, setCurrentEditingTask, setTasks }) {



  function handleEditName(event) {
    setCurrentEditingTask((task) => ({ ...task, taskName: event.target.value }));
  }
  function handleEditPriority(event) {
    setCurrentEditingTask((task) => ({ ...task, priority: event.target.value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    setTasks(tasks => tasks.map(task => task.id === currentEditingTask.id ? currentEditingTask : task))
    setCurrentEditingTask(null);
  }
  function handleCancel(){
    event.preventDefault();
    setCurrentEditingTask(null);
  }
  return (
    <>
      <div className="edit container mx-auto mt-10 bg-red-200 p-5 rounded-lg shadow-lg">
        <h2 className="font-bold text-3xl text-left p-2 ">Edit Task:</h2>

        <section className="displayEdit mx-auto mt-5 bg-green-300 text-left p-5 rounded-lg shadow-lg">
          <article>
            <p>TaskName: <span>{currentEditingTask?.taskName}</span> </p>
            <p>Priority: <span>{currentEditingTask?.priority}</span></p>
          </article>
        </section>
        <section className="editTask mx-auto mt-5 bg-green-300 text-left p-5 rounded-lg shadow-lg">

          <form action="" >

            <label htmlFor="taskName" className="block text-left m-2 font-medium p-2 bg-orange-600 rounded-lg">Edit <span className="text-1xl">TaskName:</span> <input type="text" id="taskName" className="bg-orange-500 outline-none p-2 rounded-lg text-[#ffffff] mx-2" value={currentEditingTask?.taskName || ""} onChange={handleEditName} /> </label>

            <label htmlFor="priority" className="block text-left m-2 font-medium bg-orange-600 rounded-lg p-2"><span className="text-1xl">Priority:</span>
              <select name="" id="priority" className="bg-orange-500 text-white outline-none p-2 rounded-lg mx-2 " value={currentEditingTask?.priority || "none"} onChange={handleEditPriority}>
                <option value="none">None</option>
                <option value="low">Low</option>
                <option value="high">High</option>
              </select>
            </label>
            <section className="editButton flex justify-center">
              <Button classes={" block m-auto bg-green-600 py-4 px-8 rounded-lg text-white font-sans font-medium text-1xl"} onClick={handleSubmit}>Edit</Button>
              <Button classes={" block m-auto bg-green-600 py-4 px-8 rounded-lg text-white font-sans font-medium text-1xl"} onClick={handleCancel}>Cancel</Button>
            </section>


          </form>

        </section>

      </div>
    </>
  )
}


function Button({ classes, onClick, children }) {
  return <button className={`${classes} m-2 font-medium`} onClick={onClick}>{children}</button>
}
function Header() {
  return (
    <>
      <h1 className="font-medium text-3xl mb-3">My Tasks</h1>
    </>
  )
}

function TodoInput({ setTasks }) {

  const [taskName, setTaskName] = useState("");

  function handleTaskName(event) {
    setTaskName(event.target.value)
  }
  function handleAddTask(event) {
    event.preventDefault();
    setTasks((tasks) => [...tasks, { id: Date.now(), taskName: taskName, priority: "none", checked: false }]);
    setTaskName("")
  }

  return (
    <>
      <section className="input">
        <form action="" onSubmit={handleAddTask}>


        <input value={taskName} onChange={handleTaskName} type="text" placeholder="Add a new task...." className="bg-[#f6f5f9] outline-none p-2 rounded-lg mr-2" />
        <Button classes={`bg-[#4279f6] p-2  rounded-lg text-white`}>Add</Button>
        </form>
      </section>
    </>
  )
}



function DisplayTask({ tasks, setTasks, setCurrentEditingTask }) {
  const [filter, setFilter] = useState("all"); // "all", "active", "completed"
  //  [`bg-[#4279f6] p-2  rounded-lg text-white`,`bg-[#f6f5f9] `]

  let filteredTasks = tasks;
  if (filter === "active") filteredTasks = tasks.filter(task => !task.checked);
  if (filter === "completed") filteredTasks = tasks.filter(task => task.checked);

  return (
    <>
      <section className="buttonDisplay">
        <Button classes={`p-2  rounded-lg  ${filter == "all" ? "bg-[#4279f6] text-white" : "bg-[#f6f5f9] text-[#7a7a7a]"}`} onClick={() => setFilter("all")}>All</Button>
        <Button classes={`p-2  rounded-lg ${filter == "active" ? "bg-[#4279f6] text-white" : "bg-[#f6f5f9] text-[#7a7a7a]"}`} onClick={() => setFilter("active")}>Active</Button>
        <Button classes={`p-2  rounded-lg ${filter == "completed" ? "bg-[#4279f6] text-white" : "bg-[#f6f5f9] text-[#7a7a7a]"}`} onClick={() => setFilter("completed")}>Completed</Button>
      </section>
      <section className="listTask">
        <ListTask tasks={filteredTasks} setTasks={setTasks} setCurrentEditingTask={setCurrentEditingTask} />
      </section>
    </>
  );
}
function ListTask({ tasks, setTasks, setCurrentEditingTask }) {
  return (
    <>
      <ul>
        {tasks.map((task) => <Task task={task} setTasks={setTasks} setCurrentEditingTask={setCurrentEditingTask} key={task.id} />)}
      </ul>
    </>
  )
}

function Task({ task, setTasks, setCurrentEditingTask }) {

  function handleChecked() {

    setTasks(tasks => tasks.map(tasked => tasked.id === task.id ? { ...tasked, checked: !task.checked } : tasked));

  }

  function handleDelete() {
    setCurrentEditingTask(null);
    setTasks(tasks => tasks.filter(tasked => tasked.id !== task.id));
  }

  function handleEdit() {
    setCurrentEditingTask(() => ({ ...task }))

  }

  return (
    <>
      <li className="border border-gray-200 my-2 rounded-lg shadow-lg p-2">
        <section className="display flex justify-between items-center">
          <div><input type="checkbox" className="w-5 h-4 rounded-full" checked={task.checked} onChange={handleChecked} /><span className="font-[500] text-2xl mx-2">{task.taskName}</span></div><div><Button onClick={handleEdit}>✏️</Button><Button onClick={handleDelete}>🗑️</Button></div>
        </section>
        <section className={`priority ${task.priority === "high" ? "bg-[#eb0d0d] text-[#ffff]" : task.priority === "low"?"bg-[#06e445] text-[#fff]": "bg-[#e0e0e0] text-[#9e9e9e]"}`}>
          Priority: <span>{task.priority}</span>
        </section>

      </li>
    </>
  )
}