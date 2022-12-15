import { useState, useRef } from 'react';
import { useBasketContext } from '../../context/BasketContext';
import { ButtonGoBack } from '../Buttons/Buttons';
import './Checkout.css';
import { Link } from 'react-router-dom';

const Checkout = (props) => {
  const [paymentInfo, setPaymentInfo] = useState(
    {
      userName: '',
      userEmail: '',
      userPhoneNumber: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      paymentMethod: ''
    }
  )

  function handleInput(e, paymentProperty) {
    setPaymentInfo({
      ...paymentInfo,
      [paymentProperty]: e.target.value
    })
    console.log(paymentInfo, e.target.value)
  }

  const basketContext = useBasketContext();
  const dialogRef = useRef(null);


  return (
    <main className="checkout color-outside-container" style={{ '--bg-color': 'hsl(0, 0%, 95%)' }}>
      <ButtonGoBack styles='justify-self-start pt-8' />

      <div className="checkout__info rounded-4 bg-white-4">
        <h1 className='checkout__title text-black-4 uppercase text text-3xl '>Checkout</h1>
        <section className="checkout__form-container" data-title="billingDetails">
          <h1 className="checkout__form-title checkout__heading uppercase text-2xs tracking-normal text-orange-4">Billing Details</h1>
          <form action="" className="checkout__form form" data-type='billingDetails'>

            <div className="flex flex-col" style={{ gap: '.85em' }}>
              <h2 className="text-xs text-black-4 font-bold">Name</h2>
              <input
                required="true"
                type="text"
                className="form-input"
                placeholder='Alexei Ward'
                onChange={(e) => handleInput(e, 'userName')}
                value={paymentInfo['userName']}
              />
            </div>

            <div className="flex flex-col" style={{ gap: '.85em' }}>
              <h2 className="text-xs text-black-4 font-bold">Email Address</h2>
              <input
                required="true"
                type="text"
                className="form-input"
                placeholder='alexei@mail.com'
                onChange={(e) => handleInput(e, 'userEmail')}
                value={paymentInfo['userEmail']}
              />
            </div>

            <div className="flex flex-col" style={{ gap: '.85em' }}>
              <h2 className="text-xs text-black-4 font-bold">Phone Number</h2>
              <input
                required="true"
                type="text"
                className="form-input"
                placeholder='+1 202-555-0136'
                onChange={(e) => handleInput(e, 'userPhoneNumber')}
                value={paymentInfo['userPhoneNumber']}
              />
            </div>

          </form>
        </section>
        <section className="checkout__form-container">
          <h1 className="checkout__form-title checkout__heading uppercase text-2xs tracking-normal text-orange-4">
            Shipping Info
          </h1>
          <form action="" className="checkout__form form flex flex-col" style={{ gap: '1rem' }} data-type="shippingInfo">
            <div className="flex flex-col" style={{ gap: '.85em' }}>
              <h2 className="text-xs text-black-4 font-bold">Your Address</h2>
              <input
                required="true"
                type="text"
                className="form-input"
                placeholder='1137 Williams Avenue'
                onChange={(e) => handleInput(e, 'address')}
                value={paymentInfo['address']}
              />
            </div>

            <div className="flex flex-col" style={{ gap: '.85em' }}>
              <h2 className="text-xs text-black-4 font-bold">ZIP Code </h2>
              <input
                required="true"
                type="text"
                className="form-input"
                placeholder='10001'
                onChange={(e) => handleInput(e, 'zipCode')}
                value={paymentInfo['zipCode']}
              />
            </div>

            <div className="flex flex-col" style={{ gap: '.85em' }}>
              <h2 className="text-xs text-black-4 font-bold">City</h2>
              <input
                required="true"
                type="text"
                className="form-input"
                placeholder="New York"
                onChange={(e) => handleInput(e, 'city')}
                value={paymentInfo['city']}
              />
            </div>

            <div className="flex flex-col" style={{ gap: '.85em' }}>
              <h2 className="text-xs text-black-4 font-bold">Country</h2>
              <input
                required="true"
                type="text"
                className="form-input"
                placeholder='United States'
                onChange={(e) => handleInput(e, 'country')}
                value={paymentInfo['country']}
              />
            </div>
          </form>
        </section>
        <section className="checkout__form-container">
          <h1 className="checkout__form-title checkout__heading uppercase text-2xs tracking-normal text-orange-4">
            Payment Details
          </h1>
          <form action="" className="checkout__form form" data-type="c">
            <h2 className='text-xs text-black-4 font-bold'>Payment Method</h2>

            <div className="flex flex-col checkout__form-radio-btn-container font-bold">
              <div className="checkout__form-radio-btn rounded-4" style={{ gap: '.85em' }}>
                <input
                  required="true" checked="checked" id="eMoney" type="radio" name="paymentType" />
                <label for="eMoney">e-Money</label>
              </div>
              <div className="checkout__form-radio-btn rounded-4" style={{ gap: '.85em' }}>
                <input
                  required="true" id="cashDelivery" className="justify-self-start bg-orange-4 text-orange-4" type="radio" name="paymentType" />
                <label for="cashDelivery" className='justify-self-start' >Cash on Delivery</label>
              </div>
            </div>
          </form>

        </section>
      </div>

      <article className="checkout__summary rounded-4 bg-white-4">
        <h2 className='text-lg text-black-4 uppercase font-bold'>Summary</h2>
        <ul className="checkout__summary-products flex flex-col">
          {
            basketContext.basketInfo.basket.map(
              product => (
                <li className='checkout__summary-product font-bold'>
                  <img draggable="false" src={product.descriptiveImg} alt={product} className="checkout__summary-img rounded-4" />
                  <h3 className='text-sm text-black-4 font-bold'>{product.name}</h3>
                  <p className='text-gray-4'>$ {product.price}</p>
                  <p className='text-gray-4'>x{product.quantity}</p>
                </li>
              )
            )
          }
        </ul>
        <ul className="checkout__summary-prices flex flex-col" style={{ gap: '.4em' }}>
          <li className="checkout__summary-price flex flex-row justify-space-between">
            <p className='uppercase text-gray-4'>Total</p>
            <p className='text-black-4 font-bold text-lg'>$ {basketContext.basketInfo.priceSummary}</p>
          </li>
          <li className="checkout__summary-price flex flex-row justify-space-between ">
            <p className="uppercase text-gray-4">Shipping</p>
            <p className='text-black-4 font-bold text-lg'>$ 50</p>
          </li>
          <li className="checkout__summary-price flex flex-row justify-space-between ">
            <p className="uppercase text-gray-4">VAT (INCLUDED)</p>
            <p className='text-black-4 font-bold text-lg'>$ 1,079</p>
          </li>
          <li className="checkout__summary-price flex flex-row justify-space-between ">
            <p className="uppercase text-gray-4">Grand Total</p>
            <p className='text-orange-4 font-bold text-lg'>$ {basketContext.basketInfo.priceSummary + 1.079 + 50}</p>
          </li>
        </ul>
        <button
          className="btn justify-self-stretch uppercase font-bold text-white-4 text-center"
          style={{ width: '100%' }}
          data-type="1"
          onClick={() => {
            // TODO:
            dialogRef.current.setAttribute('closing', "")
            console.log(dialogRef.current)
            dialogRef.current.showModal()
          }}
        >
          Continue & Pay
        </button>
      </article>

      <dialog 
        ref={dialogRef} 
        id='dialog' 
        className='rounded-4'
        onClick={(e) => {
          // e.preventDefault()
          // e.stopPropagation();
          console.log(e.target);
          console.log(e.target.getBoundingClientRect())
          dialogRef.current.closeModal();
        }}
      >
        <div className="dialog-container">
          <div className="circle bg-orange-4"></div>
          <div className="order-summary">
            <h1 className='order-summary__heading uppercase tracking-normal font-bold text-black-4 text-2xl'>
              <div className="block">Thank you</div>
              for your order</h1>
            <p className="order-summary__text text-sm text-gray-4 font-medium">You will receive an email confirmation shortly.</p>
          </div>
          <div className="first-backet-item-container rounded-4 font-bold" style={{'--gap': '0rem'}}>
            <div className="text-gray-4 bg-gray-3">
              <div className="dialog__checkout-item">
                <div className="dialog__checkout-img-container">
                  <img src="{basketContext.basketInfo.basket[0].descriptiveImg}" alt="" />
                </div>
                <p className='item-name text-black-4'>{ basketContext.basketInfo.basket[0].name || '' }</p>
                <p className='item-price'>$ { basketContext.basketInfo.basket[0].price }</p>
                <p className='item-quantity'>x{ basketContext.basketInfo.basket[0].quantity || 0 }</p>
              </div>
              <div className="text-center bg-gray-3">
                <p>and { basketContext.basketInfo.basket.length } other item(s)</p>
              </div>
            </div>
            <div className="bg-black-4 flex flex-col justify-center" style={{'--gap': '.5em'}}>
              <p className='text-gray-4 text-sm uppercase font-normal'>Grand Total</p>
              <p className='text-white-4 text-2xl'>$ { basketContext.basketInfo.priceSummary }</p>
            </div>
          </div>
          <Link
            to="/home"
            className="btn uppercase block order-summary-btn"
            data-type="1"
            onClick={() => { 
              // dialogRef.current.setAttribute();
              dialogRef.current.closeModal() 
            }}
          >
            Back to home
          </Link>
        </div>
      </dialog>
    </main>
  )
}

export default Checkout;