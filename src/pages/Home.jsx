import React, { useEffect, useState } from 'react'
import ItemListContainer from '../components/Items/ItemListContainer'
import { useParams } from 'react-router-dom'
import useFetch from '../components/Hooks/useFetch'
import ItemList from '../components/Items/ItemList'
import { Container } from 'react-bootstrap'

const Home = () => {
let {category}=useParams()
const [items,setItems]= useState([])

useEffect(() => {
  async function as(){
    const url = `https://fakestoreapi.com/products/category/${!category? "men's clothing":category}`
    fetch(url)
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(error => console.log(error))
    console.log(items)
  }
as()
},[category])
  return (
   
    <div>{!category? <ItemListContainer greeting={"Bienvenidos a la tienda online"}/>:<div className='Container-fluid'><ItemList items={items}/></div>}
      </div>
    
  )
}

export default Home