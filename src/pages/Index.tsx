
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen text-white relative overflow-hidden bg-[#0a0f1a]">
      {/* Deep space background gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top right, #1a3a5c 0%, #0d1f35 25%, #0a1628 50%, #050a12 100%)'
        }}
      />
      
      {/* Animated cosmic light streaks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Main glow orb - top right */}
        <div 
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(59,130,246,0.1) 40%, transparent 70%)',
            filter: 'blur(40px)'
          }}
        />
        
        {/* Secondary glow - bottom left */}
        <div 
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(6,182,212,0.05) 50%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
        
        {/* Light streak 1 */}
        <div 
          className="absolute top-1/4 right-0 w-[600px] h-[2px] -rotate-12"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(147,197,253,0.4) 30%, rgba(147,197,253,0.6) 50%, rgba(147,197,253,0.4) 70%, transparent 100%)',
            filter: 'blur(1px)',
            boxShadow: '0 0 20px rgba(147,197,253,0.5)'
          }}
        />
        
        {/* Light streak 2 */}
        <div 
          className="absolute top-1/3 right-10 w-[400px] h-[1px] -rotate-6"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(96,165,250,0.3) 40%, rgba(96,165,250,0.5) 60%, transparent 100%)',
            filter: 'blur(0.5px)'
          }}
        />
        
        {/* Light streak 3 - bottom */}
        <div 
          className="absolute bottom-1/4 left-0 w-[500px] h-[2px] rotate-6"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(34,211,238,0.3) 20%, rgba(34,211,238,0.5) 40%, transparent 80%)',
            filter: 'blur(1px)',
            boxShadow: '0 0 15px rgba(34,211,238,0.4)'
          }}
        />
        
        {/* Floating particles/stars */}
        <div className="absolute top-20 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-pulse" />
        <div className="absolute top-40 right-1/3 w-1.5 h-1.5 bg-blue-300/50 rounded-full animate-pulse delay-300" />
        <div className="absolute top-1/2 left-10 w-1 h-1 bg-cyan-300/40 rounded-full animate-pulse delay-500" />
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/50 rounded-full animate-pulse delay-700" />
        <div className="absolute bottom-40 left-1/3 w-0.5 h-0.5 bg-blue-200/60 rounded-full animate-pulse delay-1000" />
      </div>

      <div className="flex-1 flex flex-col relative z-10">
        <header className="p-5">
          <div className="flex items-center">
            <div className="text-2xl font-bold relative">
              <span 
                className="relative z-10 font-extrabold tracking-wide"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #3b82f6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 30px rgba(59,130,246,0.5)'
                }}
              >
                BLUEPAY
              </span>
              <span 
                className="relative z-10 ml-2 text-lg font-light tracking-widest"
                style={{
                  background: 'linear-gradient(135deg, #e0f2fe 0%, #7dd3fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                2026
              </span>
              <div 
                className="absolute -bottom-1 left-0 w-24 h-0.5"
                style={{
                  background: 'linear-gradient(90deg, #3b82f6 0%, #06b6d4 50%, transparent 100%)'
                }}
              />
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col p-6 justify-center">
          <div className="mt-4">
            {/* Logo card with glassmorphism */}
            <div 
              className="mx-auto mb-12 max-w-xs rounded-2xl p-6 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, rgba(30,64,175,0.1) 50%, rgba(59,130,246,0.05) 100%)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(147,197,253,0.2)',
                boxShadow: '0 0 40px rgba(59,130,246,0.15), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
            >
              {/* Inner glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.1) 0%, transparent 70%)'
                }}
              />
              <h2 
                className="text-3xl font-black text-center relative z-10 tracking-wider"
                style={{
                  background: 'linear-gradient(180deg, #60a5fa 0%, #3b82f6 50%, #1d4ed8 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: '0 0 40px rgba(59,130,246,0.6)',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                BLUEPAY2026
              </h2>
            </div>

            <h1 
              className="text-3xl font-bold mb-4 leading-tight"
              style={{
                textShadow: '0 2px 20px rgba(0,0,0,0.5)'
              }}
            >
              Get Your Account<br />Ready Instantly
            </h1>
            
            <p className="text-base mb-10 text-blue-100/70 leading-relaxed max-w-sm">
              Easily set up your account to buy, sell airtime, data bundles, and pay bills online at unbeatable rates.
            </p>
            
            <Button 
              className="relative overflow-hidden px-10 py-6 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              style={{
                background: 'linear-gradient(135deg, rgba(96,165,250,0.3) 0%, rgba(59,130,246,0.2) 100%)',
                border: '1px solid rgba(147,197,253,0.3)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 4px 20px rgba(59,130,246,0.2), inset 0 1px 0 rgba(255,255,255,0.1)'
              }}
              onClick={() => navigate("/register")}
            >
              <span className="relative z-10 text-white">Get Started</span>
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
