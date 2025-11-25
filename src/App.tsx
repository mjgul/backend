import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ServerWorkflow from './components/ServerWorkflow';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-background min-h-screen w-full text-foreground selection:bg-primary selection:text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-xl text-primary">
            &lt;dev /&gt;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-b border-gray-800 absolute w-full">
            <div className="flex flex-col p-4 space-y-4 text-sm font-medium text-gray-400">
              <a href="#" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#skills" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Skills</a>
              <a href="#projects" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Projects</a>
              <a href="#contact" className="hover:text-white transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero />
        <Skills />
        <Projects />
        <ServerWorkflow />
        <Contact />
      </main>
    </div>
  );
}

export default App;
