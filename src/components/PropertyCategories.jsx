import { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import PropertyCategoryCard from './PropertyCategoryCard'

const PropertyCategories = () => {
  const scrollRef = useRef(null);
  
  const categories = [
    {
      title: "Residential Plots",
      description: "Prime locations for building your dream home",
      imageUrl: "https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg",
      count: 45
    },
    {
      title: "Commercial Land",
      description: "Strategic locations for business development",
      imageUrl: "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg",
      count: 28
    },
    {
      title: "Apartments",
      description: "Modern living spaces with amenities",
      imageUrl: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg",
      count: 120
    },
    {
      title: "Villas",
      description: "Luxury homes for discerning buyers",
      imageUrl: "https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg",
      count: 35
    },
    {
      title: "Farmhouses",
      description: "Peaceful retreats away from the city",
      imageUrl: "https://images.pexels.com/photos/463734/pexels-photo-463734.jpeg",
      count: 18
    },
    {
      title: "Office Spaces",
      description: "Professional environments for business growth",
      imageUrl: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg",
      count: 42
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
    <section id="properties" className="section bg-secondary-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="mb-2 text-primary-600">We Deal In</h2>
            <p className="text-neutral-600 max-w-2xl">
              Explore our diverse range of properties to find what suits your needs perfectly.
            </p>
          </div>
          
          <div className="hidden md:flex space-x-4">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white text-primary-600 hover:bg-primary-50 border border-primary-200"
              aria-label="Scroll left"
            >
              <FaArrowLeft />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white text-primary-600 hover:bg-primary-50 border border-primary-200"
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
          {categories.map((category, index) => (
            <PropertyCategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyCategories;