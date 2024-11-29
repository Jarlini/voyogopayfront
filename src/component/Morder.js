'use client';

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Badge, Pagination, Spinner, Alert } from 'react-bootstrap';
import api from './Api'; // Adjust the path as necessary

export default function MOrder() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // For grouping the orders
  const [groupedOrders, setGroupedOrders] = useState({
    Madhu: [],
    Kathirkamam: [],
    Kandy: [],
    Others: [],
  });

  // Pagination for each package type
  const [pagination, setPagination] = useState({
    Madhu: { currentPage: 1, ordersPerPage: 4 },
    Kathirkamam: { currentPage: 1, ordersPerPage: 4 },
    Kandy: { currentPage: 1, ordersPerPage: 4 },
    Others: { currentPage: 1, ordersPerPage: 4 },
  });

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get('http://localhost:5000/api/bookings/orders'); // Adjust endpoint as necessary
        const ordersData = response.data;
        
        // Group orders by package type
        const grouped = {
          Madhu: [],
          Kathirkamam: [],
          Kandy: [],
          Others: [],
        };

        ordersData.forEach((order) => {
          const { packages } = order;
          if (packages?.includes('madhu')) grouped.Madhu.push(order);
          else if (packages?.includes('kathirkamam')) grouped.Kathirkamam.push(order);
          else if (packages?.includes('kandy')) grouped.Kandy.push(order);
          else grouped.Others.push(order);
        });

        setOrders(ordersData);
        setGroupedOrders(grouped);
      } catch (err) {
        setError(err.message || 'An error occurred while fetching orders.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  // Pagination Logic
  const paginate = (packageType, pageNumber) => {
    setPagination({
      ...pagination,
      [packageType]: {
        ...pagination[packageType],
        currentPage: pageNumber,
      },
    });
  };

  // Get the orders for each package type based on the pagination
  const getPaginatedOrders = (packageType) => {
    const { currentPage, ordersPerPage } = pagination[packageType];
    const startIndex = (currentPage - 1) * ordersPerPage;
    const endIndex = startIndex + ordersPerPage;
    return groupedOrders[packageType].slice(startIndex, endIndex);
  };

  // Loading State
  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh', marginBottom: '200px' }}>
 <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  // Error State
  if (error) {
    return (
      <Container className="mt-5">
        <Alert variant="danger">Error: {error}</Alert>
      </Container>
    );
  }

  return (
    <Container className="my-5"><br /><br /><br /><br />
      <h2 className="text-center mb-4" style={{ color: 'orange' }}>Manage Orders</h2>

      {/* Display grouped orders */}
      {Object.keys(groupedOrders).map((packageType) => (
        <div key={packageType}>
          <h4>{packageType} Orders</h4>
          {groupedOrders[packageType].length === 0 ? (
            <Alert variant="info">No orders found for {packageType}.</Alert>
          ) : (
            <>
              <Row xs={1} md={2} className="g-4">
                {getPaginatedOrders(packageType).map((order) => (
                  <Col key={order._id}>
                    <Card className="h-100 shadow-sm">
                      <Card.Body>
                        <Card.Title style={{ color: '#ff6f00' }}>Order ID: {order._id}</Card.Title>
                        <Card.Text>
                          <strong>Email:</strong> {order.email}<br />
                          <strong>Address:</strong> {order.address || 'Not provided'}<br />
                          <strong>Phone:</strong> {order.phone || 'Not provided'}<br />
                          <strong> Packages:</strong> {order.packages || 'Not provided'}<br />
                          <strong>Payment Method:</strong> {order.paymentMethod || 'Not specified'}<br />
                          <strong>Total Amount:</strong> {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(order.totalAmount)}
                        </Card.Text>

                        <h6 className="mt-3 mb-2" style={{ fontSize: '1.2rem' }}>Passengers:</h6>
                        {order.passengers?.length > 0 ? (
                          <ul className="list-unstyled">
                            {order.passengers.map((passenger, index) => (
                              <li key={index}>
                                <Badge bg="info" className="me-2">{passenger.name}</Badge>
                                Age: {passenger.age || 'N/A'}, Email: {passenger.email || 'N/A'}
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p>No passengers listed.</p>
                        ) }
                      </Card.Body>
                    </Card><br/><br/>
                  </Col>
                ))}
              </Row>

              {/* Pagination for each package type */}
              <div className="d-flex justify-content-center mt-4">
                <Pagination>
                  {[...Array(Math.ceil(groupedOrders[packageType].length / pagination[packageType].ordersPerPage))].map((_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === pagination[packageType].currentPage}
                      onClick={() => paginate(packageType, index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}<br/><br/>
                </Pagination>
              </div><br/><br/>
            </>
          )}
        </div>
      ))}
    </Container>
  );
}
