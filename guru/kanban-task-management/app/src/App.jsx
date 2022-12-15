import './App.css';
import './utils.css';
import Header from './components/header/Header';
import MainSidebar from './components/MainSidebar/MainSidebar';
import ModalBoardAdd from './components/modals/modalBoardAdd/modalBoardAdd';

import Main from './components/Main/Main';
import { useRef } from 'react';

import BoardContextProvider from './context/boardContext';

import TaskDialog from './components/Main/Components/TaskDialog';
import ModalTaskNew from './components/modals/modalTaskAdd/ModalTaskNew';


function App() {
  const sidebarRef = useRef(null);
  const refModalBoardAdd = useRef(null);

  function handleSidebar() {
    let prevAnim = '';
    let newAnim = '';

    if (sidebarRef.current.classList.contains('fwd')) {
      prevAnim = 'fwd';
      newAnim = 'bwd';
    } else if (sidebarRef.current.classList.contains('bwd')) {
      prevAnim = 'bwd';
      newAnim = 'fwd';
    } else {
      sidebarRef.current.classList.add('bwd');
      return
    }
    sidebarRef.current.classList.remove(prevAnim);
    sidebarRef.current.classList.add(newAnim);

  }

  // TODO: fetch allBoardNames[]

  return (
    <ModalTaskNew>
      <BoardContextProvider>
        <div className="App font-medium text-sm-1" data-sidebar="false">
          {/* Dialog: Add a new board */}
          {/* <ModalBoardAdd ref={refModalBoardAdd}> */}
          <Header />
          <MainSidebar refModalBoardAdd={refModalBoardAdd} sidebarRef={sidebarRef} handleSidebar={handleSidebar} />
          <Main sidebarRef={sidebarRef} handleSidebar={handleSidebar} />
          {/* </ModalBoardAdd> */}
        </div>
      </BoardContextProvider >
    </ModalTaskNew>
  );
}

export default App;
