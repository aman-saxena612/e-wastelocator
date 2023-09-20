import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'

const Card2 = ({ title, description, image, shortDescription }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='col-12 col-md-4 py-2 px-3'>
            <Card style={{ height: '25rem', marginTop: '13px' }}>
                <Card.Img
                    variant="top"
                    src={image}
                    style={{ height: "200px" }}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {shortDescription}
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>For more info
                    </Button>
                </Card.Body>
            </Card>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Card.Img
                            variant="top"
                            src={image}
                            style={{ height: "200px" }} />
                    </div>
                    <div>
                        <h6>
                            {description}
                        </h6> </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default Card2
