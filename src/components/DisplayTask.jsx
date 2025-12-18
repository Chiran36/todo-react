import { useState } from "react";

import Button from "./Button";
import ListTask from "./ListTask"

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

export default DisplayTask;