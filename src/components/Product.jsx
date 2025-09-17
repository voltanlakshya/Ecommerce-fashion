import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../Utilityfiles/CartSlice';
import data from './data.json'
import data2 from './data2.json'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

// This tells Vite to find and process all images
// The 'eager: true' option makes them available immediately
const images = import.meta.glob('../assets/**/*.{jpg,png}', { eager: true });

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const item = data.find((prod) => prod.id === parseInt(id)) || data2.find((prod) => prod.id === parseInt(id));

  const Cart = useSelector((state) => state.CartReducer.Cart)
  
  // Helper function to resolve image paths
  const getImageUrl = (path) => {
    if (!path) return '';
    
    // For paths starting with src/
    if (path.startsWith('src/')) {
      // Remove 'src/' prefix to match the import.meta.glob pattern
      const relativePath = '../' + path.substring(4);
      
      // Try to find the image in our imported modules
      const imageModule = images[relativePath];
      
      if (imageModule) {
        return imageModule.default; // Get the processed URL
      }
      
      console.error(`Image not found: ${path}`);
      return 'https://via.placeholder.com/400x400?text=Not+Found';
    }
    
    return path; // Return as-is if it doesn't start with src/
  };
  
  const Added = (item) => {
    dispatch(addToCart(item));
  }
  
  if (!item) return <div>Loading....</div>;


  
  
  return (
   <div className="product-detail">
    <img 
      src={getImageUrl(item.img)} 
      alt={item.title}
      onError={(e) => {
        console.error("Image failed to load:", item.img);
        e.target.src = "https://via.placeholder.com/400x400?text=Image+Not+Found";
      }} 
    />
     <div>
        <h2>{item.brand}</h2>
        <h4>{item.title}</h4>
        <h3>{item.description || "no description"}</h3>
        <h4 className="price">{item.price}</h4>
        {
        Cart.find(cartItem => cartItem.id === item.id) ? (
        <Link to="/Cart"><button className="viewcart">View Cart</button></Link>
        ) : (
        <button onClick={() => Added(item)}>Add To Cart</button>
        )
        }
     </div>
   </div>
  )
}

export default Product