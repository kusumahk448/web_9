// src/ImageFetcher.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Imagefetcher = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://cataas.com/cat');
        setImages(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        images.map((image, index) => (
          <img key={index} src={image.url} alt={image.alt} />
        ))
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default Imagefetcher;