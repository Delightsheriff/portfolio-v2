"use client";

import React, { useEffect, useRef, useState } from "react";

const HexagonBackground: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;

      setRotation((prevRotation) => (prevRotation + deltaTime * 0.001) % 360);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden bg-white dark:bg-gray-900">
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full"
        style={{ transform: `rotate(${rotation}deg)` }}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hexagonPattern"
            x="0"
            y="0"
            width="10"
            height="17.32"
            patternUnits="userSpaceOnUse"
          >
            <polygon
              points="5,0 10,2.88 10,8.66 5,11.54 0,8.66 0,2.88"
              fill="none"
              stroke="url(#hexagonGradient)"
              strokeWidth="0.3"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.2;0.4;0.2"
                dur="6s"
                repeatCount="indefinite"
              />
            </polygon>
          </pattern>
          <linearGradient
            id="hexagonGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#8B27DA" />
            <stop offset="50%" stopColor="#6033E0" />
            <stop offset="100%" stopColor="#1c1b24" />
          </linearGradient>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="url(#hexagonPattern)"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default HexagonBackground;
