import React from "react";
import { Bell, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  
  const handleMenuClick = () => {
    navigate("/admin");
  };
  
  return (
    <header className="bg-card text-foreground py-4 px-5 flex justify-between items-center sticky top-0 z-10 border-b border-border">
      <button className="text-xl text-muted-foreground hover:text-foreground transition-colors" onClick={handleMenuClick}>
        <Menu size={24} />
      </button>
      <h1 className="text-2xl font-semibold text-primary">BLUEPAY</h1>
      <div className="w-8 h-8 text-muted-foreground hover:text-foreground transition-colors">
        <Bell size={24} />
      </div>
    </header>
  );
};

export default Header;