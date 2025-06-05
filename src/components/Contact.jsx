import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send('service_sojn9bk', 'template_ah5zjxh', formData, 'r6A60zFa-vmgoXkli')
    .then((response) => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, (err) => {
      alert('Failed to send message. Please try again.');
    });
};
  
  const contactInfo = [
    {
      icon: <FaPhone className="text-primary-500" />,
      label: "Phone",
      value: "+91 6284-618-710",
      link: "tel:+916284618710"
    },
    {
      icon: <FaEnvelope className="text-primary-500" />,
      label: "Email",
      value: "contact@homediscovery.com",
      // link: "mailto:contact@homediscovery.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-primary-500" />,
      label: "Address",
      value: "Gillco Valley, Sector-115 Landran Road, Kharar 140301",
      // link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="section bg-secondary-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="mb-2 text-primary-600">Contact Us</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Have questions or ready to start your property journey? Reach out to our team for personalized assistance.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-neutral-700 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                  
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-neutral-700 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-neutral-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-neutral-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-neutral-600 mb-6">
              Our team of property experts is ready to assist you with any questions you may have about our listings or services.
            </p>
            
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a 
                  key={index} 
                  href={item.link}
                  className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="p-2 bg-primary-50 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-neutral-800">{item.label}</h4>
                    <p className="text-neutral-600">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-primary-500 text-white rounded-lg">
              <h4 className="font-bold text-xl mb-2">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday - Sunday:</span>
                  <span>10:00 AM - 8:00 PM</span>
                </li>
                {/* <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;