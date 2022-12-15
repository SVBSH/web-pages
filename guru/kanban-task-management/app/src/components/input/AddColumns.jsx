import './AddColumn.css';

import ImgCross from '../../assets/images/shared/icon-cross.svg';
import { useState } from 'react';


const AddColumn = ({ defaultValue = '' }) => {
  const [userInput, setUserInput] = useState(defaultValue);


  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  return (
    <div
      className="grid grid-col add-column__form"
    >
      <input
        type="text"
        placeholder='Column name'
        className='add-column__input'
        value={userInput}
        onChange={handleUserInput}
      />
      <img
        className='add-column__img btn-column-remove'
        src={ImgCross} alt="Button remove board column"
      />
    </div>
  )
}


export default AddColumn