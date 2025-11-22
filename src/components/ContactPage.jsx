import { useState, useEffect } from 'react';
import { MapPin, Clock, Phone, Mail, Send ,Menu,X } from 'lucide-react';
import { Link } from 'react-router-dom';
import contactImage1 from '../assets/atmosphere/atmosphere3.png';
import contactImage2 from '../assets/atmosphere/restaurant1.jpeg';
import contactImage3 from '../assets/food/chapostew.png';
import contactImage4 from '../assets/gallery/itenclub1.png';
import contactImage5 from '../assets/atmosphere/restaurant4.png';
import contactImage6 from '../assets/food/coffee.png';
import contactImage7 from '../assets/atmosphere/restaurant2.png';

function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: '',
    preferredContact: 'email',
    date: '',
    guests: ''
  });
  // Add mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Carousel state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of background images - replace these URLs with your actual image URLs
  const carouselImages = [
    contactImage1, 
    contactImage2, 
    contactImage3, 
    contactImage4, 
    contactImage5, 
    contactImage6, 
    contactImage7
    
  ];

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % carouselImages.length
      );
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      subject: 'General Inquiry',
      message: '',
      preferredContact: 'email',
      date: '',
      guests: ''
    });
  };

  const workingHours = [
    { day: 'Monday', hours: '8:00 AM - 9:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM - 9:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM - 9:00 PM' },
    { day: 'Thursday', hours: '8:00 AM - 9:00 PM' },
    { day: 'Friday', hours: '8:00 AM - 9:00 PM' },
    { day: 'Saturday', hours: '8:00 AM - 9:00 PM' },
    { day: 'Sunday', hours: '8:00 AM - 9:00 PM' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
       <nav className="fixed top-0 w-full bg-black shadow-lg z-50 border-b border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-yellow-500">Iten Club</Link>
            </div>
            
            {/* Desktop Menu - Hidden on mobile, visible on desktop */}
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-yellow-500 transition">Home</Link>
              <Link to="/menu" className="text-gray-300 hover:text-yellow-500 transition">Menu</Link>
              <Link to="/gallery" className="text-gray-300 hover:text-yellow-500 transition">Gallery</Link>
              <Link to="/contact" className="text-yellow-500">Contact</Link>
              <Link to="/reservation" className="text-gray-300 hover:text-yellow-500 transition">Reserve</Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-yellow-500"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black border-t border-yellow-600">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">Home</Link>
              <Link to="/menu" className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">Menu</Link>
              <Link to="/gallery" className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">Gallery</Link>
              <Link to="/contact" className="block w-full text-left px-3 py-2 text-yellow-500 hover:bg-gray-900">Contact</Link>
              <Link to="/reservation" className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">Reserve</Link>
            </div>
          </div>
        )}
      </nav>
     

      {/* Hero Section with Carousel Background */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Carousel Images */}
        <div className="absolute inset-0 z-0">
          {carouselImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                opacity: currentImageIndex === index ? 1 : 0,
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact <span className="text-yellow-500">Us</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with us for reservations, inquiries, or just to say hello
          </p>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentImageIndex === index 
                    ? 'w-8 bg-yellow-500' 
                    : 'w-2 bg-gray-400 hover:bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 border border-yellow-600 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-yellow-500 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Reservation">Reservation</option>
                    <option value="Catering">Catering</option>
                    <option value="Events">Events</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Preferred Contact Method</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center text-gray-300">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Email
                    </label>
                    <label className="flex items-center text-gray-300">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Phone
                    </label>
                    <label className="flex items-center text-gray-300">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="whatsapp"
                        checked={formData.preferredContact === 'whatsapp'}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      WhatsApp
                    </label>
                  </div>
                </div>

                {formData.subject === 'Reservation' && (
                  <>
                    <div>
                      <label className="block text-gray-300 mb-2 font-semibold">Preferred Date & Time</label>
                      <input
                        type="datetime-local"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 mb-2 font-semibold">Number of Guests</label>
                      <input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        min="1"
                        className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                        placeholder="Number of people"
                      />
                    </div>
                  </>
                )}

                <div>
                  <label className="block text-gray-300 mb-2 font-semibold">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-yellow-600 text-black rounded-lg hover:bg-yellow-500 transition text-lg font-semibold"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-gray-900 border border-yellow-600 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-yellow-500 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                      <p className="text-gray-300">Just outside High Altitude Training Centre</p>
                      <p className="text-gray-300">Iten, Kenya</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                      <p className="text-gray-300">+254 774700701</p>
                      <p className="text-gray-300 text-sm">WhatsApp available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                      <p className="text-gray-300">info@itenclub.co.ke</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Opening Hours</h3>
                      <p className="text-gray-300">Open Daily</p>
                      <p className="text-yellow-500 font-semibold">8:00 AM - 9:00 PM</p>
                      <p className="text-gray-400 text-sm mt-2">Coffee Bar open all day</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900 border border-yellow-600 rounded-lg p-4 text-center">
                  <p className="text-yellow-500 font-bold text-lg">Near HATC</p>
                  <p className="text-gray-300 text-sm">Easy to find</p>
                </div>
                <div className="bg-gray-900 border border-yellow-600 rounded-lg p-4 text-center">
                  <p className="text-yellow-500 font-bold text-lg">Parking</p>
                  <p className="text-gray-300 text-sm">Available</p>
                </div>
                <div className="bg-gray-900 border border-yellow-600 rounded-lg p-4 text-center">
                  <p className="text-yellow-500 font-bold text-lg">Wi-Fi</p>
                  <p className="text-gray-300 text-sm">Free</p>
                </div>
                <div className="bg-gray-900 border border-yellow-600 rounded-lg p-4 text-center">
                  <p className="text-yellow-500 font-bold text-lg">Outdoor Seating</p>
                  <p className="text-gray-300 text-sm">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Hours Section */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-yellow-500 mb-8 text-center">Working Hours</h2>
          <div className="max-w-3xl mx-auto bg-black border border-yellow-600 rounded-2xl p-8">
            <div className="space-y-4">
              {workingHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-800 last:border-b-0"
                >
                  <span className="text-white font-semibold text-lg">{schedule.day}</span>
                  <span className="text-yellow-500 font-bold">{schedule.hours}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-400 mt-6 text-sm">
              * Coffee Bar service available throughout all opening hours
            </p>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-yellow-500 mb-8 text-center">Find Us</h2>
          <div className="bg-gray-900 border border-yellow-600 rounded-2xl p-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.555890685969!2d35.49997307357595!3d0.657158163413649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17811720b2736ef9%3A0xe27fc5b426b60eb3!2sIten%20Club!5e0!3m2!1sen!2ske!4v1763562903143!5m2!1sen!2ske" 
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://maps.google.com/?q=Iten+Club+Kenya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-yellow-600 text-black rounded-lg hover:bg-yellow-500 transition text-lg font-semibold"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">Iten Club</h3>
              <p className="text-gray-400">Where European & Kenyan flavors meet in the heart of champions country.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-500">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-yellow-500 transition">Home</Link></li>
                <li><Link to="/menu" className="hover:text-yellow-500 transition">Menu</Link></li>
                <li><Link to="/gallery" className="hover:text-yellow-500 transition">Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
                <li><Link to="/reservation" className="hover:text-yellow-500 transition">Reserve</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-500">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Iten, Kenya</li>
                <li>Outside HATC Compound</li>
                <li>+254 774700701</li>
                <li>info@itenclub.co.ke</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Iten Club. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;



















// import { useState } from 'react';
// import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';
// import { Link } from 'react-router-dom';

// function App() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     subject: 'General Inquiry',
//     message: '',
//     preferredContact: 'email',
//     date: '',
//     guests: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Add your form submission logic here
//     alert('Thank you for contacting us! We will get back to you soon.');
//     // Reset form
//     setFormData({
//       fullName: '',
//       email: '',
//       phone: '',
//       subject: 'General Inquiry',
//       message: '',
//       preferredContact: 'email',
//       date: '',
//       guests: ''
//     });
//   };

//   const workingHours = [
//     { day: 'Monday', hours: '8:00 AM - 9:00 PM' },
//     { day: 'Tuesday', hours: '8:00 AM - 9:00 PM' },
//     { day: 'Wednesday', hours: '8:00 AM - 9:00 PM' },
//     { day: 'Thursday', hours: '8:00 AM - 9:00 PM' },
//     { day: 'Friday', hours: '8:00 AM - 9:00 PM' },
//     { day: 'Saturday', hours: '8:00 AM - 9:00 PM' },
//     { day: 'Sunday', hours: '8:00 AM - 9:00 PM' },
//   ];

//   return (
//     <div className="min-h-screen bg-black">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-black shadow-lg z-50 border-b border-yellow-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <Link to="/" className="text-2xl font-bold text-yellow-500">Iten Club</Link>
//             </div>
//             <div className="flex space-x-6">
//               <Link to="/" className="text-gray-300 hover:text-yellow-500 transition">Home</Link>
//               <Link to="/menu" className="text-gray-300 hover:text-yellow-500 transition">Menu</Link>
//               <Link to="/gallery" className="text-gray-300 hover:text-yellow-500 transition">Gallery</Link>
//               <Link to="/contact" className="text-yellow-500">Contact</Link>
//               <Link to="/reservation" className="text-gray-300 hover:text-yellow-500 transition">Reserve</Link>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-24 pb-12 bg-gradient-to-br from-black via-gray-900 to-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Contact <span className="text-yellow-500">Us</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Get in touch with us for reservations, inquiries, or just to say hello
//           </p>
//         </div>
//       </section>

//       {/* Contact Form & Info Section */}
//       <section className="py-12 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <div className="bg-gray-900 border border-yellow-600 rounded-2xl p-8">
//               <h2 className="text-3xl font-bold text-yellow-500 mb-6">Send us a Message</h2>
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 {/* Full Name */}
//                 <div>
//                   <label className="block text-gray-300 mb-2 font-semibold">Full Name *</label>
//                   <input
//                     type="text"
//                     name="fullName"
//                     value={formData.fullName}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
//                     placeholder="Your full name"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block text-gray-300 mb-2 font-semibold">Email Address *</label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="block text-gray-300 mb-2 font-semibold">Phone Number *</label>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
//                     placeholder="+254 7XX XXX XXX"
//                   />
//                 </div>

//                 {/* Subject */}
//                 <div>
//                   <label className="block text-gray-300 mb-2 font-semibold">Subject *</label>
//                   <select
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
//                   >
//                     <option value="General Inquiry">General Inquiry</option>
//                     <option value="Reservation">Reservation</option>
//                     <option value="Catering">Catering</option>
//                     <option value="Events">Events</option>
//                     <option value="Feedback">Feedback</option>
//                     <option value="Other">Other</option>
//                   </select>
//                 </div>

//                 {/* Preferred Contact Method */}
//                 <div>
//                   <label className="block text-gray-300 mb-2 font-semibold">Preferred Contact Method</label>
//                   <div className="flex space-x-4">
//                     <label className="flex items-center text-gray-300">
//                       <input
//                         type="radio"
//                         name="preferredContact"
//                         value="email"
//                         checked={formData.preferredContact === 'email'}
//                         onChange={handleChange}
//                         className="mr-2"
//                       />
//                       Email
//                     </label>
//                     <label className="flex items-center text-gray-300">
//                       <input
//                         type="radio"
//                         name="preferredContact"
//                         value="phone"
//                         checked={formData.preferredContact === 'phone'}
//                         onChange={handleChange}
//                         className="mr-2"
//                       />
//                       Phone
//                     </label>
//                     <label className="flex items-center text-gray-300">
//                       <input
//                         type="radio"
//                         name="preferredContact"
//                         value="whatsapp"
//                         checked={formData.preferredContact === 'whatsapp'}
//                         onChange={handleChange}
//                         className="mr-2"
//                       />
//                       WhatsApp
//                     </label>
//                   </div>
//                 </div>

//                 {/* Date & Time (Optional) */}
//                 {formData.subject === 'Reservation' && (
//                   <>
//                     <div>
//                       <label className="block text-gray-300 mb-2 font-semibold">Preferred Date & Time</label>
//                       <input
//                         type="datetime-local"
//                         name="date"
//                         value={formData.date}
//                         onChange={handleChange}
//                         className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
//                       />
//                     </div>

//                     <div>
//                       <label className="block text-gray-300 mb-2 font-semibold">Number of Guests</label>
//                       <input
//                         type="number"
//                         name="guests"
//                         value={formData.guests}
//                         onChange={handleChange}
//                         min="1"
//                         className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
//                         placeholder="Number of people"
//                       />
//                     </div>
//                   </>
//                 )}

//                 {/* Message */}
//                 <div>
//                   <label className="block text-gray-300 mb-2 font-semibold">Message *</label>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="5"
//                     className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
//                     placeholder="Tell us more about your inquiry..."
//                   ></textarea>
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-yellow-600 text-black rounded-lg hover:bg-yellow-500 transition text-lg font-semibold"
//                 >
//                   <Send size={20} />
//                   <span>Send Message</span>
//                 </button>
//               </form>
//             </div>

//             {/* Contact Information */}
//             <div className="space-y-6">
//               {/* Quick Contact Cards */}
//               <div className="bg-gray-900 border border-yellow-600 rounded-2xl p-8">
//                 <h2 className="text-3xl font-bold text-yellow-500 mb-6">Contact Information</h2>
//                 <div className="space-y-6">
//                   <div className="flex items-start space-x-4">
//                     <MapPin className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
//                     <div>
//                       <h3 className="text-xl font-bold text-white mb-2">Location</h3>
//                       <p className="text-gray-300">Just outside High Altitude Training Centre</p>
//                       <p className="text-gray-300">Iten, Kenya</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <Phone className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
//                     <div>
//                       <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
//                       <p className="text-gray-300">+254 774700701</p>
//                       <p className="text-gray-300 text-sm">WhatsApp available</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <Mail className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
//                     <div>
//                       <h3 className="text-xl font-bold text-white mb-2">Email</h3>
//                       <p className="text-gray-300">info@itenclub.co.ke</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start space-x-4">
//                     <Clock className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
//                     <div>
//                       <h3 className="text-xl font-bold text-white mb-2">Opening Hours</h3>
//                       <p className="text-gray-300">Open Daily</p>
//                       <p className="text-yellow-500 font-semibold">8:00 AM - 9:00 PM</p>
//                       <p className="text-gray-400 text-sm mt-2">Coffee Bar open all day</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Quick Info */}
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="bg-gray-900 border border-yellow-600 rounded-lg p-4 text-center">
//                   <p className="text-yellow-500 font-bold text-lg">Near HATC</p>
//                   <p className="text-gray-300 text-sm">Easy to find</p>
//                 </div>
//                 <div className="bg-gray-900 border border-yellow-600 rounded-lg p-4 text-center">
//                   <p className="text-yellow-500 font-bold text-lg">Parking</p>
//                   <p className="text-gray-300 text-sm">Available</p>
//                 </div>
//                 <div className="bg-gray-900 border border-yellow-600 rounded-lg p-4 text-center">
//                   <p className="text-yellow-500 font-bold text-lg">Wi-Fi</p>
//                   <p className="text-gray-300 text-sm">Free</p>
//                 </div>
//                 <div className="bg-gray-900 border border-yellow-600 rounded-lg p-4 text-center">
//                   <p className="text-yellow-500 font-bold text-lg">Outdoor Seating</p>
//                   <p className="text-gray-300 text-sm">Available</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Working Hours Section */}
//       <section className="py-12 bg-gray-900">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-yellow-500 mb-8 text-center">Working Hours</h2>
//           <div className="max-w-3xl mx-auto bg-black border border-yellow-600 rounded-2xl p-8">
//             <div className="space-y-4">
//               {workingHours.map((schedule, index) => (
//                 <div
//                   key={index}
//                   className="flex justify-between items-center py-3 border-b border-gray-800 last:border-b-0"
//                 >
//                   <span className="text-white font-semibold text-lg">{schedule.day}</span>
//                   <span className="text-yellow-500 font-bold">{schedule.hours}</span>
//                 </div>
//               ))}
//             </div>
//             <p className="text-center text-gray-400 mt-6 text-sm">
//               * Coffee Bar service available throughout all opening hours
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Google Maps Section */}
//       <section className="py-12 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-4xl font-bold text-yellow-500 mb-8 text-center">Find Us</h2>
//           <div className="bg-gray-900 border border-yellow-600 rounded-2xl p-4">
//             {/* Replace this iframe src with your actual Google Maps embed URL */}
//             <iframe
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.555890685969!2d35.49997307357595!3d0.657158163413649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17811720b2736ef9%3A0xe27fc5b426b60eb3!2sIten%20Club!5e0!3m2!1sen!2ske!4v1763562903143!5m2!1sen!2ske" 
//               width="100%"
//               height="450"
//               style={{ border: 0, borderRadius: '8px' }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               className="w-full"
//             ></iframe>
//           </div>
//           <div className="text-center mt-6">
//             <a
//               href="https://maps.google.com/?q=Iten+Club+Kenya"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block px-8 py-4 bg-yellow-600 text-black rounded-lg hover:bg-yellow-500 transition text-lg font-semibold"
//             >
//               Get Directions
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black text-white py-12 border-t border-yellow-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid md:grid-cols-3 gap-8">
//             <div>
//               <h3 className="text-2xl font-bold mb-4 text-yellow-500">Iten Club</h3>
//               <p className="text-gray-400">Where European & Kenyan flavors meet in the heart of champions country.</p>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-bold mb-4 text-yellow-500">Quick Links</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li><Link to="/" className="hover:text-yellow-500 transition">Home</Link></li>
//                 <li><Link to="/menu" className="hover:text-yellow-500 transition">Menu</Link></li>
//                 <li><Link to="/gallery" className="hover:text-yellow-500 transition">Gallery</Link></li>
//                 <li><Link to="/contact" className="hover:text-yellow-500 transition">Contact</Link></li>
//                 <li><Link to="/reservation" className="hover:text-yellow-500 transition">Reserve</Link></li>
//               </ul>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-bold mb-4 text-yellow-500">Contact</h4>
//               <ul className="space-y-2 text-gray-400">
//                 <li>Iten, Kenya</li>
//                 <li>Outside HATC Compound</li>
//                 <li>+254 774700701</li>
//                 <li>info@itenclub.co.ke</li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//             <p>&copy; 2025 Iten Club. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default App;