import { useState } from 'react';

import './Main.css';
import BoardColumn from './Components/BoardColumn';
import BoardColumnAddNew from './Components/BoardColumnAddNew';
import TaskDialog from './Components/TaskDialog';


const Main = ({ sidebarRef, handleSidebar }) => {
  // TODO: fetch data for board column

  // <BoardColumn title="" tasks="" />,
  const boardColumns = [
    {
      title: "TODO",
      tasks: []
    },
    {
      title: "Doing",
      tasks: []
    },
    {
      title: "Done",
      tasks: []
    }
  ]

  return (
    <>
      {
        <main className='main | bg-gray-1'>
          {/* <TaskDialog> */}
          {
            boardColumns.map(boardColumn =>
              <BoardColumn title={boardColumn.title} tasks={boardColumn.tasks} />
            )
          }

          <BoardColumnAddNew columnCount={boardColumns.length} />
          {/* <button
          onClick={handleSidebar}
        >
          show nav</button> */}
          {/* </TaskDialog> */}
        </main>
      }
    </>
  )
}

export default Main;