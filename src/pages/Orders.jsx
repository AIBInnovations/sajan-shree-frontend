import React, { useState } from 'react';
import orders from './orders.json'; // Ensure this path is correct

const OrderCard = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false); // State to handle dropdown visibility

  const toggleDetails = () => {
    setIsOpen(!isOpen); // Toggle the state to show/hide additional details
  };

  return (
    <div style={{
      backgroundColor: '#f9f9f9',
      borderRadius: '10px',
      padding: '20px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.10)',
      marginBottom: '15px',
      transition: 'box-shadow 0.3s ease-in-out'
    }}>
      <div onClick={toggleDetails} style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <h2 style={{ fontWeight: '600', fontSize: '18px', marginRight: '20px' }}>{order.customerName}</h2>
          <p style={{ fontSize: '16px', color: '#555' }}>{order.selectedProduct}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="material-icons" style={{ color: '#007BFF', fontSize: '24px' }}>edit</span>
          <span className="material-icons" style={{ color: '#DC3545', fontSize: '24px' }}>delete</span>
        </div>
      </div>
      {isOpen && (
        <div style={{
          marginTop: '10px',
          backgroundColor: '#fff',
          padding: '10px 20px',
          borderRadius: '8px',
          boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)',
          animation: 'slide-down 0.3s ease-out forwards'
        }}>
          <p><strong>Mobile Number:</strong> {order.mobileNumber}</p>
          <p><strong>Collar Type:</strong> {order.collarType}</p>
          <p><strong>Cuff Type:</strong> {order.cuffType}</p>
          <p><strong>Neck Shape Type:</strong> {order.neckShapeType}</p>
          <p><strong>Order Description:</strong> {order.orderDescription}</p>
          <p><strong>Delivery Date:</strong> {order.deliveryDate}</p>
        </div>
      )}
    </div>
  );
};

const Orders = () => {
  return (
    <div style={{ padding: '20px', backgroundColor: '#fff', maxWidth: '1000px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Orders</h1>
      {orders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default Orders;
