import { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import CityCard from './CityCard'

const CitiesSection = () => {
  const scrollRef = useRef(null);
  
  const cities = [
    {
      name: "New York",
      imageUrl: "https://images.pexels.com/photos/802024/pexels-photo-802024.jpeg",
      propertyCount: 78
    },
    {
      name: "Los Angeles",
      imageUrl: "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg",
      propertyCount: 64
    },
    {
      name: "Chicago",
      imageUrl: "https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg",
      propertyCount: 42
    },
    {
      name: "Miami",
      imageUrl: "https://images.pexels.com/photos/2525903/pexels-photo-2525903.jpeg",
      propertyCount: 51
    },
    {
      name: "San Francisco",
      imageUrl: "https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg",
      propertyCount: 37
    },
    {
      name: "Seattle",
      imageUrl: "https://images.pexels.com/photos/2559749/pexels-photo-2559749.jpeg",
      propertyCount: 29
    }
  ];
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="cities" className="section bg-white">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="mb-2 text-primary-600">Cities We Deal In</h2>
            <p className="text-neutral-600 max-w-2xl">
              Discover properties in these thriving cities with excellent investment potential.
            </p>
          </div>
          
          <div className="hidden md:flex space-x-4">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-secondary-50 text-primary-600 hover:bg-primary-50 border border-primary-200"
              aria-label="Scroll left"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-secondary-50 text-primary-600 hover:bg-primary-50 border border-primary-200"
              aria-label="Scroll right"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
        
        <div 
          ref={scrollRef}
          className="scroll-container space-x-4 -mx-4 px-4"
        >
          {cities.map((city, index) => (
            <CityCard key={index} city={city} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesSection;