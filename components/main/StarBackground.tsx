"use client";
//@ts-ignore
import React, { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props: any) => {
  const ref = useRef<any>();
  const [sphere, setSphere] = useState<Float32Array | null>(null);

  useEffect(() => {
    // Generate random positions within a sphere
    let generatedSphere: Float32Array | null = null;

    try {
      generatedSphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
      
      // Ensure that all values are finite
      if (!generatedSphere?.every((value) => isFinite(value))) {
        console.error("Generated sphere contains invalid values.");
        generatedSphere = null;
      }
    } catch (error) {
      console.error("Error generating sphere:", error);
      generatedSphere = null;
    }

    if (generatedSphere) {
      setSphere(generatedSphere);
    } else {
      console.error("Failed to generate a valid sphere.");
    }
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  if (!sphere) return null;

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
