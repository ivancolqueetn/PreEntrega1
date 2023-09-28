import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
    const [item,setItem] = useState({})
    const getData = () => {
        fetch("https://fakestoreapi.com/products/2")
            .then(response=>response.json())
            .then(data => setItem(data))
            .catch(error => connsole.log(error))
    }
    useEffect ((params) => {
        getData()
    },[])
    console.log(item)
  return (
    <>
    <ItemDetail/>
    </>
  )
}

export default ItemDetailContainer