import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function Hide() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" onClick={handleShow}>
        
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>s</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <button>funk mode</button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}