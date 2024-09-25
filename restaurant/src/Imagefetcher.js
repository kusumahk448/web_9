// src/ImageGallery.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Imagefetcher = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images using Axios
    axios
      .get('https://api.unsplash.com/photos?client_id=sAz3j5OZRpsy1wHH0HGGT2iJfYk7z6JmKO7eIbYrXS4')
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <div key={image.id} style={{ margin: '10px' }}>
            <img
              src={'https://images.unsplash.com/photo-1551218808-94e220e084d2'}
              alt={image.description}
              style={{ width: '200px', height: '200px', objectFit: 'cover' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imagefetcher;
