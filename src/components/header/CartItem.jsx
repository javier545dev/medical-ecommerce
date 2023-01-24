import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import './header.css'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../store/cartSlice'

export const CartItem = ({ id, cover, name, price, quantity, totalPrice }) => {
  const dispatch = useDispatch()
  const addItem = () => {
    dispatch(cartActions.addToCart({ id, name, price, cover }))
  }
  const removeItem = () => {
    dispatch(cartActions.removeFromCart(id))
  }

  const deleteItem = () => {
    dispatch(cartActions.deleteItem(id))
  }
  return (
    <>
      <div className='cardList' key={id}>
        <div className='cartContent'>
          <div className='img'>
            <img src={cover} alt='' />
            <button className='remove flexCenter' onClick={deleteItem}>
              <AiOutlineClose />
            </button>
          </div>
          <div className='details'>
            <p>{name}</p>
            <label htmlFor=''>Unit Price ${price}</label>

            <div className='price'>
              <div className='qty flexCenter'>
                <button className='plus' onClick={addItem}>
                  <AiOutlinePlus />
                </button>
                <button className='num'>{quantity}</button>
                <button className='minus' onClick={removeItem}>
                  <AiOutlineMinus />
                </button>
              </div>
              <div className='priceTitle'>${totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
