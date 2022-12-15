
import ImgBoard from '../../../assets/images/shared/icon-board.svg';


const BoardItem = ({ title }) => {

  return (
    <li
      className="board__item | flex flex-row  align-items-center"
      style={{ gap: '0' }}
    >
      <img
        src={ImgBoard}
        alt="la"
        sizes='30px 30px'
        className='board__img'
      />
      <button className="btn board__btn">{title}</button>
    </li>
  )
}

export default BoardItem;