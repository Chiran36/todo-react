import { useState } from "react";

import Button from "./Button";



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

export default TodoInput;