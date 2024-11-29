import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from './Api';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faMapMarkedAlt, faHeadset, faLocationDot, faCalendar, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { faPlane, faHotel, faCar, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landingpage.css';
import AnimatedSection from '../component/Ani.js';
import ImageGallery from '../component/MYL.js'; 

// Import images
import photo9 from '../component/photos/hindu 3.jpg';
import photo5 from '../component/photos/hindu4.jpg';
import photo6 from '../component/photos/HINDU75.jpg';
import photo0 from '../component/photos/blog.jpg';
import photo4 from '../component/photos/hindu9.jpg';
import photo7 from '../component/photos/nav2.jpg';
import video1 from '../component/photos/first.mp4';
import photo8 from '../component/photos/nav4.jpg';
import photo2 from '../component/photos/blog4.jpg';
import photo3 from '../component/photos/as.jpg';
import photo32 from '../component/photos/Screenshot from 2024-09-09 11-31-31.png';
import photo31 from '../component/photos/Screenshot from 2024-09-09 11-32-02.png';
import photo30 from '../component/photos/Screenshot from 2024-09-09 11-33-31.png';
import photo35 from '../component/photos/Screenshot from 2024-09-09 11-34-19.png';
import photo34 from '../component/photos/7b77cb4af1b7e380fa9a1f7acc0dd24d.jpg';

import photo33 from '../component/photos/om.png';
export default function LandingPage() {
  const navigate = useNavigate();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await api.get('/trips');
        setTrips(res.data);
      } catch (err) {
        console.error("Error fetching trips:", err);
      }
    };

    fetchTrips();
  }, []);
  const handleJoinClick = () => {
    navigate('/packages')
  }

  const features = [
    { icon: faPlane, title: 'Best Flights' },
    { icon: faHotel, title: 'Comfortable Stays' },
    { icon: faCar, title: 'Smooth Transfers' },
    { icon: faUmbrellaBeach, title: 'Exciting Activities' },
  ];

  const reasons = [
    { image: photo7, text: "We are friendly and approachable, ensuring you feel comfortable on your journey." },
    { image: photo8, text: "We create happy and memorable experiences that you'll cherish forever." },
    { image: photo9, text: "Our calm and peaceful approach helps you relax and enjoy every moment." },
    { image: photo0, text: "We are organized and thoughtful, making your experience stress-free." },
  ];

  const destinations = [
    {
      video: video1, 
      name: "Your Voyago",
      description: "Embark on unforgettable journeys with ease and joy.",
      type: 'video'
    },
    {
      image: photo2,
      name: "Your Personal Pilgrimage Planner",
      description: "Tailor your pilgrimage experience to fit your desires."
    },
    {
      image: photo3,
      name: "Discover Unique Destinations",
      description: "Uncover hidden gems and explore diverse cultures."
    },
    {
      image: photo4,
      name: "Seamless Travel Management",
      description: "Effortlessly manage bookings, accommodations, and itineraries."
    },
    {
      image: photo5,
      name: "Community and Support",
      description: "Join a community of travelers and find support along the way."
    },
    {
      image: photo6,
      name: "Memorable Experiences",
      description: "Create lasting memories with curated pilgrimage experiences."
    },
    {
      image: photo7,
      name: "Explore with Confidence",
      description: "Navigate your journey with trusted guidance and resources."
    },
    {
      image: photo8,
      name: "Engaging and Informative",
      description: "Access detailed information and tips for every destination."
    },
    {
      image: photo9,
      name: "Transform Your Travels",
      description: "Make your pilgrimage a transformative and enriching adventure."
    },
  ];

  const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showText, setShowText] = useState(false);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setShowText(true);
      }, 100);

      const hideTextTimeout = setTimeout(() => {
        setShowText(false);
      }, 2300); // Change timing if needed

      return () => {
        clearTimeout(timeout);
        clearTimeout(hideTextTimeout);
      };
    }, [currentIndex]);

    const handleSelect = (selectedIndex, e) => {
      setCurrentIndex(selectedIndex);
      setShowText(false);
    };

    return (
      <div><br/><br/><br/>
        <section className="hero-section"><br/><br/>
          <Carousel controls={true} indicators={true} interval={4000} activeIndex={currentIndex} onSelect={handleSelect} className="hero-carousel">
            {destinations.map((destination, index) => (
              <Carousel.Item key={index} className="carousel-item">
                {destination.type === 'video' ? (
                  <video className="d-block hero-video" controls autoPlay loop muted>
                    <source src={destination.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={destination.image} alt={`Slide ${index + 1}`} className="d-block hero-image" />
                )}
                <div className="carousel-overlay">
                  <div className="overlay-content">
                    <h1 className="display-4 fw-bold text-white mb-4 animated-text"  style={{ fontSize: '70px' }}>{destination.name}</h1>
                    <p 
   className="lead text-white mb-1 animated-text" 
   style={{ fontSize: '50px' }}
>{destination.description}</p>
                    <button onClick={() => document.getElementById('trips-section').scrollIntoView({ behavior: 'smooth' })} className="btn btn-light explore-button">
                      Discover More
                    </button>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </section>
      </div>
    );
  };

  return (
    <div> 
      <HeroSection />
      <br/><br/><br/><br/><br/><br/><br/>
      <div className="landing-page">
        <div className="content" style={{ fontSize: '46px',marginLeft:'80px',marginRight:'80px' }}>
          <div className="left-div">
            <h1 className="welcome-text" style={{ fontSize: '46px',marginLeft:'30px' ,color:'#008080'}}>Welcome to Voyago!</h1>
            <p style={{ fontSize: '26px' }}>
              "Hi, welcome to Voyago! Join us on an unforgettable journey where every moment is filled with joy and excitement. Whether you're visiting temples or enjoying a peaceful camp, we've got the perfect package waiting for you. Come along and experience the happiness we offer—your adventure starts here!"
            </p>
            <button className="home-button" onClick={() => navigate('/about')}>About us</button>
          </div>
          <div className="right-div">
            <img src={photo31} alt="Traveling" />
            <img src={photo30} alt="Traveling" />
            <img src={photo32} alt="Traveling" />
            <img src={photo33} alt="Traveling" />
            <img src={photo34} alt="Traveling" />
            <img src={photo35} alt="Traveling" />
          </div>
        </div>
      </div>
      <br/><br/><br/><br/>
      <AnimatedSection /> <br/><br/><br/><br/>
      <div id="who-we-are-section" className="reasons-section text-center">
        <h2 className="section-title  " style={{ color: 'orange' }}>Who We Are?</h2><br/><br/>
        <div className="reasons-grid" style={{ marginLeft:'50px' }}>
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <img src={reason.image} alt={`reason-${index}`} className="reason-image" />
              <p className="reason-text">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
      <br/><br/><br/><br/><br/>
      <section className="why-choose-us py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold" style={{ color: '#008080' }}>
          <br/>   Why Choose Us?<br/><br/><br/>
          </h2>
          <div className="row text-center">
            {features.map(({ icon, title }) => (
              <div key={title} className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="feature-card p-4 rounded shadow-sm h-100 d-flex flex-column align-items-center justify-content-center">
                  <div className="icon-box d-flex align-items-center justify-content-center bg-white p-3 rounded-circle mb-3 shadow">
                    <FontAwesomeIcon icon={icon} className="text-black fs-1" />
                  </div>
                  <h4 className="feature-title">{title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <br/><br/><br/><br/>
      <div id="trips-section" className="trips-section py-5">
        <h2 className="section-title text-center mb-5">Explore Our Pilgrimages</h2><br/><br/>
        <div className="trips-grid" style={{ marginLeft:'50px' }}>
          {trips.map((trip) => (
            <div key={trip._id} className="trip-card">
              <div className="trip-content">
                <h3 className="trip-title">{trip.title}</h3>
                <div className="trip-photos">
                  {trip.photos.slice(0, 3).map((photo, index) => (
                    <img key={index} src={photo} alt={`Trip photo ${index + 1}`} className="trip-photo" />
                  ))}
                </div>
                <p className="trip-detail">
                  <FontAwesomeIcon icon={faLocationDot} className="icon" /> {trip.location}
                </p>
                <p className="trip-detail">
                  <FontAwesomeIcon icon={faCalendar} className="icon" /> {trip.days} Days
                </p>
                <p className="trip-detail">
                  <FontAwesomeIcon icon={faClipboardList} className="icon" /> {trip.schedule}
                </p>
              </div>
              <div className="trip-action">
                <button onClick={handleJoinClick} className="join-button btn btn-primary btn-neat">
                  <FontAwesomeIcon icon={faMapMarkedAlt} className="icon" /> Join with Us
                </button>
              </div>
            </div>
          ))}
        </div>
        <br/><br/><br/><br/>
        
        </div>
        <ImageGallery trips={trips} /> <br/><br/><br/><br/>
      </div>
  
  );
}
