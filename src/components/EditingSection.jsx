import Button from "./Button";


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
  function handleCancel(event){
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


export default EditingSection;