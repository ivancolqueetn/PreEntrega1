import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



const ItemList = ({items}) => {
  return (
    <Container>
      <Row className="justify-content-center">
        {items.map((item) => (
          <Col md={6} lg={3} xs={12} key={item.id}>
            <CardList item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};



// COMPONENTE CardList
const CardList = ({item}) => {
  function handleclick(item){
    if(!localStorage.getItem('cartItems')){
      localStorage.setItem('cartItems',JSON.stringify([]))
      }
      const newcart=localStorage.getItem('cartItems')
      const newcartParse = JSON.parse(newcart)
      newcartParse.push(item)
      localStorage.setItem('cartItems',JSON.stringify(newcartParse))
      
  }

  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
            {item.description}
            </Card.Text>
                <Link to={`/Detail/${item.id}`}>
                    <Button variant="primary">Ver Detalles</Button>
                </Link>

                    <Button onClick={() => handleclick(item)} variant="primary">Añadir Carrito</Button>

        </Card.Body>
    </Card>
  );
}

export default ItemList



