import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChefHat, ShoppingCart, User } from 'lucide-react';

const Header: React.FC = () => {
  console.log('Header loaded');
  const cartItemCount = 3; // Mocked item count

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-muted-foreground'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <ChefHat className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg hidden sm:inline-block">CloudKitchen Luxe</span>
        </Link>
        
        <nav className="flex items-center gap-6">
          <NavLink to="/menu" className={navLinkClasses}>
            Menu
          </NavLink>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/checkout" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-2 h-5 w-5 justify-center p-0 text-xs">
                  {cartItemCount}
                </Badge>
              )}
              <span className="sr-only">Open Cart</span>
            </Link>
          </Button>

          <Button variant="ghost" size="icon" asChild>
            <Link to="/user-account">
              <User className="h-5 w-5" />
              <span className="sr-only">User Account</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;