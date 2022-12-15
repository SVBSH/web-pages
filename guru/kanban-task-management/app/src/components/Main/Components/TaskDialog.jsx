import './TaskDialog.css'
import TaskSelectGroup from './TaskGroup';


export const TaskDialog = ({ children }) => {

  return (
    <>
      {children}
      <dialog open className="modal flex flex-col">

        <div className="task__info | flex flex-col">
          <h2 className="task__heading | text-lg font-bold ">
            Research pricing points of various competitors and trial different business models
          </h2>
          <p className="task__description | text-sm text-gray-3 font-medium">
            We know what we're planning to build for version one. Now we need to finalise the first pricing model we'll use. Keep iterating the subtasks until we have a coherent proposition.
          </p>
        </div>

        {/* TODO: Actions - Edit Task / Delete Task */}
        {/* <div className="task-action-container"></div> */}

        <form className="subtask-container">
          <h1 className="subtask__title | text-gray-3 font-bold">
            Subtasks (2 of 3)
          </h1>
          {/* checklist of subtasks  */}

          <ul className="subtask__list | flex flex-col">
            <li className="subtask__item | bg-gray-1 flex flex-row text-gray-3 font-bold" style={{ '--gap': '.7em' }}>
              <input className='subtask__checkbox' type="checkbox" id="la" />
              <label className='subtask__label' htmlFor="la">Research competitor pricing and business models</label>
            </li>
          </ul>

        </form>

        {/* Task status in dropdown form */}
        <TaskSelectGroup />

      </dialog>
    </>
  )
}

export default TaskDialog;