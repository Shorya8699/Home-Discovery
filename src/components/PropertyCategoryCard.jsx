import { motion } from 'framer-motion';

const PropertyCategoryCard = ({ category }) => {
  const { title, description, imageUrl, count } = category;
  
  return (
    <motion.div 
      className="flex-shrink-0 w-72 card group"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48 overflow-hidden">
        <motion.img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute bottom-0 left-0 bg-primary-500 text-white px-4 py-1">
          {count} Properties
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-neutral-600 mb-4">{description}</p>
        <motion.a 
          href="#properties" 
          className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
          whileHover={{ x: 4 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          View Properties
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default PropertyCategoryCard;