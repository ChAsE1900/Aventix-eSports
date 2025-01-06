import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-gray-100 flex items-center justify-center">
        <p>Start prompting (or editing) to see magic happen :)</p>
      </main>
      
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">&copy; {new Date().getFullYear()} Aventix eSports. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;