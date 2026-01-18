import React from "react";
import { useNavigate } from "react-router-dom";

const MoreServices = () => {
  const navigate = useNavigate();
  
  const moreServices = [
    {
      id: 'support',
      title: 'Support',
      emoji: '📡',
      onClick: () => navigate("/support")
    },
    {
      id: 'group',
      title: 'Group',
      emoji: '🌐',
      onClick: () => navigate("/platform")
    },
    {
      id: 'earn',
      title: 'Earn More',
      emoji: '💲',
      onClick: () => navigate("/earn-more")
    },
    {
      id: 'profile',
      title: 'Profile',
      emoji: '👤',
      onClick: () => navigate("/profile")
    }
  ];
  
  return (
    <div className="bg-card rounded-xl p-4 mb-2 border border-border">
      <h3 className="font-bold text-base mb-3 text-foreground">More Services</h3>
      <div className="grid grid-cols-4 gap-3">
        {moreServices.map(service => (
          <div 
            key={service.id} 
            className="flex flex-col items-center cursor-pointer p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={service.onClick}
          >
            <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mb-1">
              <span className="text-lg">{service.emoji}</span>
            </div>
            <p className="text-xs font-medium text-center text-foreground">{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreServices;