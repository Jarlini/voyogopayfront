import React from 'react';
import { FaHeart, FaComments, FaCamera, FaPaw, FaStar, FaUmbrella, FaPlane, FaHotel, FaUsers, FaGlobe } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane, faHotel, faUsers, faGlobe } from '@fortawesome/free-solid-svg-icons';
import  photo5 from '../component/photos/lasty.png';
export default function CuteAboutPage() {
  const travelersImg = "/placeholder.svg?height=400&width=600";

  const reasons = [
    { icon: FaHeart, title: "Heartfelt Service", description: "We pour love into every detail of your journey!" },
    { icon: FaComments, title: "Always Listening", description: "Your feedback shapes our service, making it better every day!" },
    { icon: FaCamera, title: "Memory Makers", description: "We help create picture-perfect moments you'll cherish forever!" },
    { icon: FaPaw, title: "Pet Friendly", description: "Your furry friends are welcome on our adventures!" },
    { icon: FaStar, title: "Star Treatment", description: "Every customer is our VIP, receiving stellar care!" },
    { icon: FaUmbrella, title: "Rain or Shine", description: "We've got you covered in all weather conditions!" }
  ];

  const funFacts = [
    { icon: faPlane, fact: "50+   destinations explored" },
    { icon: faHotel, fact: "100+ cozy accommodations" },
    { icon: faUsers, fact: "1000+ happy travelers" },
    { icon: faGlobe, fact: "24/7 customer support" }
  ];

  return (
    <div className="container-fluid py-5 animate__animated animate__fadeIn">
      <div className="container"><br/><br/><br/><br/><br/><br/>
        <h1 className="display-4 text-center mb-5 fw-bold" style={{ color: 'orange' }}>
          Welcome to Our Whimsical World of Travel!
        </h1>

        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            <img 
              src={photo5} 
              alt="Happy travelers" 
              className="img-fluid rounded-circle shadow-lg" 
              style={{ height: '500px', width: '600px', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <p className="lead" style={{ color: 'teal', fontSize: '1.5rem' }}>
              At CuteTravel, we believe every journey should be filled with smiles, laughter, and unforgettable moments!
            </p>
            <p className="mt-3" style={{ fontSize: '1.2rem' }}>
              Our team of adventure enthusiasts is dedicated to crafting the most adorable and exciting travel experiences just for you!
            </p>
          </div>
        </div>

        <h2 className="text-center mb-4 fw-bold" style={{ color: '#00897B' }}>Why Choose Our Cuddly Company? 🐨</h2>
        <div className="row g-4 mb-5">
          {reasons.map((reason, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 border-0 shadow-sm animate__animated animate__fadeInUp" 
                   style={{ backgroundColor: index % 2 === 0 ? '#B2DFDB' : '#FFCCBC', animationDelay: `${index * 0.1}s` }}>
                <div className="card-body text-center">
                  <reason.icon className="mb-3" size={50} color={index % 2 === 0 ? '#00897B' : '#FF5722'} />
                  <h3 className="card-title h4" style={{ color: index % 2 === 0 ? '#00897B' : '#FF5722' }}>{reason.title}</h3>
                  <p className="card-text">{reason.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-5 mb-5 animate__animated animate__fadeIn">
          <h2 className="text-center mb-4 fw-bold" style={{ color: 'orange' }}>Fun Facts About Us!</h2>
          <div className="row justify-content-center">
            {funFacts.map((fact, index) => (
              <div key={index} className="col-md-6 col-lg-3 mb-4">
                <div className="d-flex align-items-center bg-light p-3 rounded-lg shadow-sm h-100 animate__animated animate__fadeInUp" 
                     style={{ animationDelay: `${index * 0.1}s` }}>
                  <FontAwesomeIcon icon={fact.icon} size="2x" className="me-3" style={{ color: '#00897B' }} />
                  <p className="mb-0 fw-bold" style={{ fontSize: '1rem', color: '#333' }}>{fact.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center animate__animated animate__fadeInUp" style={{ animationDelay: '0.4s' }}>
          <h2 className="mb-4 fw-bold" style={{ color: '#00897B' }}>Ready to Start Your Cute Adventure?</h2>
          <button className="btn btn-lg px-5 py-3 fw-bold text-white animate__animated animate__pulse animate__infinite" 
                  style={{ backgroundColor: '#FF5722', fontSize: '1.2rem' }}>
            Book Your Trip Now!
          </button><br/><br/><br/><br/>
        </div>
      </div> 
    </div>
  );
}