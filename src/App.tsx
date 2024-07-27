import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Home from './pages/home';
import Products from './pages/products';
import Contact from './pages/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Router>
        <div className='border-b-2 w-[100vw] flex justify-center'>
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
        <div className='w-[100vw] flex justify-center bg-gray-800'>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
