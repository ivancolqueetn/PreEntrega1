import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Buy from './pages/Buy'
import Detail from './pages/Detail'
import Cart from './pages/cart'



function App() {
 
  return (
    <div className='container'>

        <NavBar/>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home/:category' element={<Home/>}/>
            <Route path='/Buy' element={<Buy/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Cart' element={<Cart/>}/>
            <Route path='/Detail/:id' element={<Detail/>}/>
        </Routes>
      
    </div>
    

  )
}

export default App
