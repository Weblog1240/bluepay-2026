
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="flex flex-col min-h-screen text-white"
      style={{
        background: 'linear-gradient(135deg, #0a1628 0%, #1a2744 30%, #0d1b2a 60%, #0a1628 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Cosmic background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-2xl"></div>
      </div>

      <div className="flex-1 flex flex-col relative z-10">
        <header className="p-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold relative">
              <span className="relative z-10 bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">
                BLUE
              </span>
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-blue-300 to-white bg-clip-text text-transparent">
                PAY
              </span>
              <span className="relative z-10 ml-1 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent text-sm font-light">
                2026
              </span>
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col p-6 justify-center">
          <div className="mt-8">
            <div className="mx-auto mb-10 max-w-xs bg-gradient-to-r from-blue-900/40 to-blue-700/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 shadow-lg shadow-blue-500/10">
              <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 bg-clip-text text-transparent" style={{ fontFamily: 'system-ui' }}>
                BLUEPAY2026
              </h2>
            </div>
            <h1 className="text-3xl font-bold mb-4">Get Your Account Ready Instantly</h1>
            <p className="text-lg mb-10 text-blue-100/80">
              Easily set up your account to buy, sell airtime, data bundles, and pay bills online at unbeatable rates.
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-400/80 to-blue-600/80 hover:from-blue-400 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg border border-blue-300/30 shadow-lg shadow-blue-500/20"
              onClick={() => navigate("/register")}
            >
              Get Started
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
