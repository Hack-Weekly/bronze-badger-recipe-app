import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  const nextImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  return (
    <div className="relative">
      <img className="w-full" src={images[currentImage]} alt="Carousel" />
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-opacity-0 text-primary-buttonText  px-2 py-1 rounded-full opacity-70 text-3xl"
        onClick={prevImage}
      >
        &larr;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-0 text-primary-buttonText px-2 py-1 rounded-full opacity-70 text-3xl"
        onClick={nextImage}
      >
        &rarr;
      </button>
      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`transition-all h-3 w-3 mx-1 rounded-full ${
                index === currentImage
                  ? "bg-primary-color p-2"
                  : "bg-secondary-color bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;