import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      id="home"
      style={{height:"80vh"}}
      className="relative min-h-[600px] flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg"
          alt="Modern home exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900 opacity-50"></div>
      </div>

      <motion.div
        className="container-custom relative z-10 text-white"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-2xl">
          <motion.h1
            className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            variants={itemVariants}
          >
            Discover Your Dream Home
          </motion.h1>
          <motion.p
            className="mb-8 text-lg md:text-xl text-white/90"
            variants={itemVariants}
          >
            We help you find the perfect property that matches your lifestyle
            and aspirations.
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center"
            variants={itemVariants}
          >
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-4 rounded-md"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl md:text-3xl font-bold">100+</p>
              <p className="text-sm uppercase tracking-wider">Properties</p>
            </motion.div>
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-4 rounded-md"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl md:text-3xl font-bold">5+</p>
              <p className="text-sm uppercase tracking-wider">Cities</p>
            </motion.div>
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-4 rounded-md hidden md:block"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-2xl md:text-3xl font-bold">50+</p>
              <p className="text-sm uppercase tracking-wider">Happy Clients</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
