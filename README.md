# Ecommerce (Vite + React)

A responsive ecommerce frontend built with React, Redux Toolkit, and React Router. It includes product listing, product detail, cart, and wishlist flows with clean UI components and toast notifications.

## Features
- Product listing with cards and quick actions (add to cart/wishlist)
- Product detail page with image, brand, title, price, description
- Cart with quantity controls and total
- Wishlist with toggle heart button
- Hero slider on the home page
- Navbar with live cart count and wishlist count
- Toast notifications (SweetAlert2)
- Responsive layout and reusable components

## Tech Stack
- React 18 + Vite
- React Router v6
- Redux Toolkit + React Redux
- SweetAlert2 (toasts)
- React Icons
- CSS (App.css)

## Project Structure
```
src/
  App.jsx, App.css, main.jsx, RoutesConfig.jsx
  Store.js
  assets/images/...                # local images used in components
  components/
    Navbar.jsx, HeroSlider.jsx
    Card.jsx, Card2.jsx, Banner.jsx, Section.jsx
    Product.jsx
    data.json, data2.json          # product data
    Toat.jsx                       # (toast utility if used)
  Pages/
    Home.jsx, Cart.jsx, Wishlist.jsx, Login.jsx
    Contact/Contact.jsx, Contact.css
  Utilityfiles/
    Authslice.js
    CartSlice.jsx
    WishSlice.jsx
```

## Getting Started

Prerequisites
- Node.js 18+ and npm

Install
```bash
npm install
```

Run (dev)
```bash
npm run dev
# Open http://localhost:5173
```

Build
```bash
npm run build
npm run preview
```

## Routing
- Defined in src/RoutesConfig.jsx
- Typical routes: Home (/), Product (/Product/:id), Cart (/Cart), Wishlist (/Wishlist), Login (/Login), Contact (/Contact)

Link to product detail:
```jsx
<Link to={`/Product/${item.id}`}>View</Link>
```

Read id on product page:
```jsx
import { useParams } from 'react-router-dom';
const { id } = useParams();
```

## State Management
Slices in src/Utilityfiles:
- CartSlice.jsx: Cart, quantity changes, remove item
- WishSlice.jsx: Wishlist add/remove
- Authslice.js: Users and currentUser

Use in components:
```jsx
const cart = useSelector((s) => s.CartReducer.Cart);
const wish = useSelector((s) => s.WishReducer.Wish);
const dispatch = useDispatch();
```

## Toast Notifications (SweetAlert2)
Install:
```bash
npm i sweetalert2
```
Use:
```jsx
import Swal from 'sweetalert2';
const Toast = Swal.mixin({ toast: true, position: 'top-end', timer: 1800, showConfirmButton: false, timerProgressBar: true });
Toast.fire({ icon: 'success', title: 'Added to cart' });
```
You can centralize a reusable toast helper (e.g., src/components/Toat.jsx or utils/toast.js) and import it everywhere.

## Hero Slider
You can implement:
- Simple custom slider (CSS transitions), or
- Swiper library:
  - npm i swiper
  - Use <Swiper/> in src/components/HeroSlider.jsx with modules Autoplay, Pagination, Navigation
- To avoid “zoomed” backgrounds, use:
```css
.heroSlide { background-size: contain; background-repeat: no-repeat; background-position: center; }
```

## Images and Assets
If product images are referenced in JSON as src/assets/... paths, the browser will not load them directly. Options:
- Move images to public/ and reference with absolute paths (e.g., /product_files/f1.jpg)
- Or resolve via Vite’s import.meta.glob in Product.jsx to map src/assets/... to served URLs

Example (public):
```
public/product_files/f1.jpg
# JSON: "img": "/product_files/f1.jpg"
```

## Cart/Wishlist Persistence (Optional)
To persist across refresh, subscribe in Store.js to save to localStorage, and hydrate initialState from localStorage in each slice.

## Scripts
- dev: Start Vite dev server
- build: Production build
- preview: Preview built app

## Contributing
- Create a feature branch
- Follow existing component patterns
- Keep slices pure (avoid side effects); use store.subscribe or middleware for persistence

## License
MIT (or your preferred license)