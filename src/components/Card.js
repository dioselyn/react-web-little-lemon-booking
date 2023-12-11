import React from 'react';
import Card from 'react-bootstrap/Card';
import deliveryIcon from '../assets/delivery.svg';

const CustomCard = ({ product }) => {
  return (
    <Card className="card">
      <Card.Img
        variant="top"
        src={product.img}
        style={{ maxHeight: '280px' }}
      />
      <Card.Body>
        <Card.Title
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <h3>{product.title}</h3>
          <span className="card_price"> ${product.price}</span>
        </Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <div>
          <a href="/">
            Order a delivery{' '}
            <img
              src={deliveryIcon}
              alt="order"
              width={'20px'}
              style={{ marginLeft: 12 }}
            />
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;
