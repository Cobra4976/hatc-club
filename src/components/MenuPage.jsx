import { useState, useEffect } from 'react';
import { Coffee, Utensils, Wine,Menu ,X } from 'lucide-react';
import { Link } from 'react-router-dom';
import menuImage1 from '../assets/food/chapostew.png';
import menuImage2 from '../assets/food/chips.png'
import menuImage3 from '../assets/food/coffee.png';
import menuImage4 from '../assets/food/latee.png';
// import menuImage5 from '../assets/menu-image-5.jpg';
// import menuImage6 from '../assets/menu-image-6.jpg';

function App() {
  const [activeCategory, setActiveCategory] = useState('european');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const menuImages = [menuImage1,menuImage2,menuImage3,menuImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % menuImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const menuData = {
    european: [
      { name: 'Margherita Pizza', desc: 'Fresh mozzarella, tomato sauce, basil', category: 'Pizza' },
      { name: 'Pepperoni Pizza',  desc: 'Pepperoni, mozzarella, tomato sauce', category: 'Pizza' },
      { name: 'BBQ Chicken Pizza',  desc: 'Grilled chicken, BBQ sauce, onions, mozzarella', category: 'Pizza' },
      { name: 'Hawaiian Pizza',  desc: 'Ham, pineapple, mozzarella, tomato sauce', category: 'Pizza' },
      { name: 'Vegetarian Pizza',  desc: 'Bell peppers, mushrooms, olives, onions, mozzarella', category: 'Pizza' },
      { name: 'Classic Beef Burger',  desc: 'Angus beef patty, lettuce, tomato, cheese, special sauce', category: 'Burgers' },
      { name: 'Chicken Burger',  desc: 'Crispy chicken, lettuce, mayo, pickles', category: 'Burgers' },
      { name: 'Veggie Burger',  desc: 'Plant-based patty, avocado, lettuce, tomato', category: 'Burgers' },
      { name: 'Bacon Cheeseburger', desc: 'Beef patty, bacon, double cheese, caramelized onions', category: 'Burgers' },
      { name: 'Spaghetti Carbonara',  desc: 'Creamy sauce, bacon, parmesan, black pepper', category: 'Pasta' },
      { name: 'Penne Arrabbiata',  desc: 'Spicy tomato sauce, garlic, chili flakes', category: 'Pasta' },
      { name: 'Chicken Alfredo',  desc: 'Grilled chicken, creamy alfredo sauce, fettuccine', category: 'Pasta' },
      { name: 'Grilled Chicken Schnitzel',  desc: 'Breaded chicken breast, served with fries and salad', category: 'Mains' },
      { name: 'Fish & Chips',  desc: 'Battered fish fillet, crispy fries, tartar sauce', category: 'Mains' },
    ],
    kenyan: [
      { name: 'Nyama Choma',  desc: 'Grilled goat meat with kachumbari', category: 'Grills' },
      { name: 'Beef Wet Fry',  desc: 'Tender beef cooked with onions and peppers', category: 'Mains' },
      { name: 'Chicken Stew',  desc: 'Traditional Kenyan chicken stew', category: 'Stews' },
      { name: 'Fish Fry (Tilapia)',  desc: 'Deep fried whole tilapia', category: 'Grills' },
      { name: 'Chapatti (2 pcs)',  desc: 'Soft layered flatbread', category: 'Sides' },
      { name: 'Chapatti & Beef Stew',  desc: 'Chapatti served with rich beef stew', category: 'Combos' },
      { name: 'Chapatti & Chicken Stew',  desc: 'Chapatti with traditional chicken stew', category: 'Combos' },
      { name: 'Ugali & Sukuma Wiki',  desc: 'Maize meal with sautéed kale', category: 'Traditional' },
      { name: 'Ugali, Beef & Sukuma',  desc: 'Complete traditional meal', category: 'Traditional' },
      { name: 'Pilau (Beef)',  desc: 'Spiced rice with tender beef', category: 'Rice Dishes' },
      { name: 'Pilau (Chicken)', desc: 'Spiced rice with chicken', category: 'Rice Dishes' },
      { name: 'Githeri',  desc: 'Mixed maize and beans', category: 'Traditional' },
      { name: 'Mukimo',  desc: 'Mashed potatoes, peas, and corn', category: 'Traditional' },
      { name: 'Samosa (Beef) - 3 pcs',  desc: 'Crispy pastry filled with spiced beef', category: 'Snacks' },
      { name: 'Samosa (Veg) - 3 pcs',  desc: 'Crispy pastry filled with vegetables', category: 'Snacks' },
      { name: 'Maandazi (4 pcs)',  desc: 'Sweet fried dough', category: 'Snacks' },
    ],
    coffee: [
      { name: 'Espresso',  desc: 'Strong, rich coffee shot', category: 'Hot Coffee' },
      { name: 'Americano',  desc: 'Espresso with hot water', category: 'Hot Coffee' },
      { name: 'Cappuccino',  desc: 'Espresso with steamed milk and foam', category: 'Hot Coffee' },
      { name: 'Latte',  desc: 'Espresso with steamed milk', category: 'Hot Coffee' },
      { name: 'Flat White',  desc: 'Espresso with microfoam milk', category: 'Hot Coffee' },
      { name: 'Mocha',  desc: 'Espresso, chocolate, steamed milk', category: 'Hot Coffee' },
      { name: 'Iced Coffee',  desc: 'Cold brewed coffee over ice', category: 'Cold Coffee' },
      { name: 'Iced Latte',  desc: 'Espresso with cold milk over ice', category: 'Cold Coffee' },
      { name: 'Iced Mocha',  desc: 'Cold espresso, chocolate, milk', category: 'Cold Coffee' },
      { name: 'Hot Chocolate', desc: 'Rich chocolate with steamed milk', category: 'Hot Beverages' },
      { name: 'Masala Chai',  desc: 'Spiced tea with milk', category: 'Hot Beverages' },
      { name: 'English Breakfast Tea',  desc: 'Classic black tea', category: 'Hot Beverages' },
      { name: 'Croissant',  desc: 'Buttery, flaky pastry', category: 'Pastries' },
      { name: 'Chocolate Muffin',  desc: 'Moist chocolate muffin', category: 'Pastries' },
      { name: 'Blueberry Muffin',  desc: 'Fresh blueberry muffin', category: 'Pastries' },
      { name: 'Cinnamon Roll',  desc: 'Sweet cinnamon swirl with icing', category: 'Pastries' },
      { name: 'Cheesecake Slice',  desc: 'Creamy New York style cheesecake', category: 'Desserts' },
      { name: 'Chocolate Cake Slice',  desc: 'Rich chocolate layer cake', category: 'Desserts' },
      { name: 'Tiramisu',  desc: 'Italian coffee-flavored dessert', category: 'Desserts' },
      { name: 'Ice Cream Sundae',  desc: 'Vanilla ice cream with toppings', category: 'Desserts' },
    ],
    beverages: [
      { name: 'Coca Cola',  desc: '330ml bottle', category: 'Soft Drinks' },
      { name: 'Fanta Orange',  desc: '330ml bottle', category: 'Soft Drinks' },
      { name: 'Sprite',  desc: '330ml bottle', category: 'Soft Drinks' },
      { name: 'Bottled Water',  desc: '500ml', category: 'Water' },
      { name: 'Sparkling Water',  desc: '500ml', category: 'Water' },
      { name: 'Fresh Orange Juice',  desc: 'Freshly squeezed', category: 'Fresh Juices' },
      { name: 'Fresh Passion Juice',  desc: 'Freshly made', category: 'Fresh Juices' },
      { name: 'Fresh Mango Juice',  desc: 'Seasonal, freshly blended', category: 'Fresh Juices' },
      { name: 'Watermelon Juice',  desc: 'Fresh and refreshing', category: 'Fresh Juices' },
      { name: 'Mixed Fruit Smoothie',  desc: 'Blend of seasonal fruits', category: 'Smoothies' },
      { name: 'Berry Smoothie',  desc: 'Mixed berries with yogurt', category: 'Smoothies' },
      { name: 'Mango Smoothie',  desc: 'Creamy mango blend', category: 'Smoothies' },
      { name: 'Tusker Lager',  desc: '500ml bottle', category: 'Beer' },
      { name: 'White Cap',  desc: '500ml bottle', category: 'Beer' },
      { name: 'Guinness',  desc: '500ml bottle', category: 'Beer' },
      { name: 'House Red Wine',  desc: 'Glass', category: 'Wine' },
      { name: 'House White Wine',  desc: 'Glass', category: 'Wine' },
      { name: 'Wine Bottle (Red/White)',  desc: 'Full bottle', category: 'Wine' },
    ],
  };

  const categories = [
    { id: 'european', name: 'European Classics', icon: Utensils },
    { id: 'kenyan', name: 'Kenyan Favorites', icon: Utensils },
    { id: 'coffee', name: 'Coffee Bar & Desserts', icon: Coffee },
    { id: 'beverages', name: 'Beverages', icon: Wine },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const groupedItems = menuData[activeCategory].reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation with Category Tabs */}
<nav className="fixed top-0 w-full bg-black shadow-lg z-50 border-b border-yellow-600">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-500">Iten Club</Link>
      </div>
      
      {/* Desktop Menu - Hidden on mobile, visible on desktop */}
      <div className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-300 hover:text-yellow-500 transition">Home</Link>
        <Link to="/menu" className="text-yellow-500">Menu</Link>
        <Link to="/gallery" className="text-gray-300 hover:text-yellow-500 transition">Gallery</Link>
        <Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition">Contact</Link>
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
        <Link to="/menu" className="block w-full text-left px-3 py-2 text-yellow-500 hover:bg-gray-900">Menu</Link>
        <Link to="/gallery" className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">Gallery</Link>
        <Link to="/contact" className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">Contact</Link>
        <Link to="/reservation" className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">Reserve</Link>
      </div>
    </div>
  )}

  {/* Category Tabs in Navigation */}
  <div className="bg-gray-900 border-t border-yellow-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex overflow-x-auto">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => {
                setActiveCategory(category.id);
                scrollToTop();
              }}
              className={`flex items-center space-x-2 px-6 py-4 whitespace-nowrap transition border-b-2 ${
                activeCategory === category.id
                  ? 'border-yellow-500 text-yellow-500'
                  : 'border-transparent text-gray-300 hover:text-yellow-500'
              }`}
            >
              <Icon size={20} />
              <span className="font-semibold">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  </div>
