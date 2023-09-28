import './App.css'
import ItemDetailContainer from './components/Details/ItemDetailContainer'
import ItemListContainer from './components/Items/ItemListContainer'
import NavBar from './components/NavBar/Navbar'


function App() {
 
  return (
    <div className='container'>
        <NavBar/>
        <ItemListContainer greeting={"Bienvenidos a la ferreteria online"}/>
        <ItemDetailContainer/>
    </div>
    

  )
}

export default App
