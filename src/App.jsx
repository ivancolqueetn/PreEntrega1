import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/Navbar'


function App() {
 
  return (
    <div className='container'>
        <NavBar/>
        <ItemListContainer greeting={"Bienvenidos a la ferreteria online"}/>
    </div>
    

  )
}

export default App
