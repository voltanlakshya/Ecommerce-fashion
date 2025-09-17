import React from 'react'
import data2 from './data2.json'
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Utilityfiles/CartSlice';
import { useNavigate } from 'react-router-dom';
import { addToWish } from '../Utilityfiles/WishSlice';
import { RemoveFromWish } from '../Utilityfiles/WishSlice'

function Card() {

const dispatch = useDispatch();
  const Added = (item) => {
    dispatch(addToCart(item));
  }

  const wishItem = useSelector((state)=> state.WishReducer.Wish);

   const Addwish = (item) => {
      dispatch(addToWish(item));
    } 

    const Removewish = (item) => {
        dispatch(RemoveFromWish(item));
      } 

   const Navigate = useNavigate();
    const goToProduct = (item) => {
      Navigate(`product/${item.id}`);
    }
  return (
    <div className="product-collection">
    {data2.map((item)=>{
          const isWished = wishItem.find((w) => w.id === item.id);
          return(
            <div className="product-cart" key={item.id} onClick={()=>goToProduct(item)}> 
                   <img src={item.img} alt="" className="img"/>
                    <span>{item.brand}</span>
                    <h4>{item.title}</h4>
                    <div className="stars">
                    </div>
                    <h4 className="price">{item.price}</h4>
                    <div className='cartbtn'>
    
                    <button onClick={(e) => {
                e.stopPropagation();
                Added(item);
              }}className='cartcolor'><FaCartShopping /></button>
    
                     <button onClick={(e) => {
                e.stopPropagation();
               { isWished ? Removewish(item) : Addwish(item);}
              }} className='wishcolor'>{isWished ? <FaHeart /> : <CiHeart />}</button>
                     </div>
                  </div>
        )
        })}
    </div>
  )
}

export default Card