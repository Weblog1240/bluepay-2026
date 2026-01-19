
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mail, MessageSquare, Phone, LifeBuoy } from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const navigate = useNavigate();

  const handleLiveChatClick = () => {
    window.open('https://t.me/+nf3sGnOADVRiMDI0', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="bg-primary text-primary-foreground py-3 px-4 flex justify-between items-center sticky top-0 z-10">
        <button onClick={() => navigate("/dashboard")} className="text-lg text-primary-foreground">
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-semibold">Support</h1>
        <div className="w-6 h-6"></div>
      </header>

      <div className="p-4 flex-1">
        <h2 className="text-xl font-bold mb-4 text-foreground">How can we help you?</h2>
        
        <div className="space-y-4">
          <div className="bg-card rounded-2xl p-5 shadow-lg border border-border">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-primary rounded-full flex items-center justify-center shadow-md">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground">Email Support</h3>
                <p className="text-muted-foreground text-sm">Get comprehensive help via email</p>
              </div>
            </div>
            <Button 
              className="w-full mt-4 bg-primary hover:bg-primary/90 py-3 text-sm font-semibold rounded-xl shadow-md transition-all duration-200"
              onClick={() => window.open('mailto:onlineincomingacademy15@gmail.com')}
            >
              Send Email
            </Button>
          </div>
          
          <div className="bg-card rounded-2xl p-5 shadow-lg border border-border">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-green-600 rounded-full flex items-center justify-center shadow-md">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground">WhatsApp Support</h3>
                <p className="text-muted-foreground text-sm">Quick chat on WhatsApp</p>
              </div>
            </div>
            <Button 
              className="w-full mt-4 bg-green-600 hover:bg-green-700 py-3 text-sm font-semibold rounded-xl shadow-md transition-all duration-200"
              onClick={() => window.open('https://whatsapp.com/channel/0029VbAXljcFCCoUtysdNd3z')}
            >
              Chat on WhatsApp
            </Button>
          </div>
          
          <div className="bg-card rounded-2xl p-5 shadow-lg border border-border">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-purple-600 rounded-full flex items-center justify-center shadow-md">
                <LifeBuoy className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-foreground">Live Chat Support</h3>
                <p className="text-muted-foreground text-sm">Instant chat with support agents</p>
              </div>
            </div>
            <Button 
              className="w-full mt-4 bg-purple-600 hover:bg-purple-700 py-3 text-sm font-semibold rounded-xl shadow-md transition-all duration-200"
              onClick={handleLiveChatClick}
            >
              Start Live Chat
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-muted-foreground text-sm">Available 24/7 for your support needs</p>
          <p className="text-primary font-medium mt-1 text-sm">onlineincomingacademy15@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Support;
