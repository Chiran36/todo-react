import "./App.css"



const tasks = [
  {
    id: 1,
    taskName: "running",
    priority: "low",
    checked: false
  },
  {
    id: 2,
    taskName: "bathing",
    priority: "low",
    checked: false
  },
  {
    id: 3,
    taskName: "reading",
    priority: "high",
    checked: false
  },
  {
    id: 4,
    taskName: "fighting",
    priority: "high",
    checked: false
  }
]

function App() {
  return (
    <>
      <div className="container mx-auto mt-10 bg-white p-5 rounded-lg shadow-lg">
        <Header />
        <TodoInput />
        <DisplayTask />
        <ListTask />
      </div>
    </>
  )
}

export default App

function Button({ classes, children }) {
  return <button className={`${classes} m-2 font-medium`}>{children}</button>
}
function Header() {
  return (
    <>
      <h1 className="font-medium text-3xl mb-3">My Tasks</h1>
    </>
  )
}

function TodoInput() {
  return (
    <>
      <section className="input">

        <input type="text" placeholder="Add a new task...." className="bg-[#f6f5f9] outline-none p-2 rounded-lg mr-2" />
        <Button classes={`bg-[#4279f6] p-2  rounded-lg text-white`} >Add</Button>
      </section>
    </>
  )
}

function DisplayTask() {
  return (
    <>
      <section className="buttonDisplay">
        <Button classes={`bg-[#4279f6] p-2  rounded-lg text-white`} >All</Button>
        <Button classes={`bg-[#f6f5f9] p-2  rounded-lg text-[#7a7a7a]`}>Active</Button>
        <Button classes={`bg-[#f6f5f9] p-2  rounded-lg text-[#7a7a7a]`}>Completed</Button>
      </section>
      <section className="listTask">

      </section>
    </>
  )
}

function ListTask() {
  return (
    <>
      <ul>
        {tasks.map((task) => <Task task={task} />)}
      </ul>
    </>
  )
}

function Task({ task }) {
  return (
    <>
      <li className="border border-gray-200 my-2 rounded-lg shadow-lg p-2">
        <section className="display flex justify-between items-center">
          <div><input type="checkbox" className="w-5 h-4 rounded-full" /><span className="font-[500] text-2xl mx-2">{task.taskName}</span></div><div><Button>✏️</Button><Button>🗑️</Button></div>
        </section>
        <section  className={`priority ${task.priority  === "high"?"bg-[#eb0d0d]":"bg-[#2eeb0d]"}`}>
          Priority: <span>{task.priority}</span>
        </section>

      </li>
    </>
  )
}