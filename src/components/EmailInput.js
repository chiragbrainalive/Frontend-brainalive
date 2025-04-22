import React, { useState } from 'react';

const EmailInput = ({ onEmailChange }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!value || emailRegex.test(value)) {
      setError('');
    } else {
      setError('Please enter a valid email');
    }

    onEmailChange?.(value);
  };

  return (
    <div className="w-full">
      <label
        className="block"
        style={{
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: '500',
          color: '#FFFFFF7A',
          margin: '16px 0px 10px',
        }}
      >
        Enter your email to purchase BAAI health nodes
      </label>

      <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          className={`flex-grow px-6 py-4 border ${
            error ? 'border-red-500' : 'border-white'
          } rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent text-white placeholder-white/50`}
          placeholder="JohnDoe@example.com"
        />

        <button
          onClick={() => console.log('Start with email:', email)}
          className="px-6 py-4 rounded-3xl bg-custom-green text-white font-semibold hover:bg-green-600 transition-all"
        >
          Get Started
        </button>
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default EmailInput;
