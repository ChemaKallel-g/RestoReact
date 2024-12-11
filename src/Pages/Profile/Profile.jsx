import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [checkoutHistory, setCheckoutHistory] = useState([
    { date: '2024-12-10', items: ['Pancakes', 'Coffee'], total: '16.00 TND' },
    { date: '2024-12-05', items: ['Burger', 'Fries'], total: '12.50 TND' },
  ]); // Sample checkout history data

  const navigate = useNavigate(); // Use navigate for navigation

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (!name || !email || !password) {
      setError('All fields are required');
      return;
    }

    setError(''); // Clear any previous errors

    // Example API call to update the profile
    updateProfile({ name, email, password })
      .then(() => {
        alert('Profile updated successfully!');
        navigate('/'); // Use navigate to redirect after saving the profile
      })
      .catch((error) => {
        setError('An error occurred while updating the profile.');
      });
  };

  // Placeholder function to simulate profile update (replace with real API logic)
  const updateProfile = async (profileData) => {
    console.log('Updating profile with:', profileData);
    // Replace with actual API call
    return new Promise((resolve) => setTimeout(resolve, 1000));
  };

  return (
    <div className="container p-6">
      <h2 className="text-3xl font-bold mb-6">Profile</h2>

      {/* Error message */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      <form onSubmit={handleSubmit}>
        {/* Name field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your name"
          />
        </div>

        {/* Email field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter your email"
          />
        </div>

        {/* Password field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter a new password"
          />
        </div>

        {/* Confirm Password field */}
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Confirm your password"
          />
        </div>

        {/* Submit button */}
        <button type="submit" className="w-full py-2 bg-cyan-900 text-white rounded-lg hover:bg-cyan-700">
          Save Changes
        </button>
      </form>

      {/* Checkout History Block */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-4">Checkout History</h3>
        {checkoutHistory.length > 0 ? (
          <div className="space-y-4">
            {checkoutHistory.map((historyItem, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-sm">
                <p className="text-sm text-gray-600">Date: {historyItem.date}</p>
                <p className="font-medium">Items:</p>
                <ul className="list-disc ml-6 text-gray-700">
                  {historyItem.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="font-bold mt-2">Total: {historyItem.total}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">No purchase history available.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
