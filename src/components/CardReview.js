import React from 'react';
import Image from 'react-bootstrap/Image';
import starIcon from '../../src/assets/star.svg';

const CardReview = ({ review }) => {
  let ratingIcon;

  const rating = Math.round(review.rating);

  if (rating <= 1) {
    ratingIcon = <Image src={starIcon} />;
  } else if (rating <= 2) {
    ratingIcon = (
      <>
        <Image src={starIcon} /> <Image src={starIcon} />
      </>
    );
  } else if (rating <= 3) {
    ratingIcon = (
      <>
        <Image src={starIcon} /> <Image src={starIcon} />{' '}
        <Image src={starIcon} />
      </>
    );
  } else if (rating <= 4) {
    ratingIcon = (
      <>
        <Image src={starIcon} /> <Image src={starIcon} />{' '}
        <Image src={starIcon} /> <Image src={starIcon} />
      </>
    );
  } else {
    ratingIcon = (
      <>
        <Image src={starIcon} /> <Image src={starIcon} />{' '}
        <Image src={starIcon} /> <Image src={starIcon} />{' '}
        <Image src={starIcon} />
      </>
    );
  }

  return (
    <div className="card-review">
      <div className="card-review_img">
        <Image src={review.img} roundedCircle />
      </div>
      <div className="card-review_info">
        <div>
          <h3>{`${review.firstName} ${review.lastName}`}</h3>
          <span>{ratingIcon}</span>
        </div>
        <p>{review.description}</p>
      </div>
    </div>
  );
};

export default CardReview;
