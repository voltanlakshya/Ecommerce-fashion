import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RoutesConfig from './RoutesConfig'
import ScrollToTop from './Scroll'


function App() {
  return (
    <>
      <Navbar />
        <RoutesConfig />
        <ScrollToTop />
      <Footer />
      
    </>
  )
}
export default App
