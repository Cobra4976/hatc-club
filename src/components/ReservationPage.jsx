import { useState } from 'react';
import { Calendar, Clock, Users, MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    seating: 'No Preference',
    occasion: 'Casual Dining',
    specialRequests: '',
    hearAboutUs: 'Walk-in'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        seating: 'No Preference',
        occasion: 'Casual Dining',
        specialRequests: '',
        hearAboutUs: 'Walk-in'
      });
    }, 5000);
  };

  const timeSlots = [
    '07:00 AM', '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
  ];

  const popularTimes = [
    { time: '7-9 AM', status: 'Moderate', color: 'bg-yellow-600' },
    { time: '9-12 PM', status: 'Quiet', color: 'bg-green-600' },
    { time: '12-3 PM', status: 'Busy', color: 'bg-red-600' },
    { time: '3-6 PM', status: 'Moderate', color: 'bg-yellow-600' },
    { time: '6-9 PM', status: 'Very Busy', color: 'bg-red-700' },
    { time: '9-10 PM', status: 'Quiet', color: 'bg-green-600' },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black shadow-lg z-50 border-b border-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-yellow-500">Iten Club</h1>
            </div>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-300 hover:text-yellow-500 transition">Home</Link>
             <Link to="/menu" className="text-gray-300 hover:text-yellow-500 transition">Menu</Link>
             <Link to="/gallery" className="text-gray-300 hover:text-yellow-500 transition">Gallery</Link>
              <Link to="/contact" className="text-gray-300 hover:text-yellow-500 transition">Contact</Link>
              <Link to="/reservation" className="text-yellow-500">Reserve</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Make a <span className="text-yellow-500">Reservation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Reserve your table at Iten Club and enjoy an unforgettable dining experience
          </p>
        </div>
      </section>

      {/* Success Message */}
      {isSubmitted && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="bg-green-900 border border-green-600 rounded-lg p-6 flex items-center space-x-4">
            <CheckCircle className="text-green-400" size={32} />
            <div>
              <h3 className="text-xl font-bold text-white">Reservation Confirmed!</h3>
              <p className="text-gray-300">Thank you! We've received your reservation and will send a confirmation email shortly.</p>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Reservation Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900 border border-yellow-600 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-yellow-500 mb-6">Reservation Details</h2>
                
                <div className="space-y-6">
                  {/* Personal Information */}
                  <div className="border-b border-gray-800 pb-6">
                    <h3 className="text-xl font-bold text-white mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2 font-semibold">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                          placeholder="John Doe"
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
                          placeholder="john@example.com"
                        />
                      </div>

                      <div className="md:col-span-2">
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
                    </div>
                  </div>

                  {/* Reservation Details */}
                  <div className="border-b border-gray-800 pb-6">
                    <h3 className="text-xl font-bold text-white mb-4">Reservation Details</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-300 mb-2 font-semibold">Date *</label>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2 font-semibold">Time *</label>
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2 font-semibold">Number of Guests *</label>
                        <input
                          type="number"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          min="1"
                          max="20"
                          className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                          placeholder="2"
                        />
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2 font-semibold">Seating Preference</label>
                        <select
                          name="seating"
                          value={formData.seating}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                        >
                          <option value="No Preference">No Preference</option>
                          <option value="Indoor">Indoor</option>
                          <option value="Outdoor">Outdoor</option>
                          <option value="Coffee Bar Area">Coffee Bar Area</option>
                        </select>
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-gray-300 mb-2 font-semibold">Occasion</label>
                        <select
                          name="occasion"
                          value={formData.occasion}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                        >
                          <option value="Casual Dining">Casual Dining</option>
                          <option value="Birthday">Birthday</option>
                          <option value="Anniversary">Anniversary</option>
                          <option value="Business Meeting">Business Meeting</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">Additional Information</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-gray-300 mb-2 font-semibold">Special Requests</label>
                        <textarea
                          name="specialRequests"
                          value={formData.specialRequests}
                          onChange={handleChange}
                          rows="4"
                          className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                          placeholder="Dietary restrictions, allergies, special arrangements..."
                        ></textarea>
                      </div>

                      <div>
                        <label className="block text-gray-300 mb-2 font-semibold">How did you hear about us?</label>
                        <select
                          name="hearAboutUs"
                          value={formData.hearAboutUs}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-black border border-yellow-600 rounded-lg text-white focus:outline-none focus:border-yellow-500"
                        >
                          <option value="Walk-in">Walk-in</option>
                          <option value="Google">Google</option>
                          <option value="Social Media">Social Media</option>
                          <option value="Friend/Family">Friend/Family</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="w-full px-6 py-4 bg-yellow-600 text-black rounded-lg hover:bg-yellow-500 transition text-lg font-semibold"
                  >
                    Confirm Reservation
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info Cards */}
              <div className="bg-gray-900 border border-yellow-600 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-yellow-500 mb-4">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-white font-semibold">Average Dining Time</p>
                      <p className="text-gray-400 text-sm">1-2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="text-yellow-500 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-white font-semibold">Parking</p>
                      <p className="text-gray-400 text-sm">Free parking available</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    {/* <Users className="text-yellow-500 flex-shrink-0 mt-1" size={20} /> */}
                    {/* <div>
                      <p className="text-white font-semibold">Dress Code</p>
                      <p className="text-gray-400 text-sm">Casual</p>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Popular Times */}
              <div className="bg-gray-900 border border-yellow-600 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-yellow-500 mb-4">Popular Times</h3>
                <div className="space-y-3">
                  {popularTimes.map((period, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-white font-semibold">{period.time}</span>
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 rounded-full ${period.color}`}></div>
                        <span className="text-gray-400 text-sm">{period.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact for Immediate Reservations */}
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl p-6 text-black">
                <h3 className="text-xl font-bold mb-3">Need Immediate Booking?</h3>
                <p className="mb-4">Call or WhatsApp us directly</p>
                <div className="space-y-2">
                  <a href="tel:+254700000000" className="flex items-center space-x-2 font-semibold hover:underline">
                    <Phone size={20} />
                    <span>+254 774700701</span>
                  </a>
                  <a href="mailto:info@itenclub.co.ke" className="flex items-center space-x-2 font-semibold hover:underline">
                    <Mail size={20} />
                    <span>info@itenclub.co.ke</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation Policies */}
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-yellow-500 mb-8 text-center">Reservation Policies</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-black border border-yellow-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">Cancellation Policy</h3>
              <p className="text-gray-300">
                Please notify us at least 2 hours in advance if you need to cancel or modify your reservation. Late cancellations may affect future bookings.
              </p>
            </div>

            <div className="bg-black border border-yellow-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">Arrival Time</h3>
              <p className="text-gray-300">
                Please arrive within 15 minutes of your reservation time. Tables are held for 15 minutes past the reservation time.
              </p>
            </div>

            <div className="bg-black border border-yellow-600 rounded-lg p-6">
              <h3 className="text-xl font-bold text-yellow-500 mb-3">Group Bookings</h3>
              <p className="text-gray-300">
                For parties of 8 or more, please call us directly. We can arrange special seating and menu options for large groups.
              </p>
            </div>
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