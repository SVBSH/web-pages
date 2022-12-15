

const ModalBoardDelete = ({ boardId }) => {

  return (
    <>
      <dialog className="modal">

        <div className="flex flex-col">
          <h2 className="">Delete this board?</h2>
        </div>
        <div className="flex flex-col">
          <p>Are you sure you want to delete the ‘Platform Launch’ board? This action will remove all columns and tasks and cannot be reversed.</p>
        </div>

        
      </dialog>
    </>
  )
}

export default ModalBoardDelete;