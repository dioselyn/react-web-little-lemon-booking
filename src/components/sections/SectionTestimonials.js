import React from 'react';
import CardReview from '../CardReview';
import img1 from '../../assets/review1.jpg';
import img2 from '../../assets/review2.jpg';
import img3 from '../../assets/review3.jpg';
import img4 from '../../assets/review4.jpg';

const SectionTestimonials = () => {
  const reviews = [
    {
      id: 1,
      firstName: 'Alice',
      lastName: 'Johnson',
      description: 'Excellent service and delicious food!',
      img: img1,
      rating: 3,
    },
    {
      id: 2,
      firstName: 'Bob',
      lastName: 'Smith',
      description: 'A wonderful dining experience. Will come back for sure!',
      img: img2,
      rating: 4,
    },
    {
      id: 3,
      firstName: 'Charlie',
      lastName: 'Brown',
      description: 'Great ambiance and friendly staff. Highly recommended.',
      img: img3,
      rating: 5,
    },
    {
      id: 4,
      firstName: 'Diana',
      lastName: 'Williams',
      description:
        'Fantastic Mediterranean flavors. One of the best in Chicago!',
      img: img4,
      rating: 5,
    },
  ];

  return (
    <div className="section-testimonials">
      <h2>Testimonials</h2>

      <div className="section-testimonials_reviews">
        {reviews.map((review) => (
          <CardReview review={review} key={review.id} />
        ))}
      </div>
    </div>
  );
};

export default SectionTestimonials;
