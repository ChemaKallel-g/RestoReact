import React from 'react';

const CarouselComponent = ({ images }) => {
  return (
    <div className="row shadow rounded p-8">
      {/* Carousel Section */}
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner h-100">
            {images.map((image, index) => (
              <div key={index} className={`carousel-item h-100 ${index === 0 ? 'active' : ''}`}>
                <img src={image.src} className="d-block w-100 h-100" alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Text Content Section */}
      <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
        <div className="mb-3">
          <h2>Get The Best <span className="text-danger fst-italic">Food</span> From
          <span className="text-danger"> The Best Restaurants.</span></h2>
        </div>

        <div className="mb-1 p-3">
          <span><i className="fa-solid fa-seedling text-danger mx-2 fs-4"></i></span>
          <span className="fs-5 text-dark fst-italic">Fresh Food</span>
        </div>
        <div className="mb-1 p-3">
          <span><i className="fa-solid fa-wheat-awn text-danger mx-2 fs-4"></i></span>
          <span className="fs-5 text-dark fst-italic">Healthy Meal</span>
        </div>
        <div className="mb-1 p-3">
          <span><i className="fa-solid fa-person-biking text-danger mx-2 fs-4"></i></span>
          <span className="fs-5 text-dark fst-italic">Fastest Delivery</span>
          <p className="py-2">We Promise Deliver Order Within 30 Min</p>
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
