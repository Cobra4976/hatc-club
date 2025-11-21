import { useState } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
// Import your gallery images
import food1 from '../assets/food/chapostew.png';
// import food2 from '../assets/food/chips.png';
import food3 from '../assets/food/coffee.png';
import food4 from '../assets/food/latee.png';
import food5 from '../assets/food/pizza.png';
import food6 from '../assets/food/bread.png';
import restaurant1 from '../assets/atmosphere/restaurant1.jpeg';
// import restaurant2 from '../assets/atmosphere/restaurant2.png';
import restaurant3 from '../assets/atmosphere/restaurant3.png';
import restaurant4 from '../assets/atmosphere/restaurant4.png';
import atmosphere1 from '../assets/atmosphere/atmosphere1.png';
import atmosphere2 from'../assets/atmosphere/atmosphere2.png';
import atmosphere3 from '../assets/atmosphere/atmosphere3.png';
import atmosphere4 from '../assets/atmosphere/atmosphere4.png';

function App() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { src: food1, category: 'food', title: 'Chapati Stew' },
    // { src: food2, category: 'food', title: 'French Fries' },
    { src: food3, category: 'food', title: 'Cofee' },
    { src: food4, category: 'food', title: 'Latte' },
    { src: food5, category: 'food', title: 'Pizza' },
    { src: food6, category: 'food', title: 'Signature Dishes' },
    { src: restaurant1, category: 'restaurant', title: 'Dining Area' },
    // { src: restaurant2, category: 'restaurant', title: 'Coffee Bar' },
    { src: restaurant3, category: 'restaurant', title: 'Social Gathering' },
    { src: restaurant4, category: 'restaurant', title: 'Interior View' },
    { src: atmosphere1, category: 'atmosphere', title: 'Outdoor Sitting' },
    { src: atmosphere2, category: 'atmosphere', title: 'Side View' },
    { src: atmosphere3, category: 'atmosphere', title: 'Entrance' },
    { src: atmosphere4, category: 'atmosphere', title: 'Interior View' },
  ];

  const filters = [
    { id: 'all', name: 'All Photos' },
    { id: 'food', name: 'Food' },
    { id: 'restaurant', name: 'Restaurant' },
    { id: 'atmosphere', name: 'Atmosphere' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black shadow-lg z-50 border-b border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-yellow-500">Iten Club</Link>
            </div>
            <div className="flex space-x-6" >
                <Link to="/" className="text-gray-300 hover:text-yellow-500 transition">Home</Link>
                <Link to="/menu" className="text-gray-300 hover:text-yellow-500 transition">Menu</Link>
                <Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition">Contact</Link>
                <Link to="/reservation" className="text-gray-300 hover:text-yellow-500 transition">Reserve</Link>


            </div>
        
            
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-yellow-500">Gallery</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the vibrant atmosphere, delicious cuisine, and warm hospitality of Iten Club
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="sticky top-16 bg-gray-900 border-b border-yellow-600 z-40 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  activeFilter === filter.id
                    ? 'bg-yellow-500 text-black'
                    : 'bg-transparent text-gray-300 border border-yellow-600 hover:bg-yellow-600 hover:text-black'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(item)}
                className="relative overflow-hidden rounded-lg cursor-pointer group border-2 border-yellow-600 hover:border-yellow-500 transition"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-yellow-500 hover:text-yellow-400 transition"
          >
            <X size={40} />
          </button>
          <div className="max-w-6xl max-h-full">
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg border-4 border-yellow-600"
            />
            <p className="text-center text-white text-2xl font-bold mt-4">{selectedImage.title}</p>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Visit Us Today!</h2>
          <p className="text-xl mb-8">
            Experience the best of European and Kenyan cuisine in the heart of Iten
          </p>
         <Link to="/reservation" className="px-8 py-4 bg-black text-yellow-500 rounded-lg hover:bg-gray-900 transition text-lg font-semibold">
          Make a Reservation
          </Link> 
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
              <h4 className="text-lg font-bold mb-4 text-yellow-500">Opening Hours</h4>
              <p className="text-gray-400">Monday - Sunday</p>
              <p className="text-gray-400">8:00 AM - 9:00 PM</p>
              <p className="text-gray-400 text-sm mt-2">Coffee Bar open all day</p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4 text-yellow-500">Location</h4>
              <p className="text-gray-400">Iten, Kenya</p>
              <p className="text-gray-400"> High Altitude road, Iten, 30700, KE</p>
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