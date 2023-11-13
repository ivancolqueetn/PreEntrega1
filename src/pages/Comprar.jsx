import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Comprar = () => {
    const [formData, setFormData] = useState({
      nombre: '',
      apellido: '',
      correo: '',
      celular: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // enviar datos al servidor

      toast.success('se ha registrado su compra');
    };
  
    return (
      <div>
        <h2>Comprar</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="nombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
          </Form.Group>
  
          <Form.Group controlId="apellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese su apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
          </Form.Group>
  
          <Form.Group controlId="correo">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
            />
          </Form.Group>
  
          <Form.Group controlId="celular">
            <Form.Label>Número de Celular</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Ingrese su número de celular"
              name="celular"
              value={formData.celular}
              onChange={handleChange}
            />
          </Form.Group>
  
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
    );
  };
  

