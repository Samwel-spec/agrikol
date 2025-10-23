import React, { useState } from 'react';
// import { loginUser, registerUser } from '../../api-mocks/authMocks'; // Actual import

const AuthForms = ({ isSignUp = false }) => {
  const [userType, setUserType] = useState('customer');
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder for actual API call
    try {
      const endpoint = isSignUp ? '/api/auth/register' : '/api/auth/login';
      // const response = isSignUp ? await registerUser(formData) : await loginUser(formData);
      console.log(`Submitting to ${endpoint} with data:`, formData);
      // Success: Redirect based on userType (e.g., router.push('/farmer/dashboard'))
    } catch (error) {
      console.error('Auth Error:', error.message);
    } finally {
      setLoading(false);
    }
  };

  const farmerFields = (
    <>
      <input type="text" name="nationalId" onChange={handleChange} placeholder="National ID" required className="p-3 border border-agri-green/50 rounded-md" />
      <input type="text" name="kraPin" onChange={handleChange} placeholder="KRA PIN (Simulated Verification)" required className="p-3 border border-agri-green/50 rounded-md" />
      <div className="text-sm text-agri-brown/80 mt-1">KRA PIN Status: **Verification Pending** (Simulated)</div>
    </>
  );

  return (
    <div className="bg-white p-8 shadow-2xl rounded-xl max-w-md w-full">
      <h2 className="text-3xl font-bold text-center text-agri-dark mb-6">{isSignUp ? 'Join Agricool' : 'Welcome Back'}</h2>
      
      {isSignUp && (
        <div className="mb-4 flex space-x-4">
          <button 
            type="button" 
            onClick={() => setUserType('customer')}
            className={`flex-1 p-2 rounded-lg font-medium transition ${userType === 'customer' ? 'bg-agri-green text-white' : 'bg-gray-100 text-agri-dark hover:bg-agri-earth'}`}
          >
            Customer 🛒
          </button>
          <button 
            type="button" 
            onClick={() => setUserType('farmer')}
            className={`flex-1 p-2 rounded-lg font-medium transition ${userType === 'farmer' ? 'bg-agri-green text-white' : 'bg-gray-100 text-agri-dark hover:bg-agri-earth'}`}
          >
            Farmer 🧑‍🌾
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <>
            <input type="text" name="fullNames" onChange={handleChange} placeholder="Full Names" required className="p-3 border border-agri-green/50 rounded-md w-full" />
            <input type="text" name="mobile" onChange={handleChange} placeholder="Mobile Number" required className="p-3 border border-agri-green/50 rounded-md w-full" />
          </>
        )}
        
        {isSignUp && userType === 'farmer' && farmerFields}

        <input type="text" name="username" onChange={handleChange} placeholder="Username" required className="p-3 border border-agri-green/50 rounded-md w-full" />
        <input type="password" name="password" onChange={handleChange} placeholder="Password" required className="p-3 border border-agri-green/50 rounded-md w-full" />

        <button 
          type="submit" 
          disabled={loading}
          className="w-full bg-agri-green text-white font-bold p-3 rounded-md hover:bg-agri-dark transition duration-200 disabled:opacity-50"
        >
          {loading ? 'Processing...' : (isSignUp ? 'Complete Registration' : 'Login')}
        </button>
      </form>
    </div>
  );
};

export default AuthForms;
