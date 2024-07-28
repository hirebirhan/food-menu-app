"use client";
import React, { ReactNode, useState } from 'react';
import Link from 'next/link';
import { FaBars, FaBell, FaTachometerAlt, FaEnvelope, FaCog, FaUser, FaChevronLeft, FaChevronRight, FaUserCircle, FaPlusSquare } from 'react-icons/fa';

interface DashboardLayoutProps {
  children: ReactNode;
}

interface SidebarLinkProps {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  isCollapsed: boolean;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="flex h-screen">
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={handleSidebarToggle} />
      <div className="flex flex-col flex-1">
        <TopBar onSidebarToggle={handleSidebarToggle} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isCollapsed, onToggle }) => {
  return (
    <div className={`flex flex-col ${isCollapsed ? 'w-20' : 'w-64'} bg-gradient-to-b from-neutral-charcoal to-gray-800 text-neutral-cream transition-width duration-200`}>
      <div className="flex items-center justify-between h-16 bg-neutral-charcoal p-4">
        <span className={`${isCollapsed ? 'hidden' : 'block'} text-neutral-cream font-bold uppercase`}>Sidebar</span>
        <button onClick={onToggle} className="text-neutral-cream focus:outline-none">
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex items-center justify-left p-4 bg-neutral-charcoal">
          <FaUser className="h-12 w-12 text-neutral-cream" />
          {!isCollapsed && (
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-neutral-cream">John Doe</h2>
              <p className="text-sm text-neutral-secondary-text">Admin</p>
            </div>
          )}
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          <SidebarLink href="/admin" label="Dashboard" icon={FaTachometerAlt} isCollapsed={isCollapsed} />
          <SidebarLink href="#" label="Messages" icon={FaEnvelope} isCollapsed={isCollapsed} />
          <SidebarLink href="#" label="Settings" icon={FaCog} isCollapsed={isCollapsed} />
          <SidebarLink href="/admin/register" label="Add Menu Item" icon={FaPlusSquare} isCollapsed={isCollapsed} />
        </nav>
        <div className="px-2 py-4">
          <SidebarLink href="#" label="Profile" icon={FaUser} isCollapsed={isCollapsed} />
        </div>
      </div>
    </div>
  );
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, label, icon: Icon, isCollapsed }) => (
  <Link href={href}>
    <span className="flex items-center px-4 py-2 transition-colors duration-200 hover:bg-neutral-cream hover:text-neutral-charcoal rounded-md cursor-pointer">
      <Icon className="h-6 w-6 mr-2" />
      {!isCollapsed && label}
    </span>
  </Link>
);

interface TopBarProps {
  onSidebarToggle: () => void;
}

const TopBar: React.FC<TopBarProps> = ({ onSidebarToggle }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleUserMenuToggle = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div className="flex items-center justify-between h-16 bg-white border-b border-neutral-border shadow">
      <div className="flex items-center px-4">
        <button onClick={onSidebarToggle} className="text-neutral-charcoal focus:outline-none focus:text-neutral-secondary-text">
          <FaBars className="h-6 w-6" />
        </button>
        <input
          className="mx-4 w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-primary focus:outline-none"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="flex items-center space-x-4 pr-4">
        <button className="text-neutral-charcoal hover:text-neutral-secondary-text focus:outline-none focus:text-neutral-secondary-text">
          <FaBell className="h-6 w-6" />
        </button>
        <div className="relative">
          <button onClick={handleUserMenuToggle} className="text-neutral-charcoal hover:text-neutral-secondary-text focus:outline-none focus:text-neutral-secondary-text">
            <FaUserCircle className="h-6 w-6" />
          </button>
          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-neutral-border rounded-md shadow-lg py-2 z-50">
              <Link href="#">
                <span className="block px-4 py-2 text-sm text-neutral-primary-text hover:bg-neutral-cream">Profile</span>
              </Link>
              <Link href="#">
                <span className="block px-4 py-2 text-sm text-neutral-primary-text hover:bg-neutral-cream">Settings</span>
              </Link>
              <Link href="#">
                <span className="block px-4 py-2 text-sm text-neutral-primary-text hover:bg-neutral-cream">Logout</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
