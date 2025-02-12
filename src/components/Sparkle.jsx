import React, { useRef } from 'react';
import { Sparkles } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Sparkle = () => {
   const meshRef = useRef();

   // Colors optimized for a dark background
   const sparkleColors = ['#00FFFF', '#FF00FF', '#FFFFFF', '#00FF00', '#00BFFF'];

   useFrame(() => {
      if (meshRef.current) {
         meshRef.current.rotation.x += 0.0001;
         meshRef.current.rotation.y += 0.0001;
         meshRef.current.rotation.z += 0.0001;
      }
   });

   return (
      <group ref={meshRef}>
         {/* Sparkles Group */}
         {sparkleColors.map((color, index) => (
            <Sparkles
               key={index}
               count={100}
               color={color}
               scale={35}
               speed={0.003}
               size={2}
               noise={0.15}
               position={[Math.random() * 20 - 10, Math.random() * 20 - 10, Math.random() * 20 - 10]} // Randomized positions to spread out
            />
         ))}
      </group>
   );
};

export default Sparkle;
