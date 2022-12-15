import { useNavigate } from "react-router-dom"
import './Buttons.css';


export const ButtonGoBack = ({styles}) => {
  const navigate = useNavigate();
  console.log(styles);
  console.log(JSON.stringify(styles));

  return(
    <button 
      className={"btn-go-back capitalize text-gray-4 " + styles  } 
      onClick={() => navigate(-1)}
      >
        Go Back
    </button>
  )
} 