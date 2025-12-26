
import React from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="flex flex-col min-h-screen text-white relative cursor-pointer"
      style={{
        backgroundImage: 'url("/lovable-uploads/bluepay2026-landing.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat'
      }}
      onClick={() => navigate("/register")}
    >
      {/* Invisible clickable area for the Get Started button region */}
      <div className="flex-1" />
    </div>
  );
};

export default Index;
