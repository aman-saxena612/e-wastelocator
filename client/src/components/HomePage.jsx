// import React from 'react';
// import { Image } from 'react-bootstrap';

// const HomePage = () => {
//   return (
//     <Image
//       src="Images/bg_1.jpg"
//       fluid
//       className="d-none d-sm-block" // Use Bootstrap classes to hide on xs screens
//       style={{
//         width: '100%',
//         height: '77vh',
//       }}
//     />
//   );
// };

// export default HomePage;


import React from 'react';
import { Container } from 'react-bootstrap';
import Benefits from './Benefits';
import SecondPage from './SecondPage';

const HomePage = () => {
  return (
    <>
      <Container
        // fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: 'url("Images/bg_1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100%',
          width: '100vw',
          maxWidth: '100vw'
          // backgroundColor:'red'
          // minHeight: '75.5vh',
          // overflow:"hidden"
        }}
      >
        <div className="text-left  w-100">
          <h1 className='text-light'>Welcome to e-Waste Locator</h1>

          <h4>Reduce, reuse, and recycle your electronics with our e-waste locator.</h4>
          <h5>Your e-waste, our locator - a perfect match for a greener planet.</h5>
        </div>
      </Container>
      <div className='' style={{maxWidth:'100vw'}}>
        <Benefits />
      </div>
      
    </>
  );
};

export default HomePage;
