import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Trophy, Settings, LifeBuoy, User, LogOut } from 'lucide-react';
import clsx from 'clsx';

interface SidebarLinkProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon: Icon, label, isActive }) => (
  <Link
    to={to}
    className={clsx(
      'flex items-center gap-3 px-4 py-3 rounded-lg transition-colors',
      isActive ? 'bg-primary text-white' : 'text-gray-400 hover:bg-gray-800'
    )}
  >
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </Link>
);

export const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  const sidebarLinks = [
    { to: '/dashboard', icon: Home, label: 'Dashboard' },
    { to: '/profile', icon: User, label: 'Profile' },
    { to: '/support', icon: LifeBuoy, label: 'Support' },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 p-4 hidden md:block">
        <div className="mb-8">
          <h1 className="text-2xl font-bold font-orbitron text-white">eSports Pro</h1>
        </div>
        <nav className="space-y-2">
          {sidebarLinks.map((link) => (
            <SidebarLink
              key={link.to}
              {...link}
              isActive={location.pathname === link.to}
            />
          ))}
        </nav>
        <div className="absolute bottom-4 w-56">
          <button className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:bg-gray-800 rounded-lg w-full">
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
};

export const PublicLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  );
};