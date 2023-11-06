

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const WeatherModal = ({ isOpen, onRequestClose, data }) => {
  if (!data) {
    // Handle the case when data is null or undefined
    return (
      <Modal show={isOpen} onHide={onRequestClose}>
        <Modal.Body>Loading...</Modal.Body>
      </Modal>
    );
  }

  return (
    <Modal show={isOpen} onHide={onRequestClose}>
      <Modal.Header closeButton>
        <Modal.Title>{data.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Temperature: {data.main.temp}°C</p>
        <p>
          Weather: {data.weather[0].main}, {data.weather[0].description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onRequestClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WeatherModal;
