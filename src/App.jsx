import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import  Navbar  from './components/Navbar/Navbar.jsx'
import  Login  from './components/Views/login.jsx'
import Register from './components/Views/register.jsx'
import Inscription_est from './components/Views/inscription_est.jsx'
import Inscription_inst from './components/Views/inscription_inst.jsx'
import User_type from './components/Views/user_type.jsx'
import Home from './components/Views/Home.jsx'
import Footer from './components/Footer/footer'
import Services from './components/Views/Services'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route index element={<Home />} />
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='inscription_est' element={<Inscription_est/>}/>
            <Route path='inscription_inst' element={<Inscription_inst/>}/>
            <Route path='user_type' element={<User_type/>}/>
            <Route path='services' element={<Services/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter> 
    </div>
  )
}

export default App
