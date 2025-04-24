
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem, 
  NavigationMenuTrigger, 
  NavigationMenuContent 
} from "@/components/ui/navigation-menu";
import { Bell } from 'lucide-react';

const Navbar = () => {
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
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <a href="/contact" className="text-blue-900 hover:text-blue-700">Contact</a>
            <button className="fixed bottom-4 right-4 bg-blue-900 p-2 rounded-full text-white shadow-lg hover:bg-blue-800">
              <Bell className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
