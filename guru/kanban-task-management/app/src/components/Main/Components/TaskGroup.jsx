import './TaskSelectGroup.css';


const TaskSelectGroup = () => {

  return (
    <form action="" className="task__status | flex flex-col">
      <label for="task__select-status" className="task__current-status | text-gray-3 font-bold">Current Status</label>
      <select name="" id="task__select-status" className='bg-white-4'>
        <option className='task__option' value="">Doing</option>
        <option className='task__option' value="">Todo</option>
        <option className='task__option' value="">Done</option>
      </select>
    </form>
  )
}

export default TaskSelectGroup;