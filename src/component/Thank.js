import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faMapMarkerAlt, faPhone, faStar, faUsers, faEnvelope, faPlaneDeparture, faCameraRetro, faUtensils, faHotel, faMountain } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from "react-bootstrap";

export default function TravelWebsite() {
  const handleButtonClick = (action) => {
    // Correctly use backticks for string interpolation
    console.log(`Action: ${action}`);
  };

  const testimonials = [
    { name: "Sarah J.", text: "An unforgettable experience! The team was amazing and the destinations were breathtaking." },
    { name: "Mike T.", text: "Well-organized trips, friendly guides, and a great community. Can't wait for my next adventure!" },
    { name: "Emily R.", text: "The WhatsApp group was a game-changer! Made friends before the trip even started." }
  ];

  return (
    <div className="bg-light">
      {/* Hero Section */}
      <section
        className="py-5 text-white text-center"
        style={{
          background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #FDCB6E, #6C5CE7)',
        }}
      >
        <div className="container">
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <h1
            className="mb-4"
            style={{ fontSize: '60px' }}
          >
            Ready to Start Your Journey?{' '}
            <FontAwesomeIcon icon={faHeart} className="text-white" size="1x" bounce />
          </h1>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: '#2EC4B6' }}>What Our Happy Travelers Say</h2>
          <Carousel interval={2000}>
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <div className="bg-light p-4 rounded-3 mx-auto" style={{ maxWidth: '600px' }}>
                  <p className="lead mb-4">"{testimonial.text}"</p>
                  <footer className="blockquote-footer mt-2">{testimonial.name}</footer>
                  <div className="mt-3">
                    {[...Array(5)].map((_, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className="text-orange me-1" />
                    ))}
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>

      {/* WhatsApp Group Section */}
      <section className="py-5 text-white text-center" style={{background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1, #FDCB6E, #6C5CE7)'}}>
        <div className="container"><br/><br/><br/>
          <h1 className="display-2 fw-bold mb-3" style={{color: 'orange'}}>Thank You for Choosing Us!</h1>
          <p className="lead mb-4">Your cute adventure begins here. Get ready for an unforgettable experience!<br/> join our group for good community.</p> 
          <FontAwesomeIcon icon={faHeart} className="text-white" size="4x" bounce /> 
        </div><br/><br/>
      </section>  

      {/* Adventure Options Section */}
      <section className="py-5 bg-white">
        <div className="container"><br/><br/><br/>
          <h2 className="text-center mb-5" style={{color: '#2EC4B6'}}>Explore Your Adventure Options</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[
              { icon: faHotel, text: "Find Hotels", color: "#FF9F1C" },
              { icon: faUtensils, text: "Local Cuisine", color: "#2EC4B6" },
              { icon: faCameraRetro, text: "Photo Tours", color: "#FF9F1C" },
              { icon: faMountain, text: "Adventures", color: "#2EC4B6" }
            ].map((button, index) => (
              <button
                key={index}
                className="btn btn-lg rounded-pill px-4 py-3 text-white"
                style={{ backgroundColor: button.color, minWidth: '200px' }}
                onClick={() => handleButtonClick(button.text)}
              >
                <FontAwesomeIcon icon={button.icon} className="me-2" />
                {button.text}
              </button>
            ))}
          </div>
        </div><br/><br/><br/>
      </section>

      {/* Package Features Section */}
      <section className="py-5" style={{backgroundColor: '#F3F3F3'}}>
        <div className="container">
          <h2 className="text-center mb-5" style={{color: '#FF9F1C'}}>What's Included in Your Package</h2>
          <div className="row g-4">
            {[
              { icon: faUsers, title: "Group Activities", description: "Join fun group activities and make new friends!", color: "#2EC4B6" },
              { icon: faHotel, title: "Cute Accommodations", description: "Stay in adorable and cozy hotels.", color: "#FF9F1C" },
              { icon: faUtensils, title: "Yummy Meals", description: "Enjoy delicious local and international cuisine.", color: "#2EC4B6" },
              { icon: faCameraRetro, title: "Guided Tours", description: "Explore with friendly local guides.", color: "#FF9F1C" }
            ].map((feature, index) => (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="bg-white p-4 rounded-3 shadow-sm text-center h-100">
                  <FontAwesomeIcon icon={feature.icon} className="mb-3" size="3x" style={{color: feature.color}} />
                  <h3 className="h5" style={{color: feature.color}}>{feature.title}</h3>
                  <p className="mb-0">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div><br/><br/><br/>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 text-center text-md-start">
              <h5 className="mb-3">Contact Us</h5>
              <p><FontAwesomeIcon icon={faEnvelope} className="me-2" /> contact@voyago.com</p>
              <p><FontAwesomeIcon icon={faPhone} className="me-2" /> +1 (123) 456-7890</p>
              <p><FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" /> 123 Adventure St, Travelville, TX 12345</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <h5 className="mb-3">Follow Us</h5>
              <div className="d-flex justify-content-center justify-content-md-end gap-3">
                <a href="#" className="text-white"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <p className="text-center mb-0">&copy; 2023 Voyago Adventures. All rights reserved.</p>
        </div>
      </footer>
      <br/><br/><br/>
    </div>
  );
}
