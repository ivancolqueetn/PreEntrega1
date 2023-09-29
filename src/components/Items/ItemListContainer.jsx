import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import ItemList from './ItemList';
import useFetch from '../Hooks/useFetch';

const ItemListContainer = ({greeting}) => {
	const [items] = useFetch("https://fakestoreapi.com/products")

	return (
		<Container>
			<Row >
				<h1>{greeting}</h1>
				{
				items !== null &&
				<ItemList items={items}/>
				}
			</Row>
		</Container> 

	)
}

export default ItemListContainer