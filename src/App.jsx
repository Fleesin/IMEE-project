import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import  Navbar  from './components/Navbar/Navbar.jsx'
import  Login  from './components/Views/login.jsx'
import Register from './components/Views/register.jsx'
import Inscription_est from './components/Views/inscription_est.jsx'
import Inscription_inst from './components/Views/inscription_inst.jsx'
import User_type from './components/Views/user_type.jsx'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='login' element={<Login/>}/>
            <Route path='register' element={<Register/>}/>
            <Route path='inscription_est' element={<Inscription_est/>}/>
            <Route path='inscription_inst' element={<Inscription_inst/>}/>
            <Route path='user_type' element={<User_type/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App