</nav>
      

      {/* Hero Section with Background Image Carousel */}
      <section className="pt-32 pb-12 relative overflow-hidden min-h-96">
        {menuImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-80"></div>
          </div>
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="text-yellow-500">Menu</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A delicious fusion of European and Kenyan cuisines, plus premium coffee and beverages
          </p>
        </div>
      </section>

      {/* Menu Items */}
      <section id="menu" className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {Object.entries(groupedItems).map(([categoryName, items]) => (
            <div key={categoryName} className="mb-12">
              <h2 className="text-3xl font-bold text-yellow-500 mb-6 border-b border-yellow-600 pb-2">
                {categoryName}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 border border-yellow-600 rounded-lg p-6 hover:shadow-xl hover:border-yellow-500 transition"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{item.name}</h3>
                      <span className="text-xl font-bold text-yellow-500 ml-4">{item.price}</span>
                    </div>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
          <p className="text-xl mb-8">
            Visit us today and experience the best of European and Kenyan cuisine
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
              <p className="text-gray-400">High Altitude road, Iten, 30700, KE</p>
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
// import { Coffee, Utensils, Wine, Menu as MenuIcon, X } from 'lucide-react';

// function App() {
//   const [activeCategory, setActiveCategory] = useState('european');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const menuData = {
//     european: [
//       { name: 'Margherita Pizza', price: 'KSh 850', desc: 'Fresh mozzarella, tomato sauce, basil', category: 'Pizza' },
//       { name: 'Pepperoni Pizza', price: 'KSh 950', desc: 'Pepperoni, mozzarella, tomato sauce', category: 'Pizza' },
//       { name: 'BBQ Chicken Pizza', price: 'KSh 1,100', desc: 'Grilled chicken, BBQ sauce, onions, mozzarella', category: 'Pizza' },
//       { name: 'Hawaiian Pizza', price: 'KSh 1,000', desc: 'Ham, pineapple, mozzarella, tomato sauce', category: 'Pizza' },
//       { name: 'Vegetarian Pizza', price: 'KSh 900', desc: 'Bell peppers, mushrooms, olives, onions, mozzarella', category: 'Pizza' },
//       { name: 'Classic Beef Burger', price: 'KSh 750', desc: 'Angus beef patty, lettuce, tomato, cheese, special sauce', category: 'Burgers' },
//       { name: 'Chicken Burger', price: 'KSh 700', desc: 'Crispy chicken, lettuce, mayo, pickles', category: 'Burgers' },
//       { name: 'Veggie Burger', price: 'KSh 650', desc: 'Plant-based patty, avocado, lettuce, tomato', category: 'Burgers' },
//       { name: 'Bacon Cheeseburger', price: 'KSh 850', desc: 'Beef patty, bacon, double cheese, caramelized onions', category: 'Burgers' },
//       { name: 'Spaghetti Carbonara', price: 'KSh 800', desc: 'Creamy sauce, bacon, parmesan, black pepper', category: 'Pasta' },
//       { name: 'Penne Arrabbiata', price: 'KSh 750', desc: 'Spicy tomato sauce, garlic, chili flakes', category: 'Pasta' },
//       { name: 'Chicken Alfredo', price: 'KSh 950', desc: 'Grilled chicken, creamy alfredo sauce, fettuccine', category: 'Pasta' },
//       { name: 'Grilled Chicken Schnitzel', price: 'KSh 1,000', desc: 'Breaded chicken breast, served with fries and salad', category: 'Mains' },
//       { name: 'Fish & Chips', price: 'KSh 900', desc: 'Battered fish fillet, crispy fries, tartar sauce', category: 'Mains' },
//     ],
//     kenyan: [
//       { name: 'Nyama Choma', price: 'KSh 1,200', desc: 'Grilled goat meat with kachumbari', category: 'Grills' },
//       { name: 'Beef Wet Fry', price: 'KSh 800', desc: 'Tender beef cooked with onions and peppers', category: 'Mains' },
//       { name: 'Chicken Stew', price: 'KSh 700', desc: 'Traditional Kenyan chicken stew', category: 'Stews' },
//       { name: 'Fish Fry (Tilapia)', price: 'KSh 900', desc: 'Deep fried whole tilapia', category: 'Grills' },
//       { name: 'Chapatti (2 pcs)', price: 'KSh 100', desc: 'Soft layered flatbread', category: 'Sides' },
//       { name: 'Chapatti & Beef Stew', price: 'KSh 450', desc: 'Chapatti served with rich beef stew', category: 'Combos' },
//       { name: 'Chapatti & Chicken Stew', price: 'KSh 400', desc: 'Chapatti with traditional chicken stew', category: 'Combos' },
//       { name: 'Ugali & Sukuma Wiki', price: 'KSh 300', desc: 'Maize meal with sautéed kale', category: 'Traditional' },
//       { name: 'Ugali, Beef & Sukuma', price: 'KSh 600', desc: 'Complete traditional meal', category: 'Traditional' },
//       { name: 'Pilau (Beef)', price: 'KSh 500', desc: 'Spiced rice with tender beef', category: 'Rice Dishes' },
//       { name: 'Pilau (Chicken)', price: 'KSh 450', desc: 'Spiced rice with chicken', category: 'Rice Dishes' },
//       { name: 'Githeri', price: 'KSh 250', desc: 'Mixed maize and beans', category: 'Traditional' },
//       { name: 'Mukimo', price: 'KSh 300', desc: 'Mashed potatoes, peas, and corn', category: 'Traditional' },
//       { name: 'Samosa (Beef) - 3 pcs', price: 'KSh 150', desc: 'Crispy pastry filled with spiced beef', category: 'Snacks' },
//       { name: 'Samosa (Veg) - 3 pcs', price: 'KSh 120', desc: 'Crispy pastry filled with vegetables', category: 'Snacks' },
//       { name: 'Maandazi (4 pcs)', price: 'KSh 100', desc: 'Sweet fried dough', category: 'Snacks' },
//     ],
//     coffee: [
//       { name: 'Espresso', price: 'KSh 200', desc: 'Strong, rich coffee shot', category: 'Hot Coffee' },
//       { name: 'Americano', price: 'KSh 250', desc: 'Espresso with hot water', category: 'Hot Coffee' },
//       { name: 'Cappuccino', price: 'KSh 300', desc: 'Espresso with steamed milk and foam', category: 'Hot Coffee' },
//       { name: 'Latte', price: 'KSh 320', desc: 'Espresso with steamed milk', category: 'Hot Coffee' },
//       { name: 'Flat White', price: 'KSh 300', desc: 'Espresso with microfoam milk', category: 'Hot Coffee' },
//       { name: 'Mocha', price: 'KSh 350', desc: 'Espresso, chocolate, steamed milk', category: 'Hot Coffee' },
//       { name: 'Iced Coffee', price: 'KSh 280', desc: 'Cold brewed coffee over ice', category: 'Cold Coffee' },
//       { name: 'Iced Latte', price: 'KSh 330', desc: 'Espresso with cold milk over ice', category: 'Cold Coffee' },
//       { name: 'Iced Mocha', price: 'KSh 360', desc: 'Cold espresso, chocolate, milk', category: 'Cold Coffee' },
//       { name: 'Hot Chocolate', price: 'KSh 280', desc: 'Rich chocolate with steamed milk', category: 'Hot Beverages' },
//       { name: 'Masala Chai', price: 'KSh 200', desc: 'Spiced tea with milk', category: 'Hot Beverages' },
//       { name: 'English Breakfast Tea', price: 'KSh 150', desc: 'Classic black tea', category: 'Hot Beverages' },
//       { name: 'Croissant', price: 'KSh 180', desc: 'Buttery, flaky pastry', category: 'Pastries' },
//       { name: 'Chocolate Muffin', price: 'KSh 200', desc: 'Moist chocolate muffin', category: 'Pastries' },
//       { name: 'Blueberry Muffin', price: 'KSh 200', desc: 'Fresh blueberry muffin', category: 'Pastries' },
//       { name: 'Cinnamon Roll', price: 'KSh 220', desc: 'Sweet cinnamon swirl with icing', category: 'Pastries' },
//       { name: 'Cheesecake Slice', price: 'KSh 350', desc: 'Creamy New York style cheesecake', category: 'Desserts' },
//       { name: 'Chocolate Cake Slice', price: 'KSh 300', desc: 'Rich chocolate layer cake', category: 'Desserts' },
//       { name: 'Tiramisu', price: 'KSh 400', desc: 'Italian coffee-flavored dessert', category: 'Desserts' },
//       { name: 'Ice Cream Sundae', price: 'KSh 350', desc: 'Vanilla ice cream with toppings', category: 'Desserts' },
//     ],
//     beverages: [
//       { name: 'Coca Cola', price: 'KSh 100', desc: '330ml bottle', category: 'Soft Drinks' },
//       { name: 'Fanta Orange', price: 'KSh 100', desc: '330ml bottle', category: 'Soft Drinks' },
//       { name: 'Sprite', price: 'KSh 100', desc: '330ml bottle', category: 'Soft Drinks' },
//       { name: 'Bottled Water', price: 'KSh 50', desc: '500ml', category: 'Water' },
//       { name: 'Sparkling Water', price: 'KSh 120', desc: '500ml', category: 'Water' },
//       { name: 'Fresh Orange Juice', price: 'KSh 250', desc: 'Freshly squeezed', category: 'Fresh Juices' },
//       { name: 'Fresh Passion Juice', price: 'KSh 280', desc: 'Freshly made', category: 'Fresh Juices' },
//       { name: 'Fresh Mango Juice', price: 'KSh 300', desc: 'Seasonal, freshly blended', category: 'Fresh Juices' },
//       { name: 'Watermelon Juice', price: 'KSh 250', desc: 'Fresh and refreshing', category: 'Fresh Juices' },
//       { name: 'Mixed Fruit Smoothie', price: 'KSh 350', desc: 'Blend of seasonal fruits', category: 'Smoothies' },
//       { name: 'Berry Smoothie', price: 'KSh 380', desc: 'Mixed berries with yogurt', category: 'Smoothies' },
//       { name: 'Mango Smoothie', price: 'KSh 350', desc: 'Creamy mango blend', category: 'Smoothies' },
//       { name: 'Tusker Lager', price: 'KSh 300', desc: '500ml bottle', category: 'Beer' },
//       { name: 'White Cap', price: 'KSh 250', desc: '500ml bottle', category: 'Beer' },
//       { name: 'Guinness', price: 'KSh 350', desc: '500ml bottle', category: 'Beer' },
//       { name: 'House Red Wine', price: 'KSh 600', desc: 'Glass', category: 'Wine' },
//       { name: 'House White Wine', price: 'KSh 600', desc: 'Glass', category: 'Wine' },
//       { name: 'Wine Bottle (Red/White)', price: 'KSh 2,500', desc: 'Full bottle', category: 'Wine' },
//     ],
//   };

//   const categories = [
//     { id: 'european', name: 'European Classics', icon: Utensils },
//     { id: 'kenyan', name: 'Kenyan Favorites', icon: Utensils },
//     { id: 'coffee', name: 'Coffee Bar & Desserts', icon: Coffee },
//     { id: 'beverages', name: 'Beverages', icon: Wine },
//   ];

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Group menu items by category
//   const groupedItems = menuData[activeCategory].reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen bg-black">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-black shadow-lg z-50 border-b border-yellow-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold text-yellow-500">Iten Club</h1>
//             </div>
            
//             <div className="hidden md:flex space-x-8">
//               <a href="#" className="text-gray-300 hover:text-yellow-500 transition">Home</a>
//               <a href="#menu" className="text-yellow-500">Menu</a>
//               <a href="#" className="text-gray-300 hover:text-yellow-500 transition">About</a>
//               <a href="#" className="text-gray-300 hover:text-yellow-500 transition">Contact</a>
//             </div>

//             <button 
//               className="md:hidden text-yellow-500"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
//             </button>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="md:hidden bg-black border-t border-yellow-600">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <a href="#" className="block px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">Home</a>
//               <a href="#menu" className="block px-3 py-2 text-yellow-500">Menu</a>
//               <a href="#" className="block px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">About</a>
//               <a href="#" className="block px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">Contact</a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-24 pb-12 bg-gradient-to-br from-black via-gray-900 to-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Our <span className="text-yellow-500">Menu</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             A delicious fusion of European and Kenyan cuisines, plus premium coffee and beverages
//           </p>
//         </div>
//       </section>

//       {/* Category Tabs */}
//       <section className="sticky top-16 bg-gray-900 border-b border-yellow-600 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex overflow-x-auto">
//             {categories.map((category) => {
//               const Icon = category.icon;
//               return (
//                 <button
//                   key={category.id}
//                   onClick={() => {
//                     setActiveCategory(category.id);
//                     scrollToTop();
//                   }}
//                   className={`flex items-center space-x-2 px-6 py-4 whitespace-nowrap transition border-b-2 ${
//                     activeCategory === category.id
//                       ? 'border-yellow-500 text-yellow-500'
//                       : 'border-transparent text-gray-300 hover:text-yellow-500'
//                   }`}
//                 >
//                   <Icon size={20} />
//                   <span className="font-semibold">{category.name}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Menu Items */}
//       <section id="menu" className="py-12 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {Object.entries(groupedItems).map(([categoryName, items]) => (
//             <div key={categoryName} className="mb-12">
//               <h2 className="text-3xl font-bold text-yellow-500 mb-6 border-b border-yellow-600 pb-2">
//                 {categoryName}
//               </h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 {items.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-900 border border-yellow-600 rounded-lg p-6 hover:shadow-xl hover:border-yellow-500 transition"
//                   >
//                     <div className="flex justify-between items-start mb-2">
//                       <h3 className="text-xl font-bold text-white">{item.name}</h3>
//                       <span className="text-xl font-bold text-yellow-500 ml-4">{item.price}</span>
//                     </div>
//                     <p className="text-gray-400">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
//           <p className="text-xl mb-8">
//             Visit us today and experience the best of European and Kenyan cuisine
//           </p>
//           <button className="px-8 py-4 bg-black text-yellow-500 rounded-lg hover:bg-gray-900 transition text-lg font-semibold">
//             Make a Reservation
//           </button>
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
//               <h4 className="text-lg font-bold mb-4 text-yellow-500">Opening Hours</h4>
//               <p className="text-gray-400">Monday - Sunday</p>
//               <p className="text-gray-400">7:00 AM - 10:00 PM</p>
//               <p className="text-gray-400 text-sm mt-2">Coffee Bar open all day</p>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-bold mb-4 text-yellow-500">Location</h4>
//               <p className="text-gray-400">Iten, Kenya</p>
//               <p className="text-gray-400">Outside HATC Compound</p>
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
















































































// import { useState, useEffect } from 'react';
// import { Coffee, Utensils, Wine } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import menuImage1 from '../assets/food/chapostew.png';
// import menuImage2 from '../assets/food/chips.png';
// import menuImage3 from '../assets/food/coffee.png';
// import menuImage4 from '../assets/food/latee.png';
// // European Classics - Pizza


// // Import your menu item images here
// // Example structure - adjust paths to match your actual files:
// // import margheritaPizza from '../assets/food/margherita-pizza.jpg';
// // import pepperoniPizza from '../assets/food/pepperoni-pizza.jpg';
// // etc...

// function App() {
//   const [activeCategory, setActiveCategory] = useState('european');
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const menuImages = [menuImage1, menuImage2, menuImage3, menuImage4];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % menuImages.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const menuData = {
//     european: [
//       { name: 'Margherita Pizza', desc: 'Fresh mozzarella, tomato sauce, basil', category: 'Pizza', image:null },
//       { name: 'Pepperoni Pizza', desc: 'Pepperoni, mozzarella, tomato sauce', category: 'Pizza', image: null },
//       { name: 'BBQ Chicken Pizza', desc: 'Grilled chicken, BBQ sauce, onions, mozzarella', category: 'Pizza', image: null },
//       { name: 'Hawaiian Pizza', desc: 'Ham, pineapple, mozzarella, tomato sauce', category: 'Pizza', image: null },
//       { name: 'Vegetarian Pizza', desc: 'Bell peppers, mushrooms, olives, onions, mozzarella', category: 'Pizza', image: null },
//       { name: 'Classic Beef Burger', desc: 'Angus beef patty, lettuce, tomato, cheese, special sauce', category: 'Burgers', image: null },
//       { name: 'Chicken Burger', desc: 'Crispy chicken, lettuce, mayo, pickles', category: 'Burgers', image: null },
//       { name: 'Veggie Burger', desc: 'Plant-based patty, avocado, lettuce, tomato', category: 'Burgers', image:  null },
//       { name: 'Bacon Cheeseburger', desc: 'Beef patty, bacon, double cheese, caramelized onions', category: 'Burgers', image: null },
//       { name: 'Spaghetti Carbonara', desc: 'Creamy sauce, bacon, parmesan, black pepper', category: 'Pasta', image: null },
//       { name: 'Penne Arrabbiata', desc: 'Spicy tomato sauce, garlic, chili flakes', category: 'Pasta', image:   null },
//       { name: 'Chicken Alfredo', desc: 'Grilled chicken, creamy alfredo sauce, fettuccine', category: 'Pasta', image: null },
//       { name: 'Grilled Chicken Schnitzel', desc: 'Breaded chicken breast, served with fries and salad', category: 'Mains', image: null },
//       { name: 'Fish & Chips', desc: 'Battered fish fillet, crispy fries, tartar sauce', category: 'Mains', image: null },
//     ],
//     kenyan: [
//       { name: 'Nyama Choma', desc: 'Grilled goat meat with kachumbari', category: 'Grills', image: null },
//       { name: 'Beef Wet Fry', desc: 'Tender beef cooked with onions and peppers', category: 'Mains', image: null},
//       { name: 'Chicken Stew', desc: 'Traditional Kenyan chicken stew', category: 'Stews', image: null },
//       { name: 'Fish Fry (Tilapia)', desc: 'Deep fried whole tilapia', category: 'Grills', image: null },
//       { name: 'Chapatti (2 pcs)', desc: 'Soft layered flatbread', category: 'Sides', image: chapatti },
//       { name: 'Chapatti & Beef Stew', desc: 'Chapatti served with rich beef stew', category: 'Combos', image: null},
//       { name: 'Chapatti & Chicken Stew', desc: 'Chapatti with traditional chicken stew', category: 'Combos', image: null },
//       { name: 'Ugali & Sukuma Wiki', desc: 'Maize meal with sautéed kale', category: 'Traditional', image: null },
//       { name: 'Ugali, Beef & Sukuma', desc: 'Complete traditional meal', category: 'Traditional', image: null },
//       { name: 'Pilau (Beef)', desc: 'Spiced rice with tender beef', category: 'Rice Dishes', image: null },
//       { name: 'Pilau (Chicken)', desc: 'Spiced rice with chicken', category: 'Rice Dishes', image: null },
//       { name: 'Githeri', desc: 'Mixed maize and beans', category: 'Traditional', image: null },
//       { name: 'Mukimo', desc: 'Mashed potatoes, peas, and corn', category: 'Traditional', image:  null },
//       { name: 'Samosa (Beef) - 3 pcs', desc: 'Crispy pastry filled with spiced beef', category: 'Snacks', image:null },
//       { name: 'Samosa (Veg) - 3 pcs', desc: 'Crispy pastry filled with vegetables', category: 'Snacks', image: null },
//       { name: 'Maandazi (4 pcs)', desc: 'Sweet fried dough', category: 'Snacks', image: null },
//     ],
//     coffee: [
//       { name: 'Espresso', desc: 'Strong, rich coffee shot', category: 'Hot Coffee', image: null },
//       { name: 'Americano', desc: 'Espresso with hot water', category: 'Hot Coffee', image: null },
//       { name: 'Cappuccino', desc: 'Espresso with steamed milk and foam', category: 'Hot Coffee', image: null },
//       { name: 'Latte', desc: 'Espresso with steamed milk', category: 'Hot Coffee', image: null },
//       { name: 'Flat White', desc: 'Espresso with microfoam milk', category: 'Hot Coffee', image: null },
//       { name: 'Mocha', desc: 'Espresso, chocolate, steamed milk', category: 'Hot Coffee', image: null },
//       { name: 'Iced Coffee', desc: 'Cold brewed coffee over ice', category: 'Cold Coffee', image: null },
//       { name: 'Iced Latte', desc: 'Espresso with cold milk over ice', category: 'Cold Coffee', image: null },
//       { name: 'Iced Mocha', desc: 'Cold espresso, chocolate, milk', category: 'Cold Coffee', image: null },
//       { name: 'Hot Chocolate', desc: 'Rich chocolate with steamed milk', category: 'Hot Beverages', image: null},
//       { name: 'Masala Chai', desc: 'Spiced tea with milk', category: 'Hot Beverages', image:  null },
//       { name: 'English Breakfast Tea', desc: 'Classic black tea', category: 'Hot Beverages', image: null },
//       { name: 'Croissant', desc: 'Buttery, flaky pastry', category: 'Pastries', image: null },
//       { name: 'Chocolate Muffin', desc: 'Moist chocolate muffin', category: 'Pastries', image: null },
//       { name: 'Blueberry Muffin', desc: 'Fresh blueberry muffin', category: 'Pastries', image: null },
//       { name: 'Cinnamon Roll', desc: 'Sweet cinnamon swirl with icing', category: 'Pastries', image: null },
//       { name: 'Cheesecake Slice', desc: 'Creamy New York style cheesecake', category: 'Desserts', image: null },
//       { name: 'Chocolate Cake Slice', desc: 'Rich chocolate layer cake', category: 'Desserts', image:  null },
//       { name: 'Tiramisu', desc: 'Italian coffee-flavored dessert', category: 'Desserts', image: null },
//       { name: 'Ice Cream Sundae', desc: 'Vanilla ice cream with toppings', category: 'Desserts', image: null },
//     ],
//     beverages: [
//       { name: 'Coca Cola', desc: '330ml bottle', category: 'Soft Drinks', image: null },
//       { name: 'Fanta Orange', desc: '330ml bottle', category: 'Soft Drinks', image: null },
//       { name: 'Sprite', desc: '330ml bottle', category: 'Soft Drinks', image: null },
//       { name: 'Bottled Water', desc: '500ml', category: 'Water', image: null },
//       { name: 'Sparkling Water', desc: '500ml', category: 'Water', image: null },
//       { name: 'Fresh Orange Juice', desc: 'Freshly squeezed', category: 'Fresh Juices', image: null },
//       { name: 'Fresh Passion Juice', desc: 'Freshly made', category: 'Fresh Juices', image: null },
//       { name: 'Fresh Mango Juice', desc: 'Seasonal, freshly blended', category: 'Fresh Juices', image: null },
//       { name: 'Watermelon Juice', desc: 'Fresh and refreshing', category: 'Fresh Juices', image: null },
//       { name: 'Mixed Fruit Smoothie', desc: 'Blend of seasonal fruits', category: 'Smoothies', image: null },
//       { name: 'Berry Smoothie', desc: 'Mixed berries with yogurt', category: 'Smoothies', image:  null },
//       { name: 'Mango Smoothie', desc: 'Creamy mango blend', category: 'Smoothies', image: null },
//       { name: 'Tusker Lager', desc: '500ml bottle', category: 'Beer', image: null },
//       { name: 'White Cap', desc: '500ml bottle', category: 'Beer', image:   null },
//       { name: 'Guinness', desc: '500ml bottle', category: 'Beer', image: null },
//       { name: 'House Red Wine', desc: 'Glass', category: 'Wine', image: null },
//       { name: 'House White Wine', desc: 'Glass', category: 'Wine', image: null },
//       { name: 'Wine Bottle (Red/White)', desc: 'Full bottle', category: 'Wine', image:  null },
//     ],
//   };

//   const categories = [
//     { id: 'european', name: 'European Classics', icon: Utensils },
//     { id: 'kenyan', name: 'Kenyan Favorites', icon: Utensils },
//     { id: 'coffee', name: 'Coffee Bar & Desserts', icon: Coffee },
//     { id: 'beverages', name: 'Beverages', icon: Wine },
//   ];

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const groupedItems = menuData[activeCategory].reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen bg-black">
//       {/* Navigation with Category Tabs */}
//       <nav className="fixed top-0 w-full bg-black shadow-lg z-50 border-b border-yellow-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <Link to="/" className="text-2xl font-bold text-yellow-500">Iten Club Menu</Link>
//             </div>
//             <div className="flex space-x-6">
//               <Link to="/" className="text-gray-300 hover:text-yellow-500 transition">Home</Link>
//               <Link to="/gallery" className="text-gray-300 hover:text-yellow-500 transition">Gallery</Link>
//               <Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition">Contact</Link>
//               <Link to="/reservation" className="text-gray-300 hover:text-yellow-500 transition">Reserve</Link>
//             </div>
//           </div>
//         </div>

//         {/* Category Tabs in Navigation */}
//         <div className="bg-gray-900 border-t border-yellow-600">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex overflow-x-auto">
//               {categories.map((category) => {
//                 const Icon = category.icon;
//                 return (
//                   <button
//                     key={category.id}
//                     onClick={() => {
//                       setActiveCategory(category.id);
//                       scrollToTop();
//                     }}
//                     className={`flex items-center space-x-2 px-6 py-4 whitespace-nowrap transition border-b-2 ${
//                       activeCategory === category.id
//                         ? 'border-yellow-500 text-yellow-500'
//                         : 'border-transparent text-gray-300 hover:text-yellow-500'
//                     }`}
//                   >
//                     <Icon size={20} />
//                     <span className="font-semibold">{category.name}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section with Background Image Carousel */}
//       <section className="pt-32 pb-12 relative overflow-hidden min-h-96">
//         {menuImages.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
//               index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{ backgroundImage: `url(${image})` }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-80"></div>
//           </div>
//         ))}

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Our <span className="text-yellow-500">Menu</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             A delicious fusion of European and Kenyan cuisines, plus premium coffee and beverages
//           </p>
//         </div>
//       </section>

//       {/* Menu Items */}
//       <section id="menu" className="py-12 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {Object.entries(groupedItems).map(([categoryName, items]) => (
//             <div key={categoryName} className="mb-12">
//               <h2 className="text-3xl font-bold text-yellow-500 mb-6 border-b border-yellow-600 pb-2">
//                 {categoryName}
//               </h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 {items.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-900 border border-yellow-600 rounded-lg overflow-hidden hover:shadow-xl hover:border-yellow-500 transition"
//                   >
//                     {item.image && (
//                       <div className="w-full h-48 overflow-hidden">
//                         <img
//                           src={item.image}
//                           alt={item.name}
//                           className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
//                         />
//                       </div>
//                     )}
//                     <div className="p-6">
//                       <div className="flex justify-between items-start mb-2">
//                         <h3 className="text-xl font-bold text-white">{item.name}</h3>
//                         <span className="text-xl font-bold text-yellow-500 ml-4">{item.price}</span>
//                       </div>
//                       <p className="text-gray-400">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
//           <p className="text-xl mb-8">
//             Visit us today and experience the best of European and Kenyan cuisine
//           </p>
//           <Link to="/reservation" className="px-8 py-4 bg-black text-yellow-500 rounded-lg hover:bg-gray-900 transition text-lg font-semibold">
//             Make a Reservation
//           </Link>
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
//               <h4 className="text-lg font-bold mb-4 text-yellow-500">Opening Hours</h4>
//               <p className="text-gray-400">Monday - Sunday</p>
//               <p className="text-gray-400">8:00 AM - 9:00 PM</p>
//               <p className="text-gray-400 text-sm mt-2">Coffee Bar open all day</p>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-bold mb-4 text-yellow-500">Location</h4>
//               <p className="text-gray-400">Iten, Kenya</p>
//               <p className="text-gray-400">High Altitude road, Iten, 30700, KE</p>
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


















// import { useState, useEffect } from 'react';
// import { Coffee, Utensils, Wine } from 'lucide-react';
// import { Link } from 'react-router-dom';
// import menuImage1 from '../assets/food/chapostew.png';
// import menuImage2 from '../assets/food/chips.png'
// import menuImage3 from '../assets/food/coffee.png';
// import menuImage4 from '../assets/food/latee.png';
// // import menuImage5 from '../assets/menu-image-5.jpg';
// // import menuImage6 from '../assets/menu-image-6.jpg';

// function App() {
//   const [activeCategory, setActiveCategory] = useState('european');
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const menuImages = [menuImage1,menuImage2,menuImage3,menuImage4];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % menuImages.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const menuData = {
//     european: [
//       { name: 'Margherita Pizza', desc: 'Fresh mozzarella, tomato sauce, basil', category: 'Pizza' },
//       { name: 'Pepperoni Pizza',  desc: 'Pepperoni, mozzarella, tomato sauce', category: 'Pizza' },
//       { name: 'BBQ Chicken Pizza',  desc: 'Grilled chicken, BBQ sauce, onions, mozzarella', category: 'Pizza' },
//       { name: 'Hawaiian Pizza',  desc: 'Ham, pineapple, mozzarella, tomato sauce', category: 'Pizza' },
//       { name: 'Vegetarian Pizza',  desc: 'Bell peppers, mushrooms, olives, onions, mozzarella', category: 'Pizza' },
//       { name: 'Classic Beef Burger',  desc: 'Angus beef patty, lettuce, tomato, cheese, special sauce', category: 'Burgers' },
//       { name: 'Chicken Burger',  desc: 'Crispy chicken, lettuce, mayo, pickles', category: 'Burgers' },
//       { name: 'Veggie Burger',  desc: 'Plant-based patty, avocado, lettuce, tomato', category: 'Burgers' },
//       { name: 'Bacon Cheeseburger', desc: 'Beef patty, bacon, double cheese, caramelized onions', category: 'Burgers' },
//       { name: 'Spaghetti Carbonara',  desc: 'Creamy sauce, bacon, parmesan, black pepper', category: 'Pasta' },
//       { name: 'Penne Arrabbiata',  desc: 'Spicy tomato sauce, garlic, chili flakes', category: 'Pasta' },
//       { name: 'Chicken Alfredo',  desc: 'Grilled chicken, creamy alfredo sauce, fettuccine', category: 'Pasta' },
//       { name: 'Grilled Chicken Schnitzel',  desc: 'Breaded chicken breast, served with fries and salad', category: 'Mains' },
//       { name: 'Fish & Chips',  desc: 'Battered fish fillet, crispy fries, tartar sauce', category: 'Mains' },
//     ],
//     kenyan: [
//       { name: 'Nyama Choma',  desc: 'Grilled goat meat with kachumbari', category: 'Grills' },
//       { name: 'Beef Wet Fry',  desc: 'Tender beef cooked with onions and peppers', category: 'Mains' },
//       { name: 'Chicken Stew',  desc: 'Traditional Kenyan chicken stew', category: 'Stews' },
//       { name: 'Fish Fry (Tilapia)',  desc: 'Deep fried whole tilapia', category: 'Grills' },
//       { name: 'Chapatti (2 pcs)',  desc: 'Soft layered flatbread', category: 'Sides' },
//       { name: 'Chapatti & Beef Stew',  desc: 'Chapatti served with rich beef stew', category: 'Combos' },
//       { name: 'Chapatti & Chicken Stew',  desc: 'Chapatti with traditional chicken stew', category: 'Combos' },
//       { name: 'Ugali & Sukuma Wiki',  desc: 'Maize meal with sautéed kale', category: 'Traditional' },
//       { name: 'Ugali, Beef & Sukuma',  desc: 'Complete traditional meal', category: 'Traditional' },
//       { name: 'Pilau (Beef)',  desc: 'Spiced rice with tender beef', category: 'Rice Dishes' },
//       { name: 'Pilau (Chicken)', desc: 'Spiced rice with chicken', category: 'Rice Dishes' },
//       { name: 'Githeri',  desc: 'Mixed maize and beans', category: 'Traditional' },
//       { name: 'Mukimo',  desc: 'Mashed potatoes, peas, and corn', category: 'Traditional' },
//       { name: 'Samosa (Beef) - 3 pcs',  desc: 'Crispy pastry filled with spiced beef', category: 'Snacks' },
//       { name: 'Samosa (Veg) - 3 pcs',  desc: 'Crispy pastry filled with vegetables', category: 'Snacks' },
//       { name: 'Maandazi (4 pcs)',  desc: 'Sweet fried dough', category: 'Snacks' },
//     ],
//     coffee: [
//       { name: 'Espresso',  desc: 'Strong, rich coffee shot', category: 'Hot Coffee' },
//       { name: 'Americano',  desc: 'Espresso with hot water', category: 'Hot Coffee' },
//       { name: 'Cappuccino',  desc: 'Espresso with steamed milk and foam', category: 'Hot Coffee' },
//       { name: 'Latte',  desc: 'Espresso with steamed milk', category: 'Hot Coffee' },
//       { name: 'Flat White',  desc: 'Espresso with microfoam milk', category: 'Hot Coffee' },
//       { name: 'Mocha',  desc: 'Espresso, chocolate, steamed milk', category: 'Hot Coffee' },
//       { name: 'Iced Coffee',  desc: 'Cold brewed coffee over ice', category: 'Cold Coffee' },
//       { name: 'Iced Latte',  desc: 'Espresso with cold milk over ice', category: 'Cold Coffee' },
//       { name: 'Iced Mocha',  desc: 'Cold espresso, chocolate, milk', category: 'Cold Coffee' },
//       { name: 'Hot Chocolate', desc: 'Rich chocolate with steamed milk', category: 'Hot Beverages' },
//       { name: 'Masala Chai',  desc: 'Spiced tea with milk', category: 'Hot Beverages' },
//       { name: 'English Breakfast Tea',  desc: 'Classic black tea', category: 'Hot Beverages' },
//       { name: 'Croissant',  desc: 'Buttery, flaky pastry', category: 'Pastries' },
//       { name: 'Chocolate Muffin',  desc: 'Moist chocolate muffin', category: 'Pastries' },
//       { name: 'Blueberry Muffin',  desc: 'Fresh blueberry muffin', category: 'Pastries' },
//       { name: 'Cinnamon Roll',  desc: 'Sweet cinnamon swirl with icing', category: 'Pastries' },
//       { name: 'Cheesecake Slice',  desc: 'Creamy New York style cheesecake', category: 'Desserts' },
//       { name: 'Chocolate Cake Slice',  desc: 'Rich chocolate layer cake', category: 'Desserts' },
//       { name: 'Tiramisu',  desc: 'Italian coffee-flavored dessert', category: 'Desserts' },
//       { name: 'Ice Cream Sundae',  desc: 'Vanilla ice cream with toppings', category: 'Desserts' },
//     ],
//     beverages: [
//       { name: 'Coca Cola',  desc: '330ml bottle', category: 'Soft Drinks' },
//       { name: 'Fanta Orange',  desc: '330ml bottle', category: 'Soft Drinks' },
//       { name: 'Sprite',  desc: '330ml bottle', category: 'Soft Drinks' },
//       { name: 'Bottled Water',  desc: '500ml', category: 'Water' },
//       { name: 'Sparkling Water',  desc: '500ml', category: 'Water' },
//       { name: 'Fresh Orange Juice',  desc: 'Freshly squeezed', category: 'Fresh Juices' },
//       { name: 'Fresh Passion Juice',  desc: 'Freshly made', category: 'Fresh Juices' },
//       { name: 'Fresh Mango Juice',  desc: 'Seasonal, freshly blended', category: 'Fresh Juices' },
//       { name: 'Watermelon Juice',  desc: 'Fresh and refreshing', category: 'Fresh Juices' },
//       { name: 'Mixed Fruit Smoothie',  desc: 'Blend of seasonal fruits', category: 'Smoothies' },
//       { name: 'Berry Smoothie',  desc: 'Mixed berries with yogurt', category: 'Smoothies' },
//       { name: 'Mango Smoothie',  desc: 'Creamy mango blend', category: 'Smoothies' },
//       { name: 'Tusker Lager',  desc: '500ml bottle', category: 'Beer' },
//       { name: 'White Cap',  desc: '500ml bottle', category: 'Beer' },
//       { name: 'Guinness',  desc: '500ml bottle', category: 'Beer' },
//       { name: 'House Red Wine',  desc: 'Glass', category: 'Wine' },
//       { name: 'House White Wine',  desc: 'Glass', category: 'Wine' },
//       { name: 'Wine Bottle (Red/White)',  desc: 'Full bottle', category: 'Wine' },
//     ],
//   };

//   const categories = [
//     { id: 'european', name: 'European Classics', icon: Utensils },
//     { id: 'kenyan', name: 'Kenyan Favorites', icon: Utensils },
//     { id: 'coffee', name: 'Coffee Bar & Desserts', icon: Coffee },
//     { id: 'beverages', name: 'Beverages', icon: Wine },
//   ];

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   const groupedItems = menuData[activeCategory].reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen bg-black">
//       {/* Navigation with Category Tabs */}
//       <nav className="fixed top-0 w-full bg-black shadow-lg z-50 border-b border-yellow-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <Link to="/" className="text-2xl font-bold text-yellow-500">Iten Club Menu</Link>
              
//             </div>
//             <div className="flex space-x-6" >
//               <Link to="/" className="text-gray-300 hover:text-yellow-500 transition">Home</Link>
//               <Link to="/gallery" className="text-gray-300 hover:text-yellow-500 transition">Gallery</Link>
//               <Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition">Contact</Link>
//               <Link to="/reservation" className="text-gray-300 hover:text-yellow-500 transition">Reserve</Link>
//               </div>
//           </div>
//         </div>

//         {/* Category Tabs in Navigation */}
//         <div className="bg-gray-900 border-t border-yellow-600">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex overflow-x-auto">
//               {categories.map((category) => {
//                 const Icon = category.icon;
//                 return (
//                   <button
//                     key={category.id}
//                     onClick={() => {
//                       setActiveCategory(category.id);
//                       scrollToTop();
//                     }}
//                     className={`flex items-center space-x-2 px-6 py-4 whitespace-nowrap transition border-b-2 ${
//                       activeCategory === category.id
//                         ? 'border-yellow-500 text-yellow-500'
//                         : 'border-transparent text-gray-300 hover:text-yellow-500'
//                     }`}
//                   >
//                     <Icon size={20} />
//                     <span className="font-semibold">{category.name}</span>
//                   </button>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section with Background Image Carousel */}
//       <section className="pt-32 pb-12 relative overflow-hidden min-h-96">
//         {menuImages.map((image, index) => (
//           <div
//             key={index}
//             className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
//               index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//             }`}
//             style={{ backgroundImage: `url(${image})` }}
//           >
//             <div className="absolute inset-0 bg-black bg-opacity-80"></div>
//           </div>
//         ))}

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Our <span className="text-yellow-500">Menu</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             A delicious fusion of European and Kenyan cuisines, plus premium coffee and beverages
//           </p>
//         </div>
//       </section>

//       {/* Menu Items */}
//       <section id="menu" className="py-12 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {Object.entries(groupedItems).map(([categoryName, items]) => (
//             <div key={categoryName} className="mb-12">
//               <h2 className="text-3xl font-bold text-yellow-500 mb-6 border-b border-yellow-600 pb-2">
//                 {categoryName}
//               </h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 {items.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-900 border border-yellow-600 rounded-lg p-6 hover:shadow-xl hover:border-yellow-500 transition"
//                   >
//                     <div className="flex justify-between items-start mb-2">
//                       <h3 className="text-xl font-bold text-white">{item.name}</h3>
//                       <span className="text-xl font-bold text-yellow-500 ml-4">{item.price}</span>
//                     </div>
//                     <p className="text-gray-400">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
//           <p className="text-xl mb-8">
//             Visit us today and experience the best of European and Kenyan cuisine
//           </p>
//           <Link to="/reservation" className="px-8 py-4 bg-black text-yellow-500 rounded-lg hover:bg-gray-900 transition text-lg font-semibold">
//           Make a Reservation
//           </Link>
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
//               <h4 className="text-lg font-bold mb-4 text-yellow-500">Opening Hours</h4>
//               <p className="text-gray-400">Monday - Sunday</p>
//               <p className="text-gray-400">8:00 AM - 9:00 PM</p>
//               <p className="text-gray-400 text-sm mt-2">Coffee Bar open all day</p>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-bold mb-4 text-yellow-500">Location</h4>
//               <p className="text-gray-400">Iten, Kenya</p>
//               <p className="text-gray-400">High Altitude road, Iten, 30700, KE</p>
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
















































// import { useState } from 'react';
// import { Coffee, Utensils, Wine, Menu as MenuIcon, X } from 'lucide-react';

// function App() {
//   const [activeCategory, setActiveCategory] = useState('european');
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const menuData = {
//     european: [
//       { name: 'Margherita Pizza', price: 'KSh 850', desc: 'Fresh mozzarella, tomato sauce, basil', category: 'Pizza' },
//       { name: 'Pepperoni Pizza', price: 'KSh 950', desc: 'Pepperoni, mozzarella, tomato sauce', category: 'Pizza' },
//       { name: 'BBQ Chicken Pizza', price: 'KSh 1,100', desc: 'Grilled chicken, BBQ sauce, onions, mozzarella', category: 'Pizza' },
//       { name: 'Hawaiian Pizza', price: 'KSh 1,000', desc: 'Ham, pineapple, mozzarella, tomato sauce', category: 'Pizza' },
//       { name: 'Vegetarian Pizza', price: 'KSh 900', desc: 'Bell peppers, mushrooms, olives, onions, mozzarella', category: 'Pizza' },
//       { name: 'Classic Beef Burger', price: 'KSh 750', desc: 'Angus beef patty, lettuce, tomato, cheese, special sauce', category: 'Burgers' },
//       { name: 'Chicken Burger', price: 'KSh 700', desc: 'Crispy chicken, lettuce, mayo, pickles', category: 'Burgers' },
//       { name: 'Veggie Burger', price: 'KSh 650', desc: 'Plant-based patty, avocado, lettuce, tomato', category: 'Burgers' },
//       { name: 'Bacon Cheeseburger', price: 'KSh 850', desc: 'Beef patty, bacon, double cheese, caramelized onions', category: 'Burgers' },
//       { name: 'Spaghetti Carbonara', price: 'KSh 800', desc: 'Creamy sauce, bacon, parmesan, black pepper', category: 'Pasta' },
//       { name: 'Penne Arrabbiata', price: 'KSh 750', desc: 'Spicy tomato sauce, garlic, chili flakes', category: 'Pasta' },
//       { name: 'Chicken Alfredo', price: 'KSh 950', desc: 'Grilled chicken, creamy alfredo sauce, fettuccine', category: 'Pasta' },
//       { name: 'Grilled Chicken Schnitzel', price: 'KSh 1,000', desc: 'Breaded chicken breast, served with fries and salad', category: 'Mains' },
//       { name: 'Fish & Chips', price: 'KSh 900', desc: 'Battered fish fillet, crispy fries, tartar sauce', category: 'Mains' },
//     ],
//     kenyan: [
//       { name: 'Nyama Choma', price: 'KSh 1,200', desc: 'Grilled goat meat with kachumbari', category: 'Grills' },
//       { name: 'Beef Wet Fry', price: 'KSh 800', desc: 'Tender beef cooked with onions and peppers', category: 'Mains' },
//       { name: 'Chicken Stew', price: 'KSh 700', desc: 'Traditional Kenyan chicken stew', category: 'Stews' },
//       { name: 'Fish Fry (Tilapia)', price: 'KSh 900', desc: 'Deep fried whole tilapia', category: 'Grills' },
//       { name: 'Chapatti (2 pcs)', price: 'KSh 100', desc: 'Soft layered flatbread', category: 'Sides' },
//       { name: 'Chapatti & Beef Stew', price: 'KSh 450', desc: 'Chapatti served with rich beef stew', category: 'Combos' },
//       { name: 'Chapatti & Chicken Stew', price: 'KSh 400', desc: 'Chapatti with traditional chicken stew', category: 'Combos' },
//       { name: 'Ugali & Sukuma Wiki', price: 'KSh 300', desc: 'Maize meal with sautéed kale', category: 'Traditional' },
//       { name: 'Ugali, Beef & Sukuma', price: 'KSh 600', desc: 'Complete traditional meal', category: 'Traditional' },
//       { name: 'Pilau (Beef)', price: 'KSh 500', desc: 'Spiced rice with tender beef', category: 'Rice Dishes' },
//       { name: 'Pilau (Chicken)', price: 'KSh 450', desc: 'Spiced rice with chicken', category: 'Rice Dishes' },
//       { name: 'Githeri', price: 'KSh 250', desc: 'Mixed maize and beans', category: 'Traditional' },
//       { name: 'Mukimo', price: 'KSh 300', desc: 'Mashed potatoes, peas, and corn', category: 'Traditional' },
//       { name: 'Samosa (Beef) - 3 pcs', price: 'KSh 150', desc: 'Crispy pastry filled with spiced beef', category: 'Snacks' },
//       { name: 'Samosa (Veg) - 3 pcs', price: 'KSh 120', desc: 'Crispy pastry filled with vegetables', category: 'Snacks' },
//       { name: 'Maandazi (4 pcs)', price: 'KSh 100', desc: 'Sweet fried dough', category: 'Snacks' },
//     ],
//     coffee: [
//       { name: 'Espresso', price: 'KSh 200', desc: 'Strong, rich coffee shot', category: 'Hot Coffee' },
//       { name: 'Americano', price: 'KSh 250', desc: 'Espresso with hot water', category: 'Hot Coffee' },
//       { name: 'Cappuccino', price: 'KSh 300', desc: 'Espresso with steamed milk and foam', category: 'Hot Coffee' },
//       { name: 'Latte', price: 'KSh 320', desc: 'Espresso with steamed milk', category: 'Hot Coffee' },
//       { name: 'Flat White', price: 'KSh 300', desc: 'Espresso with microfoam milk', category: 'Hot Coffee' },
//       { name: 'Mocha', price: 'KSh 350', desc: 'Espresso, chocolate, steamed milk', category: 'Hot Coffee' },
//       { name: 'Iced Coffee', price: 'KSh 280', desc: 'Cold brewed coffee over ice', category: 'Cold Coffee' },
//       { name: 'Iced Latte', price: 'KSh 330', desc: 'Espresso with cold milk over ice', category: 'Cold Coffee' },
//       { name: 'Iced Mocha', price: 'KSh 360', desc: 'Cold espresso, chocolate, milk', category: 'Cold Coffee' },
//       { name: 'Hot Chocolate', price: 'KSh 280', desc: 'Rich chocolate with steamed milk', category: 'Hot Beverages' },
//       { name: 'Masala Chai', price: 'KSh 200', desc: 'Spiced tea with milk', category: 'Hot Beverages' },
//       { name: 'English Breakfast Tea', price: 'KSh 150', desc: 'Classic black tea', category: 'Hot Beverages' },
//       { name: 'Croissant', price: 'KSh 180', desc: 'Buttery, flaky pastry', category: 'Pastries' },
//       { name: 'Chocolate Muffin', price: 'KSh 200', desc: 'Moist chocolate muffin', category: 'Pastries' },
//       { name: 'Blueberry Muffin', price: 'KSh 200', desc: 'Fresh blueberry muffin', category: 'Pastries' },
//       { name: 'Cinnamon Roll', price: 'KSh 220', desc: 'Sweet cinnamon swirl with icing', category: 'Pastries' },
//       { name: 'Cheesecake Slice', price: 'KSh 350', desc: 'Creamy New York style cheesecake', category: 'Desserts' },
//       { name: 'Chocolate Cake Slice', price: 'KSh 300', desc: 'Rich chocolate layer cake', category: 'Desserts' },
//       { name: 'Tiramisu', price: 'KSh 400', desc: 'Italian coffee-flavored dessert', category: 'Desserts' },
//       { name: 'Ice Cream Sundae', price: 'KSh 350', desc: 'Vanilla ice cream with toppings', category: 'Desserts' },
//     ],
//     beverages: [
//       { name: 'Coca Cola', price: 'KSh 100', desc: '330ml bottle', category: 'Soft Drinks' },
//       { name: 'Fanta Orange', price: 'KSh 100', desc: '330ml bottle', category: 'Soft Drinks' },
//       { name: 'Sprite', price: 'KSh 100', desc: '330ml bottle', category: 'Soft Drinks' },
//       { name: 'Bottled Water', price: 'KSh 50', desc: '500ml', category: 'Water' },
//       { name: 'Sparkling Water', price: 'KSh 120', desc: '500ml', category: 'Water' },
//       { name: 'Fresh Orange Juice', price: 'KSh 250', desc: 'Freshly squeezed', category: 'Fresh Juices' },
//       { name: 'Fresh Passion Juice', price: 'KSh 280', desc: 'Freshly made', category: 'Fresh Juices' },
//       { name: 'Fresh Mango Juice', price: 'KSh 300', desc: 'Seasonal, freshly blended', category: 'Fresh Juices' },
//       { name: 'Watermelon Juice', price: 'KSh 250', desc: 'Fresh and refreshing', category: 'Fresh Juices' },
//       { name: 'Mixed Fruit Smoothie', price: 'KSh 350', desc: 'Blend of seasonal fruits', category: 'Smoothies' },
//       { name: 'Berry Smoothie', price: 'KSh 380', desc: 'Mixed berries with yogurt', category: 'Smoothies' },
//       { name: 'Mango Smoothie', price: 'KSh 350', desc: 'Creamy mango blend', category: 'Smoothies' },
//       { name: 'Tusker Lager', price: 'KSh 300', desc: '500ml bottle', category: 'Beer' },
//       { name: 'White Cap', price: 'KSh 250', desc: '500ml bottle', category: 'Beer' },
//       { name: 'Guinness', price: 'KSh 350', desc: '500ml bottle', category: 'Beer' },
//       { name: 'House Red Wine', price: 'KSh 600', desc: 'Glass', category: 'Wine' },
//       { name: 'House White Wine', price: 'KSh 600', desc: 'Glass', category: 'Wine' },
//       { name: 'Wine Bottle (Red/White)', price: 'KSh 2,500', desc: 'Full bottle', category: 'Wine' },
//     ],
//   };

//   const categories = [
//     { id: 'european', name: 'European Classics', icon: Utensils },
//     { id: 'kenyan', name: 'Kenyan Favorites', icon: Utensils },
//     { id: 'coffee', name: 'Coffee Bar & Desserts', icon: Coffee },
//     { id: 'beverages', name: 'Beverages', icon: Wine },
//   ];

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // Group menu items by category
//   const groupedItems = menuData[activeCategory].reduce((acc, item) => {
//     if (!acc[item.category]) {
//       acc[item.category] = [];
//     }
//     acc[item.category].push(item);
//     return acc;
//   }, {});

//   return (
//     <div className="min-h-screen bg-black">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-black shadow-lg z-50 border-b border-yellow-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold text-yellow-500">Iten Club</h1>
//             </div>
            
//             <div className="hidden md:flex space-x-8">
//               <a href="#" className="text-gray-300 hover:text-yellow-500 transition">Home</a>
//               <a href="#menu" className="text-yellow-500">Menu</a>
//               <a href="#" className="text-gray-300 hover:text-yellow-500 transition">About</a>
//               <a href="#" className="text-gray-300 hover:text-yellow-500 transition">Contact</a>
//             </div>

//             <button 
//               className="md:hidden text-yellow-500"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
//             </button>
//           </div>
//         </div>

//         {mobileMenuOpen && (
//           <div className="md:hidden bg-black border-t border-yellow-600">
//             <div className="px-2 pt-2 pb-3 space-y-1">
//               <a href="#" className="block px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">Home</a>
//               <a href="#menu" className="block px-3 py-2 text-yellow-500">Menu</a>
//               <a href="#" className="block px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">About</a>
//               <a href="#" className="block px-3 py-2 text-gray-300 hover:bg-gray-900 hover:text-yellow-500">Contact</a>
//             </div>
//           </div>
//         )}
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-24 pb-12 bg-gradient-to-br from-black via-gray-900 to-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
//             Our <span className="text-yellow-500">Menu</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             A delicious fusion of European and Kenyan cuisines, plus premium coffee and beverages
//           </p>
//         </div>
//       </section>

//       {/* Category Tabs */}
//       <section className="sticky top-16 bg-gray-900 border-b border-yellow-600 z-40">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex overflow-x-auto">
//             {categories.map((category) => {
//               const Icon = category.icon;
//               return (
//                 <button
//                   key={category.id}
//                   onClick={() => {
//                     setActiveCategory(category.id);
//                     scrollToTop();
//                   }}
//                   className={`flex items-center space-x-2 px-6 py-4 whitespace-nowrap transition border-b-2 ${
//                     activeCategory === category.id
//                       ? 'border-yellow-500 text-yellow-500'
//                       : 'border-transparent text-gray-300 hover:text-yellow-500'
//                   }`}
//                 >
//                   <Icon size={20} />
//                   <span className="font-semibold">{category.name}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Menu Items */}
//       <section id="menu" className="py-12 bg-black">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {Object.entries(groupedItems).map(([categoryName, items]) => (
//             <div key={categoryName} className="mb-12">
//               <h2 className="text-3xl font-bold text-yellow-500 mb-6 border-b border-yellow-600 pb-2">
//                 {categoryName}
//               </h2>
//               <div className="grid md:grid-cols-2 gap-6">
//                 {items.map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-gray-900 border border-yellow-600 rounded-lg p-6 hover:shadow-xl hover:border-yellow-500 transition"
//                   >
//                     <div className="flex justify-between items-start mb-2">
//                       <h3 className="text-xl font-bold text-white">{item.name}</h3>
//                       <span className="text-xl font-bold text-yellow-500 ml-4">{item.price}</span>
//                     </div>
//                     <p className="text-gray-400">{item.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-r from-yellow-600 to-yellow-700 text-black">
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <h2 className="text-4xl font-bold mb-4">Ready to Order?</h2>
//           <p className="text-xl mb-8">
//             Visit us today and experience the best of European and Kenyan cuisine
//           </p>
//           <button className="px-8 py-4 bg-black text-yellow-500 rounded-lg hover:bg-gray-900 transition text-lg font-semibold">
//             Make a Reservation
//           </button>
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
//               <h4 className="text-lg font-bold mb-4 text-yellow-500">Opening Hours</h4>
//               <p className="text-gray-400">Monday - Sunday</p>
//               <p className="text-gray-400">7:00 AM - 10:00 PM</p>
//               <p className="text-gray-400 text-sm mt-2">Coffee Bar open all day</p>
//             </div>
            
//             <div>
//               <h4 className="text-lg font-bold mb-4 text-yellow-500">Location</h4>
//               <p className="text-gray-400">Iten, Kenya</p>
//               <p className="text-gray-400">Outside HATC Compound</p>
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