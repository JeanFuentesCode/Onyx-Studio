
'use client';

import React, { useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Cube3D } from '@/components/cube-3d';
import { Button } from '@/components/ui/button';
import { RotateCcw, Shuffle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

export type CubeMove = 'U' | 'D' | 'L' | 'R' | 'F' | 'B' | 'Ui' | 'Di' | 'Li' | 'Ri' | 'Fi' | 'Bi';

export function RubiksCubeGame() {
  const [move, setMove] = useState<{ type: CubeMove; timestamp: number } | null>(null);
  const [isShuffling, setIsShuffling] = useState(false);

  const handleMove = useCallback((moveType: CubeMove) => {
    setMove({ type: moveType, timestamp: Date.now() });
  }, []);

  const shuffleCube = useCallback(() => {
    if (isShuffling) return;
    setIsShuffling(true);
    
    const moves: CubeMove[] = ['U', 'D', 'L', 'R', 'F', 'B'];
    let count = 0;
    const interval = setInterval(() => {
      const randomMove = moves[Math.floor(Math.random() * moves.length)];
      handleMove(randomMove);
      count++;
      if (count >= 15) {
        clearInterval(interval);
        setIsShuffling(false);
        toast({
          title: "¡Cubo mezclado!",
          description: "Intenta resolverlo ahora.",
        });
      }
    }, 200);
  }, [handleMove, isShuffling]);

  const resetCube = useCallback(() => {
    window.location.reload();
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="w-full aspect-square max-w-[450px] relative rounded-3xl overflow-hidden bg-card border border-border shadow-2xl">
        <Canvas shadows gl={{ antialias: true }}>
          <PerspectiveCamera makeDefault position={[5, 5, 5]} fov={50} />
          <OrbitControls enablePan={false} minDistance={4} maxDistance={10} makeDefault />
          
          <ambientLight intensity={1.5} />
          <pointLight position={[10, 10, 10]} intensity={2} castShadow />
          <Environment preset="city" />

          <Cube3D lastMove={move} />
        </Canvas>
      </div>

      <div className="w-full max-w-md flex flex-col gap-6">
        <div className="flex justify-center gap-3">
          <Button variant="outline" size="lg" onClick={shuffleCube} disabled={isShuffling} className="rounded-full px-6">
            <Shuffle className="w-4 h-4 mr-2" /> Mezclar
          </Button>
          <Button variant="secondary" size="lg" onClick={resetCube} className="rounded-full px-6">
            <RotateCcw className="w-4 h-4 mr-2" /> Reiniciar
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-center uppercase tracking-wider text-muted-foreground">Caras</p>
            <div className="grid grid-cols-3 gap-2">
              <Button size="sm" variant="outline" onClick={() => handleMove('U')} className="font-bold">U</Button>
              <Button size="sm" variant="outline" onClick={() => handleMove('L')} className="font-bold">L</Button>
              <Button size="sm" variant="outline" onClick={() => handleMove('F')} className="font-bold">F</Button>
              <Button size="sm" variant="outline" onClick={() => handleMove('D')} className="font-bold">D</Button>
              <Button size="sm" variant="outline" onClick={() => handleMove('R')} className="font-bold">R</Button>
              <Button size="sm" variant="outline" onClick={() => handleMove('B')} className="font-bold">B</Button>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-bold text-center uppercase tracking-wider text-muted-foreground">Inversos</p>
            <div className="grid grid-cols-3 gap-2">
              <Button size="sm" variant="secondary" onClick={() => handleMove('Ui')} className="font-bold">U'</Button>
              <Button size="sm" variant="secondary" onClick={() => handleMove('Li')} className="font-bold">L'</Button>
              <Button size="sm" variant="secondary" onClick={() => handleMove('Fi')} className="font-bold">F'</Button>
              <Button size="sm" variant="secondary" onClick={() => handleMove('Di')} className="font-bold">D'</Button>
              <Button size="sm" variant="secondary" onClick={() => handleMove('Ri')} className="font-bold">R'</Button>
              <Button size="sm" variant="secondary" onClick={() => handleMove('Bi')} className="font-bold">B'</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
