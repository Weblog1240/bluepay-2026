import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const BottomNavigation = () => {
  const navigate = useNavigate();

  return (
    <div className="h-16 bg-card border-t border-border fixed bottom-0 w-full flex justify-around items-center px-4 shadow-lg">
      <div 
        className="flex flex-col items-center cursor-pointer"
        onClick={() => navigate("/dashboard")}
      >
        <span className="text-lg text-primary">💰</span>
        <span className="text-xs font-medium mt-1 text-foreground">Wallet</span>
      </div>
      <div 
        className="flex flex-col items-center cursor-pointer" 
        onClick={() => navigate("/platform")}
      >
        <span className="text-lg text-muted-foreground">🌐</span>
        <span className="text-xs font-medium mt-1 text-muted-foreground">Social</span>
      </div>
      <div className="flex flex-col items-center">
        <Button 
          className="rounded-full h-12 w-12 -mt-5 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
          onClick={() => navigate("/buy-bpc")}
        >
          <span className="text-xl">🛍</span>
        </Button>
      </div>
      <div 
        className="flex flex-col items-center cursor-pointer" 
        onClick={() => navigate("/data")}
      >
        <span className="text-lg text-muted-foreground">📶</span>
        <span className="text-xs font-medium mt-1 text-muted-foreground">Data</span>
      </div>
      <div 
        className="flex flex-col items-center cursor-pointer" 
        onClick={() => navigate("/profile")}
      >
        <span className="text-lg text-muted-foreground">👤</span>
        <span className="text-xs font-medium mt-1 text-muted-foreground">Profile</span>
      </div>
    </div>
  );
};

export default BottomNavigation;
