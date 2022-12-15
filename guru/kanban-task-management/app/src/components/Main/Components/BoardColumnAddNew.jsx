import './BoardColumnAddNew.css'

// TODO: pass 
const BoardColumnAddNew = ({ columnCount }) => {
  // TODO: addColumn function
  return (
    <>
      {
        columnCount > 0 ?
          <article className='board-new-column | capitalize flex flex-col text-center content-center'>
            <p className='text-2xl text-gray-3 font-bold'>+ New Column</p>
          </article>
          :
          <div className="board-add-column | grid content-center justify-items-center bg-gray-1">
            <p className='text-gray-3 font-bold text-lg'>This board is empty. Create a new column to get started.</p>
            <button className='btn' data-type="primary">+ Add New Column</button>
          </div>
      }
    </>
  )
}

export default BoardColumnAddNew;