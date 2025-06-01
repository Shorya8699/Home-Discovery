import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import Logo from './Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { label: "Home", url: "#home" },
    { label: "About Us", url: "#about" },
    { label: "Properties", url: "#properties" },
    { label: "Cities", url: "#cities" },
    { label: "Contact", url: "#contact" }
  ];
  
  const propertyTypes = [
    { label: "Residential Plots", url: "#" },
    { label: "Commercial Land", url: "#" },
    { label: "Apartments", url: "#" },
    { label: "Villas", url: "#" },
    { label: "Farmhouses", url: "#" },
    { label: "Office Spaces", url: "#" }
  ];
  
  const socialLinks = [
    { icon: <FaFacebook />, url: "#", label: "Facebook" },
    { icon: <FaTwitter />, url: "#", label: "Twitter" },
    { icon: <FaInstagram />, url: "#", label: "Instagram" },
    { icon: <FaLinkedin />, url: "#", label: "LinkedIn" },
    { icon: <FaYoutube />, url: "#", label: "YouTube" }
  ];

  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-neutral-300 mb-4">
              Helping you find the perfect property that matches your lifestyle and aspirations since 2015.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url}
                  className="text-neutral-400 hover:text-primary-400 transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Property Types */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Property Types</h4>
            <ul className="space-y-2">
              {propertyTypes.map((type, index) => (
                <li key={index}>
                  <a 
                    href={type.url} 
                    className="text-neutral-300 hover:text-primary-400 transition-colors duration-300"
                  >
                    {type.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Newsletter</h4>
            <p className="text-neutral-300 mb-4">
              Subscribe to our newsletter for the latest property updates and offers.
            </p>
            <form className="mb-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 w-full rounded-l-md text-neutral-800 focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-r-md transition-colors duration-300"
                >
                  Join
                </button>
              </div>
            </form>
            <p className="text-neutral-400 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 pt-8 mt-8 text-center text-neutral-400">
          <p>© {currentYear} Home Discovery. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4 text-sm">
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-primary-400 transition-colors duration-300">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;