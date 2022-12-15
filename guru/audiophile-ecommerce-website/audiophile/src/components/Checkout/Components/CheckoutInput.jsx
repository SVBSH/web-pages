import { useEffect } from "react";

const CheckoutInput = ({ setPaymentInfo, setPaymentSection, inputValue, inputTitle, inputPlaceholder }) => {

  const handleInput = (e) => {
    setPaymentInfo(
      )
  }

  return (
    <div className="flex flex-col" style={{ gap: '.3em' }}>
      <h2 className="text-xs text-black-4 font-bold">{inputTitle}</h2>
      <input 
        type="text" 
        className="form-input" 
        placeholder={inputPlaceholder}
        onChange={handleInput}
      />
    </div>
  )
}


export default CheckoutInput;