
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="flex flex-col min-h-screen text-white relative"
      style={{
        backgroundImage: 'url("/lovable-uploads/bluepay2026-bg.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex-1 flex flex-col relative z-10">
        <header className="p-5 pt-8">
          <div className="flex items-center">
            <div className="text-2xl font-bold relative">
              <span className="font-black tracking-wide text-white">
                BLUEPAY
              </span>
              <span className="ml-2 text-lg font-normal tracking-wide text-white">
                2026
              </span>
              <div 
                className="absolute -bottom-1 left-0 w-28 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"
              />
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col px-6 pt-12">
          <div>
            {/* Logo card with glassmorphism */}
            <div 
              className="mx-auto mb-10 max-w-xs rounded-2xl py-5 px-8"
              style={{
                background: 'linear-gradient(135deg, rgba(100,150,200,0.25) 0%, rgba(60,100,160,0.15) 100%)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(150,180,220,0.25)',
                boxShadow: '0 8px 32px rgba(0,100,200,0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              <h2 
                className="text-2xl font-black text-center tracking-wider"
                style={{
                  background: 'linear-gradient(180deg, #5b8fd4 0%, #2d5a9e 50%, #1a3d6e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                BLUEPAY2026
              </h2>
            </div>

            <h1 className="text-3xl font-bold mb-4 leading-tight text-white">
              Get Your Account<br />Ready Instantly
            </h1>
            
            <p className="text-base mb-10 text-gray-300/90 leading-relaxed max-w-sm">
              Easily set up your account to buy, sell airtime, data bundles, and pay bills online at unbeatable rates.
            </p>
            
            <Button 
              className="px-12 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, rgba(120,170,230,0.4) 0%, rgba(80,130,200,0.3) 100%)',
                border: '1px solid rgba(140,180,230,0.35)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 24px rgba(80,140,220,0.25), inset 0 1px 0 rgba(255,255,255,0.15)'
              }}
              onClick={() => navigate("/register")}
            >
              <span className="text-blue-600 font-bold">Get Started</span>
            </Button>
          </div>
        </main>
      </div>

      {/* Chat bubble button */}
      <div className="fixed bottom-6 right-6 z-20">
        <button 
          className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
          style={{
            background: 'linear-gradient(135deg, rgba(60,120,200,0.5) 0%, rgba(40,90,160,0.4) 100%)',
            border: '2px solid rgba(100,160,230,0.5)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 20px rgba(60,120,200,0.3)'
          }}
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default Index;
