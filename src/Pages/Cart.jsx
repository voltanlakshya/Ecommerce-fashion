import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AddQty, DecQty, RemoveFromCart } from '../Utilityfiles/CartSlice'

function Cart() {

  const data = useSelector((state) => state.CartReducer.Cart)
  const dispatch = useDispatch()

  

  const inc = (item) => dispatch(AddQty(item))
  const dec = (item) => {
    if (item.Quantity >= 1) dispatch(DecQty(item))
  }

  const removeItem = (item) => dispatch(RemoveFromCart(item))

  const getPriceNumber = (p) =>
    typeof p === 'string' && p.startsWith('$') ? Number(p.slice(1)) : Number(p)

  const total = data.reduce(
    (acc, c) => acc + getPriceNumber(c.price) * c.Quantity,
    0
  )

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
                <div className="qtyLine">
                  QTY:
                  <div className="qtyControls">
                    <button onClick={() => inc(item)}>+</button>
                    <span>{item.Quantity}</span>
                    <button
                      onClick={() => dec(item)}
                      disabled={item.Quantity < 1}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cartSummary">
            <div className="cartTotalLine">
              <span>Total:</span>
              <strong>${total}</strong>
            </div>
            <button className="checkoutBtn">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="emptyCart">
          <h1>No Products in Cart</h1>
          <p>Add items to begin.</p>
        </div>
      )}
    </>
  )
}

export default Cart