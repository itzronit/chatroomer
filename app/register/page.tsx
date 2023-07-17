"use client";
import { useState } from 'react';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    switch (id) {
      case 'email':
        setEmail(value);
        break;
      case 'username':
        setUsername(value);
        break;
      case 'fullName':
        setFullName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 text-lg">What is your Email Address?</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-800 placeholder-gray-400"
              placeholder="Enter your email"
              value={email}
              onChange={handleInputChange}
              key={step}
            />
            <button onClick={handleNextStep} className="mt-4 w-full text-lg bg-blue-600 text-white rounded-md px-6 py-2 transition-transform duration-300 transform hover:scale-110">Next</button>
          </div>
        );
      case 2:
        return (
          <div className="mb-6">
            <label htmlFor="username" className="block mb-2 text-lg">Choose a Username</label>
            <input
              type="text"
              id="username"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-800 placeholder-gray-400"
              placeholder="Enter your username"
              value={username}
              onChange={handleInputChange}
              key={step}
            />
            <button onClick={handleNextStep} className="mt-4 w-full text-lg bg-blue-600 text-white rounded-md px-6 py-2 transition-transform duration-300 transform hover:scale-110">Next</button>
          </div>
        );
      case 3:
        return (
          <div className="mb-6">
            <label htmlFor="fullName" className="block mb-2 text-lg">Enter your Full Name</label>
            <input
              type="text"
              id="fullName"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-800 placeholder-gray-400"
              placeholder="Enter your full name"
              value={fullName}
              onChange={handleInputChange}
              key={step}
            />
            <button onClick={handleNextStep} className="mt-4 w-full text-lg bg-blue-600 text-white rounded-md px-6 py-2 transition-transform duration-300 transform hover:scale-110">Next</button>
          </div>
        );
      case 4:
        return (
          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 text-lg">Choose a Strong Password</label>
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 bg-gray-100 text-gray-800 placeholder-gray-400"
              placeholder="Choose a strong password"
              value={password}
              onChange={handleInputChange}
              key={step}
            />
            <button onClick={handleNextStep} className="mt-4 w-full text-lg bg-blue-600 text-white rounded-md px-6 py-2 transition-transform duration-300 transform hover:scale-110">Next</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-cr-theme text-white">
      <main className="flex-grow container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="bg-[#2a2a2b] bg-opacity-80 rounded-3xl shadow-2xl p-8">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="max-w-lg mx-auto">
              {renderStep()}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
