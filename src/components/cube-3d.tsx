
'use client';

import React, { useRef, useMemo, useEffect, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { CubeMove } from './rubiks-cube-game';

interface CubieState {
  id: number;
  position: THREE.Vector3;
  rotation: THREE.Euler;
}

const COLORS = {
  right: 'red',
  left: 'orange',
  top: 'white',
  bottom: 'yellow',
  front: 'green',
  back: 'blue',
  inside: '#111'
};

export function Cube3D({ lastMove }: { lastMove: { type: CubeMove; timestamp: number } | null }) {
  const groupRef = useRef<THREE.Group>(null);
  const [cubies, setCubies] = useState<CubieState[]>(() => {
    const initialCubies: CubieState[] = [];
    let id = 0;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          initialCubies.push({
            id: id++,
            position: new THREE.Vector3(x, y, z),
            rotation: new THREE.Euler(0, 0, 0)
          });
        }
      }
    }
    return initialCubies;
  });

  // Material definition
  const materials = useMemo(() => [
    new THREE.MeshStandardMaterial({ color: COLORS.right }), // +X
    new THREE.MeshStandardMaterial({ color: COLORS.left }),  // -X
    new THREE.MeshStandardMaterial({ color: COLORS.top }),   // +Y
    new THREE.MeshStandardMaterial({ color: COLORS.bottom }),// -Y
    new THREE.MeshStandardMaterial({ color: COLORS.front }), // +Z
    new THREE.MeshStandardMaterial({ color: COLORS.back }),  // -Z
  ], []);

  useEffect(() => {
    if (!lastMove) return;

    const moveType = lastMove.type;
    const isClockwise = !moveType.endsWith('i');
    const face = moveType.charAt(0);

    setCubies(prev => {
      return prev.map(cubie => {
        let shouldRotate = false;
        let axis = new THREE.Vector3();
        let angle = (isClockwise ? -1 : 1) * Math.PI / 2;

        switch (face) {
          case 'R': if (Math.round(cubie.position.x) === 1) { shouldRotate = true; axis.set(1, 0, 0); } break;
          case 'L': if (Math.round(cubie.position.x) === -1) { shouldRotate = true; axis.set(-1, 0, 0); } break;
          case 'U': if (Math.round(cubie.position.y) === 1) { shouldRotate = true; axis.set(0, 1, 0); } break;
          case 'D': if (Math.round(cubie.position.y) === -1) { shouldRotate = true; axis.set(0, -1, 0); } break;
          case 'F': if (Math.round(cubie.position.z) === 1) { shouldRotate = true; axis.set(0, 0, 1); } break;
          case 'B': if (Math.round(cubie.position.z) === -1) { shouldRotate = true; axis.set(0, 0, -1); } break;
        }

        if (shouldRotate) {
          // Calculate new position
          const newPos = cubie.position.clone().applyAxisAngle(axis, angle);
          
          // Calculate new rotation
          // This is a bit tricky with Eulers, in a real production app we'd use Quaternions
          // But for a visual prototype, we'll simulate the rotation by updating the matrix
          const matrix = new THREE.Matrix4().makeRotationFromEuler(cubie.rotation);
          const rotationMatrix = new THREE.Matrix4().makeRotationAxis(axis, angle);
          matrix.premultiply(rotationMatrix);
          
          const newRot = new THREE.Euler().setFromRotationMatrix(matrix);

          return {
            ...cubie,
            position: newPos,
            rotation: newRot
          };
        }
        return cubie;
      });
    });
  }, [lastMove]);

  return (
    <group ref={groupRef}>
      {cubies.map((cubie) => (
        <Cubie 
          key={cubie.id} 
          position={cubie.position} 
          rotation={cubie.rotation} 
          materials={materials} 
        />
      ))}
    </group>
  );
}

function Cubie({ position, rotation, materials }: { 
  position: THREE.Vector3, 
  rotation: THREE.Euler,
  materials: THREE.MeshStandardMaterial[] 
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      material={materials}
    >
      <boxGeometry args={[0.95, 0.95, 0.95]} />
    </mesh>
  );
}
