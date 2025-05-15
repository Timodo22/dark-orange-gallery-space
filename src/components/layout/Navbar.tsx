
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-4 bg-dark/95 backdrop-blur-sm shadow-lg' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-orange">KEMPAS</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium text-white hover:text-orange transition-colors">
              Home
            </Link>
            <Link to="/over-ons" className="text-sm font-medium text-white hover:text-orange transition-colors">
              Over Ons
            </Link>
            <Link to="/projecten" className="text-sm font-medium text-white hover:text-orange transition-colors">
              Projecten
            </Link>
            <Link to="/diensten" className="text-sm font-medium text-white hover:text-orange transition-colors">
              Diensten
            </Link>
            <Link to="/contact" className="text-sm font-medium text-white hover:text-orange transition-colors">
              Contact
            </Link>
          </nav>

          <Button variant="outline" className="hidden md:inline-flex text-white border-orange hover:bg-orange hover:text-white transition-colors">
            <Link to="/contact">Offerte Aanvragen</Link>
          </Button>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white hover:text-orange"
            aria-label="Menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <Link 
                to="/" 
                className="text-white hover:text-orange px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/over-ons" 
                className="text-white hover:text-orange px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Over Ons
              </Link>
              <Link 
                to="/projecten" 
                className="text-white hover:text-orange px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projecten
              </Link>
              <Link 
                to="/diensten" 
                className="text-white hover:text-orange px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Diensten
              </Link>
              <Link 
                to="/contact" 
                className="text-white hover:text-orange px-4 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                variant="outline" 
                className="mx-4 mt-2 text-white border-orange hover:bg-orange hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/contact">Offerte Aanvragen</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
