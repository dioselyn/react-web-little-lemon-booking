import React from 'react';
import food1 from '../../assets/Mario and Adrian b.jpg';
import food2 from '../../assets/Mario and Adrian A.jpg';

const SectionResume = () => {
  return (
    <div className="section-resume">
      <div className="section-resume_info">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          From zesty lemon-infused starters to savory delights that capture the
          essence of the region, every bite is a celebration of authenticity and
          creativity. Whether you're savoring our signature grilled kebabs,
          indulging in vibrant salads, or treating yourself to heavenly
          desserts, Little Lemon promises an experience that lingers on the
          palate and in your heart.
        </p>
      </div>
      <div className="section-resume_gallery">
        <div className="section-resume_gallery_1">
          <img src={food1} alt="restautant" />
        </div>
        <div className="section-resume_gallery_2">
          <img src={food2} alt="restaurant" />
        </div>
      </div>
    </div>
  );
};

export default SectionResume;
