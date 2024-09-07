
import Navbar from './components/Navbar'
import HomeSection from './components/HomeSection'
import Testimonials from './components/Testimonials'
import {BrowserRouter, Routes} from "react-router-dom"
import ItemSection from './components/ItemSection'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
    <HomeSection />
    <ItemSection />
    <Testimonials/>
    <Routes>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App
