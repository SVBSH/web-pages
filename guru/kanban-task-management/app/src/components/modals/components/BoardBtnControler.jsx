

const BoardBtnControler = ({ boardColumns, setBoardColumns, formBoardAdd, modalRef }) => {

  function handleColumn(e, { type }) {
    if (type === 'columnAdd') {
      return setBoardColumns([...boardColumns, { id: Math.random(), name: '' }])
    }
    else if (type === 'columnRemove') {
      const targetIndex = Array.from(formBoardAdd.current.children).indexOf(e.target.parentNode);

      setBoardColumns(boardColumns.filter(
        (_, index) =>
          (index !== targetIndex) ? true : false
      ))
    }

    else {
      console.error(`handleAddColumn: Error invalid action type <action.type>`)
    }
    return;
  }

  return (
    <div className="modal-board-add__control flex flex-col">

      <button
        data-type='secondary'
        className="
          btn 
          modal-board-add__btn 
          btn-column-add
        "
        onClick={(e) => handleColumn(e, { type: 'columnAdd' })}
      >
        + Add New Column
      </button>
      <button
        data-type='primary'
        className="btn modal-board-add__btn btn-create-new-board"
        onClick={e =>
          console.log(modalRef.current.close())
        }
      >
        Create New Board
      </button>
    </div>
  )
}

export default BoardBtnControler;