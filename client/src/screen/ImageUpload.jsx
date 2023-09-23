import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);
    }
  };

  return (
    <>
        <Container>
        <h1 className='mb-3' style={{marginTop:'85px'}}>Upload the image</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Upload</button>
      {selectedImage && (
        <div>
          <h2 className='mb-2'>Selected Image:</h2>
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" width="130" />
        </div>
      )}
      </Container>
    </>
    
  );
};

export default ImageUploader;

