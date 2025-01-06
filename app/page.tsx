import React from 'react'
import Hero from './components/Hero'

const page = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Hero/>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
          
          </div>
        </div>
      </footer>
    </div>
  );
}

export default page;