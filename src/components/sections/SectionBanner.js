import React from 'react';
import Image from 'react-bootstrap/Image';
import img from '../../assets/restaurant chef B.jpg';

const SectionBanner = () => {
  return (
    <div className="section-banner">
      <div className="section-banner_shadown">
        <div className="section-banner_content">
          <div className="section-banner_info">
            <h1>Little Lemon</h1>
            <h4>Chicago</h4>
            <p>
              Welcome to our Chicago-based Mediterranean haven! Immerse yourself
              in the vibrant flavors and rich traditions of the Mediterranean at
              our restaurant. From the sun-kissed coasts to the heart of
              Chicago, our culinary journey promises an exquisite blend of
              fresh, locally-sourced ingredients and time-honored recipes. Join
              us for an unforgettable dining experience, where every dish tells
              a story of passion and authenticity. Elevate your senses with the
              taste of the Mediterranean right here in the Windy City.
            </p>
            <button>Reserve a table</button>
          </div>
          <div className="section-banner_img">
            <Image src={img} rounded />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBanner;
