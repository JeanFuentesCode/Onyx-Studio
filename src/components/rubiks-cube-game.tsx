
'use client';

import React, { useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Cube3D } from '@/components/cube-3d';
import { Button } from '@/components/ui/button';
import { RotateCcw, Shuffle, ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Square } from 'lucide-react';
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
      if (count >= 20) {
        clearInterval(interval);
        setIsShuffling(false);
        toast({
          title: "Cubo mezclado",
          description: "¡Suerte resolviéndolo!",
        });
      }
    }, 150);
  }, [handleMove, isShuffling]);

  const resetCube = useCallback(() => {
    // In a real app, we'd reset the internal state. 
    // For this simple version, we'll just reload the page for a clean reset state.
    window.location.reload();
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {/* 3D Canvas Area */}
      <div className="w-full aspect-square max-w-[500px] relative rounded-2xl overflow-hidden bg-gradient-to-b from-card to-background border border-border shadow-2xl">
        <Canvas shadows>
          <PerspectiveCamera makeDefault position={[5, 5, 5]} />
          <OrbitControls enablePan={false} minDistance={4} maxDistance={10} />
          
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} castShadow />
          <Environment preset="city" />

          <Cube3D lastMove={move} />
        </Canvas>
      </div>

      {/* Control Panel */}
      <div className="w-full max-w-md grid grid-cols-1 gap-6">
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg" onClick={shuffleCube} disabled={isShuffling} className="gap-2">
            <Shuffle className="w-4 h-4" /> Mezclar
          </Button>
          <Button variant="secondary" size="lg" onClick={resetCube} className="gap-2">
            <RotateCcw className="w-4 h-4" /> Reiniciar
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center gap-2 border rounded-xl p-3 bg-muted/30">
            <span className="text-[10px] font-bold uppercase text-muted-foreground">Superior/Inferior</span>
            <div className="flex gap-2">
              <Button size="sm" variant="primary" onClick={() => handleMove('U')}>U</Button>
              <Button size="sm" variant="primary" onClick={() => handleMove('D')}>D</Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 border rounded-xl p-3 bg-muted/30">
            <span className="text-[10px] font-bold uppercase text-muted-foreground">Lados</span>
            <div className="flex gap-2">
              <Button size="sm" variant="primary" onClick={() => handleMove('L')}>L</Button>
              <Button size="sm" variant="primary" onClick={() => handleMove('R')}>R</Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 border rounded-xl p-3 bg-muted/30">
            <span className="text-[10px] font-bold uppercase text-muted-foreground">Frontal/Trasero</span>
            <div className="flex gap-2">
              <Button size="sm" variant="primary" onClick={() => handleMove('F')}>F</Button>
              <Button size="sm" variant="primary" onClick={() => handleMove('B')}>B</Button>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Tip: Arrastra el fondo para rotar la cámara.
        </p>
      </div>
    </div>
  );
}
