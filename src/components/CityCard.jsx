import { motion } from "framer-motion";

const CityCard = ({ city }) => {
  const { name, imageUrl, propertyCount } = city;

  return (
    <motion.div
      className="flex-shrink-0 w-60 relative rounded-lg overflow-hidden group h-72"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <motion.img
        src={imageUrl}
        alt={name}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <h3 className="text-white text-xl font-bold mb-1">{name}</h3>
        <p className="text-white/80 text-sm">{propertyCount} Properties</p>
      </div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-primary-600/20"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      ></motion.div>
    </motion.div>
  );
};

export default CityCard;
