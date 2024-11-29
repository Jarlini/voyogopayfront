import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import '../component/MY.css';

export default function ImageGallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const images = [
    {
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=1200&h=800",
      location: "Varanasi, India",
      description: "Sacred ghats along the Ganges River",
    },
    {
      url: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?auto=format&fit=crop&q=80&w=1200&h=800",
      location: "Jerusalem, Israel",
      description: "The Western Wall at sunset",
    },
    {
      url: "https://images.unsplash.com/photo-1528702748617-c64d49f918af?auto=format&fit=crop&q=80&w=1200&h=800",
      location: "Mecca, Saudi Arabia",
      description: "The Grand Mosque during Hajj",
    },
    {
      url: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=1200&h=800",
      location: "Bodh Gaya, India",
      description: "Mahabodhi Temple, site of Buddha's enlightenment",
    },
    {
      url: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?auto=format&fit=crop&q=80&w=1200&h=800",
      location: "Lourdes, France",
      description: "The Sanctuary of Our Lady of Lourdes",
    },
  ];

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageSize({ width: img.width, height: img.height });
    };
    img.src = images[currentImage].url;
  }, [currentImage]);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-light py-5">
      <div className="container">
        <h2 className="text-center  mb-4"  style={{ color: 'orange' , fontSize: "3.5rem" }}>Sacred Journeys...</h2><br/><br/><br/>
        <div className="position-relative">
          <div className="mb-4">
            <img
              src={images[currentImage].url}
              alt={images[currentImage].description}
              className="img-fluid rounded-lg shadow-sm w-100 h-auto"
            />
          </div>
          <button
            onClick={prevImage}
            className="position-absolute top-50 start-0 translate-middle-y bg-primary text-white border-0 rounded-circle p-2"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextImage}
            className="position-absolute top-50 end-0 translate-middle-y bg-primary text-white border-0 rounded-circle p-2"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="text-center mt-3">
          <h3 className="text-orange mb-2">{images[currentImage].location}</h3>
          <p className="text-muted">{images[currentImage].description}</p>
          <p className="text-secondary">For you</p>
        </div>
        
      </div>

      {/* <div className="container my-5" >
        <div className="mt-5 bg-white rounded-lg p-4 shadow-lg border-teal border">
        <h1 
  className="text-center animated-heading mb-3" 
  style={{ fontSize: "5.5rem" }}>
  Begin Your Sacred Adventure
</h1>
 
        </div>
      </div> */}
    </div>
  );
}
