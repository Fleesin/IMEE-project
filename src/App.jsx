import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import  Navbar  from './components/Navbar/Navbar'
import  Login  from './components/Views/login'
import Register from './components/Views/register'
import Inscription_est from './components/Views/inscription_est'
import Inscription_inst from './components/Views/inscription_inst'
import User_type from './components/Views/user_type'
import Home from './components/Views/Home'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route index element={<Home />} />
            <Route path='https://imee-project-fleesin.vercel.app/login' element={<Login/>}/>
            <Route path='https://imee-project-fleesin.vercel.app/register' element={<Register/>}/>
            <Route path='https://imee-project-fleesin.vercel.app/inscription_est' element={<Inscription_est/>}/>
            <Route path='https://imee-project-fleesin.vercel.app/inscription_inst' element={<Inscription_inst/>}/>
            <Route path='https://imee-project-fleesin.vercel.app/user_type' element={<User_type/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  )
}

export default App
