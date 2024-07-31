"use client";
import React from "react";

const AnimatedBackground = () => {
    return (
        <div className="absolute -z-30 w-full h-[2300px] overflow-hidden bg-slate-300">
            <div className="absolute top-0 left-0 right-0 w-[100vw] h-full">
                <div className="absolute top-0 left-[40%] w-[2px] h-full bg-white/10 animate-drop"></div>
                <div className="absolute top-0 left-[60%] w-[2px] h-full bg-white/10 animate-drop delay-2000"></div>
                <div className="absolute top-0 left-[80%] w-[2px] h-full bg-white/10 animate-drop delay-2500"></div>
                {/* Yangi suzuvchi div */}
                <div className="absolute top-0 left-[20%] w-[2px] h-full bg-white/10 animate-drop delay-3000"></div>
            </div>
            <style jsx>{`
        @keyframes drop {
          0% {
            top: -50%;
          }
          100% {
            top: 110%;
          }
        }
        .animate-drop::after {
          content: "";
          display: block;
          position: absolute;
          height: 25vh;
          width: 100%;
          top: -50%;
          left: 0;
          background: linear-gradient(
            to bottom,
            rgba(255, 0, 0, 0) 0%,
            #ff0000 75%,
            #ff0000 100%
          );
          animation: drop 6.5s 0s infinite cubic-bezier(0.4, 0.26, 0, 0.97);
        }
        .delay-2000::after {
          animation-delay: 7s;
        }
        .delay-2500::after {
          animation-delay: 7.5s;
        }
        .delay-3000::after {
          animation-delay: 8s;
        }
      `}</style>
        </div>
    );
};

export default AnimatedBackground;
