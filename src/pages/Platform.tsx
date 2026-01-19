
import React from "react";
import { ArrowLeft, ExternalLink, Users, MessageCircle, Globe, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Platform = () => {
  const navigate = useNavigate();
  
  const handleJoinTelegram = () => {
    window.open("https://t.me/+nf3sGnOADVRiMDI0", "_blank");
  };
  
  const handleJoinWhatsapp = () => {
    window.open("https://whatsapp.com/channel/0029VbAXljcFCCoUtysdNd3z", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 px-5">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate(-1)}
            className="mr-3 text-primary-foreground hover:bg-primary/90"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-2xl font-bold">Platform Communities</h1>
        </div>
      </header>

      <div className="p-5 space-y-6">
        {/* Welcome Section */}
        <Card className="p-6 bg-card border-border shadow-sm">
          <div className="text-center mb-6">
            <div className="h-16 w-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Welcome to BluePay Community</h2>
            <p className="text-muted-foreground">Connect with other BluePay users, get support, and stay updated with the latest news and features.</p>
          </div>
        </Card>

        {/* Community Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 bg-card border-border shadow-sm">
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-foreground">5,000+</h3>
              <p className="text-sm text-muted-foreground">Active Members</p>
            </div>
          </Card>
          <Card className="p-4 bg-card border-border shadow-sm">
            <div className="text-center">
              <Shield className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <h3 className="text-lg font-semibold text-foreground">24/7</h3>
              <p className="text-sm text-muted-foreground">Community Support</p>
            </div>
          </Card>
        </div>

        {/* Join Communities */}
        <Card className="p-6 bg-card border-border shadow-sm">
          <h2 className="text-xl font-bold text-foreground mb-4 text-center">Join Our Communities</h2>
          <p className="text-muted-foreground mb-6 text-center">Connect with other BluePay users and get the latest updates.</p>
          
          <div className="space-y-4">
            {/* Telegram Card */}
            <div className="border-2 border-primary/30 rounded-lg p-4 hover:border-primary transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">Telegram Channel</h3>
                    <p className="text-sm text-muted-foreground">Official BluePay announcements</p>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
              </div>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium"
                onClick={handleJoinTelegram}
              >
                Join Telegram Channel
              </Button>
            </div>

            {/* WhatsApp Card */}
            <div className="border-2 border-green-500/30 rounded-lg p-4 hover:border-green-500 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-green-500/20 rounded-full flex items-center justify-center mr-4">
                    <MessageCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">WhatsApp Group</h3>
                    <p className="text-sm text-muted-foreground">Community discussions & support</p>
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground" />
              </div>
              <Button 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg font-medium"
                onClick={handleJoinWhatsapp}
              >
                Join WhatsApp Group
              </Button>
            </div>
          </div>
        </Card>

        {/* Features Section */}
        <Card className="p-6 bg-card border-border shadow-sm">
          <h3 className="text-xl font-bold text-foreground mb-4 text-center">What You'll Get</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="h-8 w-8 bg-primary/20 rounded-full flex items-center justify-center mr-3 mt-1">
                <span className="text-primary font-bold text-sm">1</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Latest Updates</h4>
                <p className="text-sm text-muted-foreground">Be the first to know about new features and improvements</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-8 w-8 bg-green-500/20 rounded-full flex items-center justify-center mr-3 mt-1">
                <span className="text-green-500 font-bold text-sm">2</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Community Support</h4>
                <p className="text-sm text-muted-foreground">Get help from other users and our support team</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="h-8 w-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-3 mt-1">
                <span className="text-purple-500 font-bold text-sm">3</span>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Exclusive Tips</h4>
                <p className="text-sm text-muted-foreground">Learn tips and tricks to make the most of BluePay</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Platform;
