import './ModalTaskNew.css';


const ModalTaskNew = ({ children }) => {

  return (
    <>
      <dialog open className="modal-task-new modal">
        <h2 className="font-bold text-lg capitalize">Add New Task</h2>

        <form
          action=""
          className="add-new-task-container | flex flex-col"
        >
          <div className="flex flex-col" style={{ '--gap': '.4em' }}>
            <label htmlFor="" className='font-bold text-xs'>Title</label>
            <input type="text" placeholder="e.g. Take coffee break" className='text-sm' />
          </div>

          <div className="flex flex-col" style={{ '--gap': '.4em' }}>
            <label htmlFor="" className='font-bold text-xs'>Description</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="4"
              placeholder="e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little."
              className='text-sm'
            >
            </textarea>
          </div>

          {/* TODO: subtasks */}

          {/* TODO: Status */}

        </form>

      </dialog>
      {children}
    </>
  )
}


export default ModalTaskNew;