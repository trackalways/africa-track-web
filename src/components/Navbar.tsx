
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent,
  NavigationMenuLink
} from "@/components/ui/navigation-menu";
import { Bell, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="/lovable-uploads/e29ada86-072b-4c67-b669-35e7441784bd.png" 
                alt="Trackalways Logo" 
                className="h-8"
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li className="p-2 hover:bg-slate-50 rounded-md">GPS Tracking</li>
                      <li className="p-2 hover:bg-slate-50 rounded-md">Fuel Sensors</li>
                      <li className="p-2 hover:bg-slate-50 rounded-md">AI Dash Cams</li>
                      <li className="p-2 hover:bg-slate-50 rounded-md">Portable Trackers</li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Solutions</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li className="p-2 hover:bg-slate-50 rounded-md">Fleet Management</li>
                      <li className="p-2 hover:bg-slate-50 rounded-md">Asset Tracking</li>
                      <li className="p-2 hover:bg-slate-50 rounded-md">Vehicle Security</li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/hardware" className="px-4 py-2 text-blue-900 hover:text-blue-700">
                    Hardware
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/software" className="px-4 py-2 text-blue-900 hover:text-blue-700">
                    Software
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link to="/industries" className="px-4 py-2 text-blue-900 hover:text-blue-700">
                    Industries
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/about" className="text-blue-900 hover:text-blue-700 hidden md:block">About</Link>
            <Link to="/career" className="text-blue-900 hover:text-blue-700 hidden md:block">Career</Link>
            <Link to="/contact" className="text-blue-900 hover:text-blue-700">Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 space-y-2">
            <Link to="/" className="block py-2 text-blue-900 hover:text-blue-700" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="block py-2 text-blue-900 hover:text-blue-700" onClick={toggleMenu}>About</Link>
            <Link to="/solutions" className="block py-2 text-blue-900 hover:text-blue-700" onClick={toggleMenu}>Solutions</Link>
            <Link to="/hardware" className="block py-2 text-blue-900 hover:text-blue-700" onClick={toggleMenu}>Hardware</Link>
            <Link to="/software" className="block py-2 text-blue-900 hover:text-blue-700" onClick={toggleMenu}>Software</Link>
            <Link to="/industries" className="block py-2 text-blue-900 hover:text-blue-700" onClick={toggleMenu}>Industries</Link>
            <Link to="/career" className="block py-2 text-blue-900 hover:text-blue-700" onClick={toggleMenu}>Career</Link>
            <Link to="/contact" className="block py-2 text-blue-900 hover:text-blue-700" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}

      {/* Fixed notification bell */}
      <button className="fixed bottom-4 right-4 bg-blue-900 p-2 rounded-full text-white shadow-lg hover:bg-blue-800">
        <Bell className="h-6 w-6" />
      </button>
    </nav>
  );
};

export default Navbar;
