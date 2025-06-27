import React, { useEffect, useRef } from 'react';

const OrbitAnimation = () => {
  const orbitersRef = useRef([]);

  useEffect(() => {
    const orbiters = orbitersRef.current;
    const radius = 125;
    const centerX = 200;
    const centerY = 200;
    const speed = 0.01;
    const angles = orbiters.map((_, i) => (i * (2 * Math.PI)) / orbiters.length);

    const animate = () => {
      orbiters.forEach((orbiter, i) => {
        angles[i] += speed;
        const x = centerX + radius * Math.cos(angles[i]) - orbiter.offsetWidth / 2;
        const y = centerY + radius * Math.sin(angles[i]) - orbiter.offsetHeight / 2;
        orbiter.style.left = `${x}px`;
        orbiter.style.top = `${y}px`;
      });
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="orbit-system">
      <div className="main-logo">
        <img src="/images/d-banner.png" height={150} alt="" />
      </div>
      <div className="orbit-path"></div>
      {[1, 2, 3, 4, 5].map((num, index) => (
        <div
          key={num}
          className={`orbiter orbiter-${num}`}
          ref={(el) => (orbitersRef.current[index] = el)}
        >
          {/* {num} */}
        </div>
      ))}
    </div>
  );
};

export default OrbitAnimation;
