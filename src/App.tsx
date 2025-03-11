import './App.css'
import { Home } from './components/Home'
import  Navbar  from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { About } from './components/About';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { AdminLogin } from './components/AdminLogin';
import { AdminLayout } from './components/AdminLayout';
import { AddReport } from './components/AddReport';
import { EditReport } from './components/EditReport';
import { useLocation } from 'react-router-dom';
import { View } from './components/View';
import { UploadExcel } from './components/UploadExcel';
import { ProtectedRoute } from './components/ProtectedRoute';
// import { AddGemReport } from './components/AddGemReport';


function App() {
  return (
    <div>
      <Router>
        <Main />
      </Router>
    </div>
  )
}

function Main() {

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>
      {/* <Router> */}
        {!isAdminRoute && <Navbar />}
        <div className='flex-grow'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            
            <Route path='/admin' element={<AdminLayout />}>
              <Route path='login' element={<AdminLogin />}></Route>
              <Route element={<ProtectedRoute />}>
                <Route path='addReport' element={<AddReport />}></Route>
                <Route path='uploadExcel' element={<UploadExcel />}></Route>
                <Route path='editReport' element={<EditReport />}></Route>
                <Route path='view' element={<View />}></Route>
              </Route>
              <Route path='*' element={<Navigate to='login' replace />}></Route>
            </Route>
          </Routes>
        </div>
        <Footer />
      {/* </Router> */}
    </div>
  )
}

export default App
