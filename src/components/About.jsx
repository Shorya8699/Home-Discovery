import { FaHome, FaHandshake, FaChartLine } from 'react-icons/fa'

const About = () => {
  const features = [
    {
      icon: <FaHome className="text-4xl text-primary-500" />,
      title: "Quality Properties",
      description: "We meticulously select and verify all properties to ensure they meet our high standards."
    },
    {
      icon: <FaHandshake className="text-4xl text-primary-500" />,
      title: "Expert Guidance",
      description: "Our team of professionals provides personalized assistance throughout your property journey."
    },
    {
      icon: <FaChartLine className="text-4xl text-primary-500" />,
      title: "Investment Value",
      description: "We help you find properties with strong potential for appreciation and return on investment."
    }
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-primary-600">About Home Discovery</h2>
          <p className="max-w-3xl mx-auto text-lg text-neutral-600">
            With over 10 years of experience in the real estate market, we help our clients find their perfect property through personalized service and market expertise.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="mb-6 text-2xl font-bold">Your Trusted Property Partner</h3>
            <p className="mb-4 text-neutral-700">
              Home Discovery was founded with a simple mission: to make property discovery an enjoyable and rewarding experience. We understand that finding the right property is more than just a transaction—it's about finding a place where memories will be made.
            </p>
            <p className="mb-6 text-neutral-700">
              Our team combines deep market knowledge with personalized service to help you navigate the complexities of real estate with confidence and ease.
            </p>
            <a href="#contact" className="btn btn-primary">Learn More</a>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" 
              alt="Team of real estate professionals" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-secondary-100 p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-primary-600 font-serif font-bold text-lg">
                "Our mission is to help you find not just a property, but a place to call home."
              </p>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-secondary-50 p-6 rounded-lg text-center">
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;