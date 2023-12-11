import React from 'react';
import Card from '../Card';
import greek from '../../assets/greek_salad.jpg';
import bruchetta from '../../assets/bruchetta.svg';
import lemon from '../../assets/lemon dessert.jpg';

const SectionSpecials = () => {
  const products = [
    {
      id: 1,
      title: 'Greek salad',
      img: greek,
      description:
        'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: 12.99,
    },
    {
      id: 2,
      title: 'Bruchetta',
      img: bruchetta,
      description:
        'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      price: 5.99,
    },
    {
      id: 3,
      title: 'Lemon Dessert',
      img: lemon,
      description:
        'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      price: 5.0,
    },
  ];

  return (
    <div className="section-specials">
      <div className="section-specials_header">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="section-specials_cards">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default SectionSpecials;
