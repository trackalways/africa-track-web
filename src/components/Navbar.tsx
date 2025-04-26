
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { Bell, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/e29ada86-072b-4c67-b669-35e7441784bd.png" 
                alt="Trackalways Logo" 
                className="h-10"
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-blue-900">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={location.pathname === '/' ? 'text-orange-500' : ''}>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="p-2 hover:bg-blue-50 rounded-md">
                        <Link to="/hardware" className="flex flex-col gap-1">
                          <span className="font-medium">GPS Tracking</span>
                          <span className="text-sm text-gray-500">Advanced vehicle monitoring solutions</span>
                        </Link>
                      </li>
                      <li className="p-2 hover:bg-blue-50 rounded-md">
                        <Link to="/hardware" className="flex flex-col gap-1">
                          <span className="font-medium">Fuel Sensors</span>
                          <span className="text-sm text-gray-500">Optimize fuel usage and prevent theft</span>
                        </Link>
                      </li>
                      <li className="p-2 hover:bg-blue-50 rounded-md">
                        <Link to="/hardware" className="flex flex-col gap-1">
                          <span className="font-medium">AI Dash Cams</span>
                          <span className="text-sm text-gray-500">Intelligent camera systems for safety</span>
                        </Link>
                      </li>
                      <li className="p-2 hover:bg-blue-50 rounded-md">
                        <Link to="/hardware" className="flex flex-col gap-1">
                          <span className="font-medium">Portable Trackers</span>
                          <span className="text-sm text-gray-500">Versatile tracking for various uses</span>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className={location.pathname === '/solutions' ? 'text-orange-500' : ''}>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li className="p-2 hover:bg-blue-50 rounded-md">
                        <Link to="/solutions" className="flex flex-col gap-1">
                          <span className="font-medium">Fleet Management</span>
                          <span className="text-sm text-gray-500">Complete vehicle fleet solutions</span>
                        </Link>
                      </li>
                      <li className="p-2 hover:bg-blue-50 rounded-md">
                        <Link to="/solutions" className="flex flex-col gap-1">
                          <span className="font-medium">Asset Tracking</span>
                          <span className="text-sm text-gray-500">Monitor and protect valuable assets</span>
                        </Link>
                      </li>
                      <li className="p-2 hover:bg-blue-50 rounded-md">
                        <Link to="/solutions" className="flex flex-col gap-1">
                          <span className="font-medium">Vehicle Security</span>
                          <span className="text-sm text-gray-500">Advanced security features</span>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/hardware" className={cn(
                    "px-4 py-2 hover:text-orange-500 transition-colors",
                    location.pathname === '/hardware' ? 'text-orange-500' : 'text-blue-900'
                  )}>
                    Hardware
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/software" className={cn(
                    "px-4 py-2 hover:text-orange-500 transition-colors",
                    location.pathname === '/software' ? 'text-orange-500' : 'text-blue-900'
                  )}>
                    Software
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/industries" className={cn(
                    "px-4 py-2 hover:text-orange-500 transition-colors",
                    location.pathname === '/industries' ? 'text-orange-500' : 'text-blue-900'
                  )}>
                    Industries
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/about" className={cn(
              "hover:text-orange-500 transition-colors",
              location.pathname === '/about' ? 'text-orange-500' : 'text-blue-900'
            )}>About</Link>
            <Link to="/career" className={cn(
              "hover:text-orange-500 transition-colors",
              location.pathname === '/career' ? 'text-orange-500' : 'text-blue-900'
            )}>Career</Link>
            <Link to="/contact" className={cn(
              "bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors",
              location.pathname === '/contact' ? 'bg-orange-500 hover:bg-orange-600' : ''
            )}>Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <Link to="/" className="block py-2 text-blue-900 hover:text-orange-500" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="block py-2 text-blue-900 hover:text-orange-500" onClick={toggleMenu}>About</Link>
            <Link to="/solutions" className="block py-2 text-blue-900 hover:text-orange-500" onClick={toggleMenu}>Solutions</Link>
            <Link to="/hardware" className="block py-2 text-blue-900 hover:text-orange-500" onClick={toggleMenu}>Hardware</Link>
            <Link to="/software" className="block py-2 text-blue-900 hover:text-orange-500" onClick={toggleMenu}>Software</Link>
            <Link to="/industries" className="block py-2 text-blue-900 hover:text-orange-500" onClick={toggleMenu}>Industries</Link>
            <Link to="/career" className="block py-2 text-blue-900 hover:text-orange-500" onClick={toggleMenu}>Career</Link>
            <Link to="/contact" className="block py-2 text-blue-900 hover:text-orange-500" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}

      {/* Fixed notification bell */}
      <button className="fixed bottom-4 right-4 bg-blue-900 p-3 rounded-full text-white shadow-lg hover:bg-orange-500 transition-all duration-300 hover:scale-110 z-50">
        <Bell className="h-5 w-5" />
      </button>
    </nav>
  );
};

export default Navbar;
