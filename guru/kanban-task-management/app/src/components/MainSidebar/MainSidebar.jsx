import './MainSidebar.css';
import ImgThemeLight from '../../assets/images/shared/icon-light-theme.svg';
import ImgThemeDark from '../../assets/images/shared/icon-dark-theme.svg';
import ImgHideSidebar from '../../assets/images/shared/icon-hide-sidebar.svg';
import ImgBoard from '../../assets/images/shared/icon-board.svg';

import axios from 'axios';

import { useRef, useEffect } from 'react';

import BoardItem from './components/BoardButton';
import { useBoardContext } from '../../context/boardContext';


const MainSidebar = ({ refModalBoardAdd, sidebarRef, handleSidebar }) => {

  useEffect(() => {
    let allboards = null;

    async function apiGetBoards() {
      try {
        const result = await axios.get('/api/boards')
        return result.data;
      }
      catch (e) {
        console.error(`Unable to get boards: ${e}`);
      }

    }
    allboards = apiGetBoards();

    console.log('allboards');
    console.log(allboards);
  }, [])


  const boardContext = useBoardContext();
  const boards = useRef(null);

  function handleBoards(e) {
    // console.log(e.target, e.currentTarget)
    let targetBoardItem = e.target.closest('.board__item');
    const activeBoardItem = e.currentTarget.querySelector('.active');
    if (activeBoardItem !== null) {
      activeBoardItem.classList.remove('active');
      
    }
    if (targetBoardItem != null) {
      targetBoardItem.classList.add('active');
    }
  }

  return (
    <div
      className='main-sidebar-container'
      ref={sidebarRef}
    // data-active="true"
    >
      <aside
        className='
        main-sidebar
        font-bold
        text-gray-3
        bg-white-4
        
        grid
        grid-row
      '
        style={{ gap: '1.5rem' }}
      >

        <section className="board-container">
          <h2 className='board-container__title | uppercase text-xs'>All Boards (3)</h2>
          <ul
            ref={boards}
            className="board__list flex flex-col"
            onClick={handleBoards}
          >
            {
              boardContext.appData["boards"].map(board =>
                <BoardItem key={board.name} title={board.name} />
              )
            }
          </ul>

          {/* <button className="btn btn-new-board text-purple-4">+ Create New Board</button> */}
          {/* FIXME: zmenit na <button> */}
          <li className="board__item | flex flex-row align-items-center" style={{ gap: '0' }}>
            <img src={ImgBoard} alt="la" sizes='30px 30px' className='board__img' />
            <button
              onClick={e => refModalBoardAdd.current.showModal()}
              className="
                btn board__btn 
                text-purple-4
              ">
              + Create New Board
            </button>
          </li>
        </section>

        <div className="
          theme-control | flex flex-row justify-center bg-gray-2
        ">
          <img
            className="theme-control__img"
            src={ImgThemeLight}
            alt=""
          />
          <button
            className="theme-control__switch | bg-purple-4"
            onClick={e => {
              e.target.classList.toggle('switchOn');
              const themeElem = document.querySelector('html');
              if (themeElem.dataset.theme === 'dark') {
                themeElem.dataset.theme = 'light';
              } else {
                themeElem.dataset.theme = 'dark';
              }
            }}
          >
          </button>
          <img
            className="theme-control__img"
            src={ImgThemeDark}
            alt=""
          />
          <button className='btn theme-control__btn'></button>
        </div>

        <button
          className="
            btn
            hide-sidebar
            board__item 

            flex 
            flex-row
            align-items-center
          "
          onClick={handleSidebar}
        >
          <img className='hide-sidebar__img' sizes='40px 40px' src={ImgHideSidebar} alt="" />
          <p>Hide sidebar</p>
        </button>

      </aside>
    </div>
  )
}


export default MainSidebar;