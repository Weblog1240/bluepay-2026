import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

const QuickActions = () => {
  const navigate = useNavigate();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVideoLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleWatch = () => {
    setIsVideoOpen(true);
  };

  const quickActions = [
    {
      id: 'buy-bpc',
      title: 'Buy BPC',
      emoji: '🛍',
      onClick: () => navigate("/buy-bpc")
    },
    {
      id: 'watch',
      title: 'Watch',
      emoji: '📺',
      onClick: handleWatch
    },
    {
      id: 'airtime',
      title: 'Airtime',
      emoji: '☎',
      onClick: () => navigate("/airtime")
    },
    {
      id: 'data',
      title: 'Data',
      emoji: '📶',
      onClick: () => navigate("/data")
    }
  ];

  return (
    <>
      <div className="bg-card rounded-xl p-4 mb-2 border border-border">
        <div className="grid grid-cols-4 gap-3">
          {quickActions.map(action => (
            <div 
              key={action.id} 
              className="flex flex-col items-center cursor-pointer p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={action.onClick}
            >
              <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center mb-1">
                <span className="text-lg">{action.emoji}</span>
              </div>
              <p className="text-xs font-medium text-center text-foreground">{action.title}</p>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-card border-border">
          <DialogHeader className="p-4 pb-0">
            <div className="flex justify-between items-center">
              <DialogTitle className="text-foreground">BluPay Tutorial</DialogTitle>
              <button 
                onClick={() => setIsVideoOpen(false)} 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </DialogHeader>
          <div className="aspect-video w-full">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.dailymotion.com/embed/video/x9qytu2" 
              frameBorder="0" 
              allowFullScreen 
              className="rounded-b-lg" 
              title="BluPay Tutorial"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default QuickActions;