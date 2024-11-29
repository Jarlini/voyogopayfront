import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { Alert, Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Heart, MapPin, Calendar, Users } from 'lucide-react';
import axios from 'axios'; 
import adImage from '../component/photos/blog.jpg'; 
import travelTipsImage from '../component/photos/blog2.jpg';
import packingGuideImage from '../component/photos/blog3.jpg';
import teaImage from '../component/photos/blog3.jpg';
import addImage from '../component/photos/sar.jpg'; 
import travellTipsImage from '../component/photos/blog9jpg';
import packinggGuideImage from '../component/photos/blog4.jpg';

export default function CutePaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart = [], totalAmount = 0 } = location.state || {};
  const [showPayPal, setShowPayPal] = useState(false);
  const [showBookingForm, setShowBookingForm] = useState(true);
  const [bookingData, setBookingData] = useState({
    numberOfPassengers: 1,
    passengers: [{ name: '', age: '', email: '' }],
    address: '',
    phone: '',
    Packages: '',
  });
  const [paymentStatus, setPaymentStatus] = useState({ success: null, message: '' });

  const handleBookingFormChange = (e, index) => {
    const { name, value } = e.target;
    if (name.startsWith('passenger-')) {
      const passengers = [...bookingData.passengers];
      passengers[index][name.split('-')[1]] = value;
      setBookingData({ ...bookingData, passengers });
    } else {
      setBookingData({ ...bookingData, [name]: value });
    }
  };

  const handlePassengerCountChange = (e) => {
    const count = parseInt(e.target.value, 10);
    const passengers = Array.from({ length: count }, () => ({ name: '', age: '', email: '' }));
    setBookingData({ ...bookingData, numberOfPassengers: count, passengers });
  };

  const handlePackageFormChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert the Packages field to an array
      const packagesArray = bookingData.Packages.split(',').map(pkg => pkg.trim());
  
      // Create the payload with the array of packages
      const payload = { ...bookingData, cart, totalAmount, packages: packagesArray };
  
      console.log('Booking Data:', payload);
  
      const response = await axios.post('http://localhost:5000/api/bookings/booking', payload);
      console.log('Booking saved:', response.data);
  
      alert('Booking successful!');
      setShowBookingForm(false);
      setShowPayPal(true);
    } catch (error) {
      console.error('Error saving booking:', error.response || error.message);
      alert('Failed to save booking. Please try again.');
    }
  };
  
  return (
    <Container className="py-5">
      <h1 className="text-center mb-5 text-primary">Your Magical Journey Awaits!</h1>
      <Row className="g-4">
        <Col lg={6}>
          <Card className="border-0 shadow-sm rounded-lg overflow-hidden">
            <Card.Body className="p-4">
              <h2 className="mb-4 text-center">
                <Heart className="text-danger me-2" />
                Your Chosen Adventures
              </h2>
              {cart.length === 0 ? (
                <p className="text-center">Your cart is empty. Let's add some magic!</p>
              ) : (
                <ul className="list-unstyled">
                  {cart.map((pkg, index) => (
                    <li key={pkg._id} className="mb-3 d-flex align-items-center">
                      <img
                        src={adImage} // Update with the correct image
                        alt={pkg.name}
                        className="me-3 rounded-circle"
                        width={50}
                        height={50}
                      />
                      <div>
                        <h5 className="mb-0">{pkg.name}</h5>
                        <p className="mb-0 text-muted">Rs. {pkg.price.toLocaleString()}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              <h3 className="mt-4 text-center">Total: Rs. {totalAmount.toLocaleString()}</h3>
              <p className="text-center text-muted mt-3">
                Thank you for choosing us! Your booking will create unforgettable memories.
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6}>
          {showBookingForm && (
            <Card className="border-0 shadow-sm rounded-lg overflow-hidden">
              <Card.Body className="p-4">
                <h2 className="mb-4 text-center">
                  <Calendar className="text-primary me-2" />
                  Book Your Adventure
                </h2>
                <Form onSubmit={handleBookingSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Number of Adventurers</Form.Label>
                    <Form.Control
                      type="number"
                      min="1"
                      name="numberOfPassengers"
                      value={bookingData.numberOfPassengers}
                      onChange={handlePassengerCountChange}
                    />
                  </Form.Group>

                  {bookingData.passengers.map((passenger, index) => (
                    <Card key={index} className="mb-4 border-0 bg-light">
                      <Card.Body>
                        <h4 className="mb-3">
                          <Users className="text-info me-2" />
                          Adventurer {index + 1}
                        </h4>
                        <Form.Group className="mb-3">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            name={`passenger-name-${index}`}
                            value={passenger.name}
                            onChange={(e) => handleBookingFormChange(e, index)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Age</Form.Label>
                          <Form.Control
                            type="number"
                            name={`passenger-age-${index}`}
                            value={passenger.age}
                            onChange={(e) => handleBookingFormChange(e, index)}
                            required
                          />
                        </Form.Group>
                        <Form.Group className="mb-3">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            name={`passenger-email-${index}`}
                            value={passenger.email}
                            onChange={(e) => handleBookingFormChange(e, index)}
                            required
                          />
                        </Form.Group>
                      </Card.Body>
                    </Card>
                  ))}

                  <Form.Group className="mb-3">
                    <Form.Label>
                      <MapPin className="text-success me-2" />
                      Address
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={bookingData.address}
                      onChange={handleBookingFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleBookingFormChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Enter Package Names (separated by commas)</Form.Label>
                    <Form.Control
                      type="text"
                      name="Packages"
                      value={bookingData.Packages}
                      onChange={handlePackageFormChange}
                      required
                    />
                  </Form.Group>

                  <Button type="submit" className="w-100 btn-teal">
                    Start Your Journey
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          )}


          {showPayPal && (
            <Card className="border-0 shadow-sm rounded-lg overflow-hidden">
              <Card.Body className="p-4">
                <h2 className="mb-4 text-center">Complete Your Booking</h2>
                <PayPalScriptProvider options={{ "client-id": "AVXQufnDMyJ42nUDkY_CqVvY_kp4YaMi0_t04V5d-9W4gp9mj_1S8_fi9fcpvZycoY3judqAKGCMgHSu" }}>
              <PayPalButtons
                style={{ layout: 'vertical', color: 'gold', shape: 'rect' }}
                createOrder={(data, actions) => {
                  return actions.order.create({
                        purchase_units: [
                          {
                      amount: {
                              value: totalAmount.toFixed(2),
                      },
                          },
                        ],
                  });
                }}
                    onApprove={async (data, actions) => {
                      const details = await actions.order.capture();
                      setPaymentStatus({ success: true, message: 'Payment successful!' });
                      alert('Transaction completed by ' + details.payer.name.given_name);
                      navigate('/thankyou');
                }}
                onError={(err) => {
                      console.error('PayPal Checkout onError:', err);
                      setPaymentStatus({ success: false, message: 'Payment failed. Please try again.' });
                }}
              />
            </PayPalScriptProvider>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>

      {paymentStatus.success !== null && (
        <Alert variant={paymentStatus.success ? 'success' : 'danger'} className="mt-4">
          {paymentStatus.message}
        </Alert>
      )}

<section className="mt-5  box-shadow- 2px 2px 2px orange">
  <h2 className="text-center mb-4" style={{ color: '#ff6f00' }}>
    Travel Tips for Your Adventure
  </h2>
  <Row className="g-4">
    {[
      {
        title: "Top 5 Pilgrimage Destinations",
        description: "Discover the most popular pilgrimage sites you should visit this year.",
        image: adImage,
      },
      {
        title: "Travel Tips for First-Time Pilgrims",
        description: "Get essential tips and advice for your first pilgrimage journey.",
        image: travelTipsImage,
      },
      {
        title: "Essential Packing Guide",
        description: "Learn what to pack for a comfortable and safe pilgrimage experience.",
        image: packinggGuideImage,
      },
      {
        title: "Budget-Friendly Pilgrimage Tips",
        description: "Explore tips to manage your expenses during pilgrimage trips.",
        image: addImage,
      },
      {
        title: "Must-Have Apps for Travelers",
        description: "Check out the best apps to assist you on your pilgrimage journey.",
        image: travellTipsImage,
      },
      {
        title: "Best Time to Visit Top Sites",
        description: "Find out the ideal times of the year to visit popular pilgrimage spots.",
        image: packingGuideImage,
      },
    ].map((blog, index) => (
      <Col md={4} key={index}>
       <Card
  className="h-100 border-0 rounded-lg overflow-hidden"
  style={{
    boxShadow: '5px 5px 10px rgba(255, 111, 0, 0.5)', // Orange shadow
    borderRadius: '10px', // Added border-radius for rounded corners
    textAlign: 'center', // Align text to the center
  }}
>
<Card.Img 
  variant="top" 
  src={blog.image} 
  alt={blog.title} 
  style={{ height: '300px', objectFit: 'cover' }} 
/>

          <Card.Body className="d-flex flex-column ">
            <Card.Title style={{ color: '#ff6f00' }}>{blog.title}</Card.Title>
            <Card.Text style={{ color: '#004d40' }}>{blog.description}</Card.Text>
         
          
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row><br/><br/><br/>
</section>

    </Container>
  );
}
