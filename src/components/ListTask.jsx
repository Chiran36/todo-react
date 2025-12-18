import Task from "./Task"

function ListTask({ tasks, setTasks, setCurrentEditingTask }) {
  return (
    <>
      <ul>
        {tasks.map((task) => <Task task={task} setTasks={setTasks} setCurrentEditingTask={setCurrentEditingTask} key={task.id} />)}
      </ul>
    </>
  )
}
export default ListTask;