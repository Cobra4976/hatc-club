import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Coffee, Utensils, MapPin, Clock, ChevronDown } from 'lucide-react';
import heroImage1 from './assets/atmosphere/restaurant1.jpeg';
import heroImage2 from './assets/gallery/itenclub1.png';
import heroImage3 from './assets/atmosphere/atmosphere2.png'
import heroImage4 from './assets/atmosphere/atmosphere3.png'
// import heroImage2 from './assets/website-test2.jpg';
// import heroImage3 from './assets/website-test3.jpg';
// import heroImage4 from './assets/website-test4.jpg';
// import heroImage5 from './assets/website-test5.jpg';
// import heroImage6 from './assets/website-test6.jpg';
import MenuPage from './components/MenuPage';
import GalleryPage from './components/GalleryPage';
import ContactPage from './components/ContactPage';
import ReservationPage from './components/ReservationPage';
function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [heroImage1,heroImage2,heroImage3,heroImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black shadow-lg z-50 border-b border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-yellow-500">Iten Club</h1>
            </div>
            
            {/* Desktop Menu */}
            <Link to="/" className="text-gray-300 hover:text-yellow-500 transition">Home</Link>
            <Link to="/menu" className="text-gray-300 hover:text-yellow-500 transition">Menu</Link>
            <Link to="/gallery" className="text-gray-300 hover:text-yellow-500 transition">Gallery</Link>
            <Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition">Contact</Link>
            <Link to="/reservation" className="text-gray-300 hover:text-yellow-500 transition">Reserve</Link>


            {/* <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-yellow-500 transition">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-yellow-500 transition">About</button>
              <button onClick={() => scrollToSection('offerings')} className="text-gray-300 hover:text-yellow-500 transition">What We Offer</button>
              <button onClick={() => scrollToSection('location')} className="text-gray-300 hover:text-yellow-500 transition">Location</button>
              
            
            </div> */}

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
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">Home</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">About</button>
              <button onClick={() => scrollToSection('offerings')} className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">What We Offer</button>
              <button onClick={() => scrollToSection('location')} className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">Location</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Background Image Carousel */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-75"></div>
          </div>
        ))}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Welcome to <span className="text-yellow-500">Iten Club</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Where European & Kenyan Flavors Meet in the Heart of Champions Country
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              From authentic pizzas and juicy burgers to traditional chapatti and local favorites. 
              Plus an all-day Coffee Bar serving premium drinks, pastries, and desserts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/menu" className="px-8 py-4 bg-yellow-600 text-black rounded-lg hover:bg-yellow-500 transition text-lg font-semibold">
               Explore Our Menu
               </Link>
              <button 
                onClick={() => scrollToSection('location')}
                className="px-8 py-4 bg-transparent text-yellow-500 border-2 border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition text-lg font-semibold"
              >
                Visit Us
              </button>
            </div>
            
            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <ChevronDown size={32} className="mx-auto text-yellow-500" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Iten Club</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">A Fusion of Cultures & Flavors</h3>
              <p className="text-lg text-gray-300 mb-4">
                Located just outside the High Altitude Training Centre , Iten Club is more than just a restaurant—it's a gathering place where cultures unite through food.
              </p>
              <p className="text-lg text-gray-300 mb-4">
                We bring together the best of European and Kenyan cuisines, creating a unique dining experience that celebrates both traditions. Whether you're an athlete in training, a local resident, or a visitor exploring the "Home of Champions," you'll find something to love.
              </p>
              <p className="text-lg text-gray-300">
                Our all-day Coffee Bar ensures you can enjoy premium drinks, freshly baked pastries, and delicious desserts from morning until night.
                Our organic farming practices and unique  principle of  farm to table ensures fresh, high-quality ingredients in every dish.
              </p>
        
            </div>
            
            <div className="bg-gradient-to-br from-gray-800 to-black p-8 rounded-2xl border border-yellow-600">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-xl text-white mb-2">Prime Location</h4>
                    <p className="text-gray-300">Just outside High Altitude Training Centre, Iten</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Utensils className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-xl text-white mb-2">Diverse Menu</h4>
                    <p className="text-gray-300">Pizza, Burgers, Chapatti & more from two continents</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Coffee className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-xl text-white mb-2">All-Day Coffee Bar</h4>
                    <p className="text-gray-300">Premium coffee, drinks, pastries & desserts</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="text-yellow-500 flex-shrink-0 mt-1" size={28} />
                  <div>
                    <h4 className="font-bold text-xl text-white mb-2">Open Daily</h4>
                    <p className="text-gray-300">Monday - Sunday: 8:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">What We Offer</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A delicious blend of European classics and Kenyan favorites, plus an all-day Coffee Bar
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* European Cuisine */}
            <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition border border-yellow-600">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6">
                <Utensils className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">European Classics</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Authentic Italian Pizzas - Margherita, Pepperoni, BBQ Chicken & more</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Juicy Burgers - Beef, Chicken, Veggie options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Pasta Dishes & European Favorites</span>
                </li>
              </ul>
            </div>

            {/* Kenyan Cuisine */}
            <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition border border-yellow-600">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6">
                <Utensils className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Kenyan Favorites</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Fresh Chapatti served with traditional stews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Nyama Choma & local grilled specialties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Authentic Kenyan dishes & flavors</span>
                </li>
              </ul>
            </div>

            {/* Coffee Bar */}
            <div className="bg-gray-900 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition border border-yellow-600">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mb-6">
                <Coffee className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">All-Day Coffee Bar</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Premium Coffee - Espresso, Cappuccino, Latte</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Fresh Pastries & Baked Goods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Delicious Desserts & Sweet Treats</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Refreshing Drinks & Beverages</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Visit Us</h2>
            <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Find Us in Iten</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-xl text-white mb-2">Location</h4>
                    <p className="text-gray-300">High Altitude road, Iten, 30700, KE</p>
                    <p className="text-gray-300">Iten, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-yellow-500 flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-bold text-xl text-white mb-2">Opening Hours</h4>
                    <p className="text-gray-300">Monday - Sunday: 8:00 AM - 9:00 PM</p>
                    <p className="text-gray-300 text-sm mt-2">Coffee Bar open all day</p>
                  </div>
                </div>

                <div className="bg-black p-6 rounded-lg border border-yellow-600">
                  <h4 className="font-bold text-xl text-white mb-3">Easy to Find</h4>
                  <p className="text-gray-300 mb-2">
                    Located in the heart of Iten, Kenya's renowned "Home of Champions," we're perfectly positioned for athletes, locals, and visitors alike.
                  </p>
                  <p className="text-gray-300">
                    Look for us right outside the High Altitude Training Centre - you can't miss our welcoming atmosphere!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl overflow-hidden border border-yellow-600">
           <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.555890685969!2d35.49997307357595!3d0.657158163413649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17811720b2736ef9%3A0xe27fc5b426b60eb3!2sIten%20Club!5e0!3m2!1sen!2ske!4v1763562903143!5m2!1sen!2ske" 
             width="100%"
           height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
            </div>
            
            
            {/* <div className="bg-gray-800 rounded-2xl p-8 flex items-center justify-center border border-yellow-600">
              <div className="text-center">
                <MapPin size={64} className="text-yellow-500 mx-auto mb-4" />
                <p className="text-gray-300 text-lg">Map Integration Coming Soon</p>
                <p className="text-gray-500 mt-2">Interactive map will be displayed here</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Experience Iten Club?</h2>
          <p className="text-xl mb-8">
            Join us for a memorable dining experience where European and Kenyan flavors come together
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-black text-yellow-500 rounded-lg hover:bg-gray-900 transition text-lg font-semibold">
              View Full Menu
            </button>
            <Link to="/reservation" className="px-8 py-4 bg-transparent text-yellow-500 border-2 border-yellow-500 rounded-lg hover:bg-yellow-500 hover:text-black transition text-lg font-semibold">
            Make a Reservation
            </Link>
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
                <li><button onClick={() => scrollToSection('home')} className="hover:text-yellow-500 transition">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="hover:text-yellow-500 transition">About</button></li>
                <li><button onClick={() => scrollToSection('offerings')} className="hover:text-yellow-500 transition">What We Offer</button></li>
                <li><button onClick={() => scrollToSection('location')} className="hover:text-yellow-500 transition">Location</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-500">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Iten, Kenya</li>
                <li>High Altitude road, Iten, 30700, KE</li>
                <li>Open Daily: 8 AM - 9 PM</li>
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
function App() 
{
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
      </Routes>
    </Router>
  );
}

export default App;