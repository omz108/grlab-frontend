import './App.css'
import { Home } from './components/Home'
import  Navbar  from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {

  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      <Router>
        <Navbar />
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App
