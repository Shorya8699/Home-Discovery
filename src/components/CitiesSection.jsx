import { useRef } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import CityCard from './CityCard'

const CitiesSection = () => {
  const scrollRef = useRef(null);
  
  const cities = [
    {
      name: "Kharar",
      imageUrl: "https://scontent.fixc4-5.fna.fbcdn.net/v/t39.30808-6/405867283_2902309799908735_3076314556333239981_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=2285d6&_nc_ohc=w8GQyXtYVaQQ7kNvwF5HJd-&_nc_oc=AdnLRbCGSqCqRrl_pX6k1MBxQ5f1GYIMqyBgYtEiZWm3cfbvwcPjbHJc8M1sXAJVCpH9QYgKIGyJNyKOXevrrYbM&_nc_zt=23&_nc_ht=scontent.fixc4-5.fna&_nc_gid=7jd8LzgpLUZ62ehnr6gylw&oh=00_AfLbs4kJLGfbWOv10xG5pPZn1_lPrwZyHYdTfmDK3JycHg&oe=6843B235",
      propertyCount: 24
    },
    {
      name: "Kurali Road",
      imageUrl: "https://imagecdn.99acres.com/media1/20592/1/411841882O-1737897919041.jpg",
      propertyCount: 20
    },
    {
      name: "Mohali",
      imageUrl: "https://homelandregalia.com/wp-content/uploads/2024/10/homeland-The-chanding-Mohali.webp",
      propertyCount: 15
    },
    {
      name: "Chandigarh",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Open_Hand_monument%2C_Chandigarh.jpg/1280px-Open_Hand_monument%2C_Chandigarh.jpg",
      propertyCount: 12
    },
    {
      name: "Zirakpur",
      imageUrl: "https://img500.exportersindia.com/product_images/bc-500/2023/12/12824833/trishla-city-4-bhk-flat-in-zirakpur-1701842236-7196306.jpeg",
      propertyCount: 10
    },
    
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