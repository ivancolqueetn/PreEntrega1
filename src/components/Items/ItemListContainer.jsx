import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';

const ItemListContainer = ({greeting}) => {
	const [items, setItems] = useState([])

	useEffect( () => {
		fetch("https://fakestoreapi.com/products")
		.then(response=>response.json())
		.then(data => setItems(data))
		.catch(error => connsole.log(error))
	},[])
	console.log(items)
	return (
		<Container>
			<Row className>
				<h1>{greeting}</h1>
                <ItemList items={items}/>
			</Row>
		</Container> 

	)
}

export default ItemListContainer