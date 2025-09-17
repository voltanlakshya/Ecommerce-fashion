import { useSelector, useDispatch } from 'react-redux'
import { RemoveFromWish } from '../Utilityfiles/WishSlice'
import { FaCartShopping } from "react-icons/fa6";
import { addToCart } from '../Utilityfiles/CartSlice';
import { toastSuccess } from '../components/Toat';

function Wishlist() {
  const data = useSelector((state) => state.WishReducer.Wish)
  const dispatch = useDispatch()

  const Added = (item) => {
      dispatch(addToCart(item));
    }

  const removeItem = (item) => {
    dispatch(RemoveFromWish(item))
  }

  return (
    <>
      {data.length > 0 ? (
        <div className="cartContainer">
          <div className="cartItemsGrid">
            {data.map((item) => (
              <div key={item.id} className="cartItem">
                <button
                  className="removeBtn"
                  onClick={() => removeItem(item)}
                  aria-label="Remove item"
                >
                  &times;
                </button>
                <img src={item.img} alt={item.title} className="img" />
                <span>{item.brand}</span>
                <h4>{item.title}</h4>
                <h4 className="price">
                  {typeof item.price === 'number' ? `$${item.price}` : item.price}
                </h4>
                 <div className='cartbtn'>
                  <button onClick={() => {
              Added(item); 
              removeItem(item);
              toastSuccess('Moved to Cart');
            }} className="Cartbt"><FaCartShopping /></button>
                   </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <h1>No Products in Wishlist</h1>
          <p>Add items to begin.</p>
        </div>
      )}
    </>
  )
}

export default Wishlist