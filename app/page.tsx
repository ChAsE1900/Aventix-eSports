"use client"
import React from 'react'
import Hero from './components/Hero'

const page = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Hero/>
      <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Legal Links */}
        <div className="space-y-3">
          <a href="/" className="block hover:text-gray-300 uppercase text-sm font-medium">Home</a>
          <a href="/sign-in" className="block hover:text-gray-300 uppercase text-sm font-medium">Log in</a>
          <a href="https://discord.gg/rfNvsgf9mv" className="block hover:text-gray-300 uppercase text-sm font-medium">Contact Us</a>
          <a href="https://discord.gg/rfNvsgf9mv" className="block hover:text-gray-300 uppercase text-sm font-medium">Discord Server Invite</a>
        </div>

        {/* Newsletter */}
        <div className="max-w-md">
          <h3 className="text-2xl font-bold mb-3">SIGN UP FOR UPDATES</h3>
          <p className="text-gray-300 mb-6">Promotions, new products and sales. Directly to your inbox.</p>
          <form onSubmit={handleSubmit} className="flex gap-4">
            <input
              type="email"
              placeholder="My email address"
              className="flex-grow bg-transparent border-b border-white focus:outline-none focus:border-gray-300 pb-2 placeholder-gray-500"
            />
            <button
              type="submit"
              className="uppercase text-sm font-bold hover:text-gray-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default page;