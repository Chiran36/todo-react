import Button from "./Button";

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
export default Task;