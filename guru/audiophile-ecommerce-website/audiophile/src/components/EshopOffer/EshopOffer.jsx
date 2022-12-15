import './EshopOffer.css';
import { useNavigate } from 'react-router-dom';


export default function EshopOffer({ image, title, linkUrl }) {
  const navigateTo = useNavigate();

  return (
    <div className="eshop__offer rounded-4">

      <img draggable="false" className="eshop__img" src={image} alt="eshop" />

      <div className="eshop__info flex flex-col items-center" style={{ '--gap': '.0em' }}>
        <h3
          className="
          eshop__title 
          text-lg 
          text-black-4 
          uppercase"
        >
          {title}
        </h3>
        <button
          onClick={() => navigateTo(linkUrl)}
          to={linkUrl}
          data-type="3"
          className="
            text-2xs 
            uppercase 
            btn"
        >
          Shop
        </button>
      </div>

    </div>
  )
}