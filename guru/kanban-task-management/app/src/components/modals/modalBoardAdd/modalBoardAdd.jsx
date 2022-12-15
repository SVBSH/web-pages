import { useRef, useState } from 'react';

import './modalBoardAdd.css';
import Form from '../../MainSidebar/components/Form';
import { useBoardContext } from '../../../context/boardContext';


const ModalBoardAdd = ({ children }) => {
  const [boardColumns, setBoardColumns] = useState([
    { name: '', index: 0 }
  ]);
  const boardContext = useBoardContext();
  console.log(boardContext.appData["boards"])

  const modalRef = useRef(null);

  const [boardName, setBoardName] = useState('');
  function handleFormChange(event) {
    setBoardName(event.target.value);
  }


  const submit = (e) => {
    if (boardName.length <= 0) {
      return;
    }

    boardContext.setAppData(
      {
        "boards": [
          ...boardContext.appData.boards,
          {
            name: boardName,
            columns: ''
          }
        ]
      }
    )

    modalRef.current.close();
  }


  return (
    <>
      {children}
      <dialog
        open
        ref={modalRef}
        className="
        modal-board-add
      "
      >

        <h1 className="
        text-black-4
        capitalize
        text-lg
        font-bold
      "
        >
          Add New Board
        </h1>

        <form
          onSubmit={event => event.preventDefault()}
          className="
          form text-gray-3 
          flex 
          flex-col
        "
          style={{ gap: '.3em' }}
        >
          <label
            htmlFor="board-name"
            className="font-bold text-xs"
          >
            Name
          </label>
          <input
            className='input__field'
            name='board-name'
            type="text"
            placeholder="e.g. Web Design"
            value={boardName}
            onChange={event => handleFormChange(event)}
          />
        </form>

        <div className="">
          <h2
            className="
            text-gray-3
            font-bold
            text-xs
          "
          >
            Columns
          </h2>
          <Form inputFields={boardColumns} setInputFields={setBoardColumns} />

        </div>

        <button
          data-type="primary"
          className="btn block btn-submit"
          onClick={submit}
        >
          Submit
        </button>

      </dialog >
    </>
  )
}


export default ModalBoardAdd;