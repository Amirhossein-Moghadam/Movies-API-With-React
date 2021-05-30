import { useEffect, useState } from "react";
import { Modal, Button, Badge } from "react-bootstrap";

const ModalCreator = ({ movieName, description, showModal }) => {
  const [show, setShow] = useState(showModal);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        // onClick={()=>onClick(show)}
      >
        <Modal.Header closeButton>
          <Modal.Title>{movieName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-justify">{description}</Modal.Body>
      </Modal>
    </>
  );
};

export default ModalCreator;
