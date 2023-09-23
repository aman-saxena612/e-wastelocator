import { Card, Button, Col, Row, Container, Modal } from 'react-bootstrap'
import React, { useState } from 'react'
import Card1 from './Card1';
import image1 from '../Images/img11.jpg'
import image2 from '../Images/img12.jpeg'
import image3 from '../Images/img13.jpg'

const data = [
  {
    title: 'Resource Conservation',
   shortDescription: ' Recycling e-waste allows for the recovery of valuable resources, including metals like gold, silver, copper, and rare earth elements.',
    description: ` Electronic devices contain precious metals such as gold, 
    silver, and palladium, which are used in various components 
    like circuit boards and connectors. Recycling e-waste allows
     for the extraction and reuse of these valuable metals, 
     reducing the need for mining and the associated environmental impact.
     E-waste also contains base metals like copper, aluminum, and iron, 
     which are used in wiring, heat sinks, and structural components.
      Recycling these materials conserves natural resources and reduces 
      the energy required for mining and refining.`,
    image: image1
  },
  {
    title: 'Energy Savings',
    shortDescription: `     Reusing materials from old electronics in new products conserves energy and reduces greenhouse gas emissions. `,
    description: ` The mining and extraction of raw materials, including metals and minerals
    used in electronic devices, can be highly energy-intensive processes. By 
    recycling e-waste and recovering these materials, the need for new mining 
    and extraction is reduced, thereby conserving the energy that would have 
    been consumed in these processes.The production of new electronic devices, 
    such as smartphones and laptops, involves energy-intensive manufacturing processes,
     including smelting, refining, and assembly. When recycled materials are used in 
     manufacturing, less energy is required compared to using virgin resources.`,
    image: image2
  },
  {
    title: 'Job Creation',
    shortDescription: ` The e-waste recycling industry creates jobs in various sectors, including collection, transportation, dismantling, and refurbishment.`,
    
    description: `   E-waste recycling involves the collection and transportation of electronic devices 
    from various sources, including households, businesses, and government agencies. Jobs
     are created for collection crews, drivers, and logistics coordinators who manage the 
     transportation of e-waste to recycling facilities.Recycling facilities require workers
      to sort and dismantle electronic devices. These employees are responsible for 
      separating different components, such as metals, plastics, and circuit boards. They also 
      assess the condition of devices for potential refurbishment or resale.`,
    image: image3
  },
]

const Benefits = () => {
  return (
    <div className='' style={{ flex: 1, marginTop:'75px' }}>
      <Container className='col-12 d-flex flex-wrap h-100'>
          {
            data?.map((item, index) => (
              <Card1
                title={item?.title}
                description={item?.description}
                shortDescription={item?.shortDescription?.slice(0,100)+'...'}
                image={item?.image}
                key={index}
              />
            ))
          }
      </Container>
    </div>
  )
}

export default Benefits








// import {Card, Button, Col, Row, Container, Modal} from 'react-bootstrap'
// import React,{useState} from 'react'

// const Benefits = () => {
//   const [show, setShow] = useState(false);
//   const [show1, setShow1] = useState(false);
//   const [show2, setShow2] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   return (
//     <div>
//       <Container>
//         <Row>
//           <Col>
//        <Card style={{ width: '18rem', height: '26rem', marginTop:'13px'}}>
//       <Card.Img 
//       variant="top"
//        src="Images/img11.jpg"
//        style={{height:"200px"}}
//         />
//       <Card.Body>
//         <Card.Title>Resource Conservation</Card.Title>
//         <Card.Text>
//         Recycling e-waste allows for the recovery of valuable resources, including metals like gold, silver, copper, and rare earth elements.
//         </Card.Text>
//         <Button variant="primary" onClick={handleShow}>For more info
//         </Button>
//       </Card.Body>
//     </Card>
//     <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Resource Conservation</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div>
//           <Card.Img 
//           variant="top"
//        src="Images/img11.jpg"
//        style={{height:"200px"}}/>
//           </div>
//           <div>
//           <h6>
//           Electronic devices contain precious metals such as gold, 
//           silver, and palladium, which are used in various components 
//           like circuit boards and connectors. Recycling e-waste allows
//            for the extraction and reuse of these valuable metals, 
//            reducing the need for mining and the associated environmental impact.
//            E-waste also contains base metals like copper, aluminum, and iron, 
//            which are used in wiring, heat sinks, and structural components.
//             Recycling these materials conserves natural resources and reduces 
//             the energy required for mining and refining.
//           </h6> </div>
//           </Modal.Body>
//       </Modal>
//     </Col>

//     <Col>
//        <Card style={{ width: '18rem', height: '26rem', marginTop:'13px'}}>
//       <Card.Img variant="top" 
//        src="Images/img12.jpeg" 
//        style={{height:"200px"}}/> 
//       <Card.Body>
//         <Card.Title>Energy Savings</Card.Title>
//         <Card.Text>
//         Reusing materials from old electronics in new products conserves energy and reduces greenhouse gas emissions.
//         </Card.Text>
//         <Button variant="primary" onClick={()=>setShow1(true)}>For more info</Button>
//       </Card.Body>
//     </Card>
//     <Modal show={show1} onHide={()=>setShow1(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Energy Savings</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div>
//           <Card.Img 
//           variant="top"
//        src="Images/img12.jpeg"
//        style={{height:"200px"}}/>
//           </div>
//           <div>
//           <h6>
//           The mining and extraction of raw materials, including metals and minerals
//            used in electronic devices, can be highly energy-intensive processes. By 
//            recycling e-waste and recovering these materials, the need for new mining 
//            and extraction is reduced, thereby conserving the energy that would have 
//            been consumed in these processes.The production of new electronic devices, 
//            such as smartphones and laptops, involves energy-intensive manufacturing processes,
//             including smelting, refining, and assembly. When recycled materials are used in 
//             manufacturing, less energy is required compared to using virgin resources.
           
//           </h6> </div>
//           </Modal.Body>
//       </Modal>
//     </Col>
//     <Col>
//        <Card style={{ width: '18rem', height: '26rem', marginTop:'13px'}}>
//       <Card.Img variant="top" 
//       src="Images/img13.jpg" 
//       style={{height:"200px"}}/>
//       <Card.Body>
//         <Card.Title>Job Creation</Card.Title>
//         <Card.Text>
//         The e-waste recycling industry creates jobs in various sectors, including collection, transportation, dismantling, and refurbishment
//         </Card.Text>
//         <Button variant="primary" onClick={()=>setShow2(true)}>For more info</Button>
//       </Card.Body>
//     </Card>
//     <Modal show={show2} onHide={()=>setShow2(false)}>
//         <Modal.Header closeButton>
//           <Modal.Title>Job Creation</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <div>
//           <Card.Img 
//           variant="top"
//        src="Images/img13.jpg"
//        style={{height:"200px"}}/>
//           </div>
//           <div>
//           <h6>
//           E-waste recycling involves the collection and transportation of electronic devices 
//           from various sources, including households, businesses, and government agencies. Jobs
//            are created for collection crews, drivers, and logistics coordinators who manage the 
//            transportation of e-waste to recycling facilities.Recycling facilities require workers
//             to sort and dismantle electronic devices. These employees are responsible for 
//             separating different components, such as metals, plastics, and circuit boards. They also 
//             assess the condition of devices for potential refurbishment or resale.
//           </h6> </div>
//           </Modal.Body>
//       </Modal>
//     </Col>
//     </Row>
//     </Container>
//     </div>
//   )
// }

// export default Benefits
