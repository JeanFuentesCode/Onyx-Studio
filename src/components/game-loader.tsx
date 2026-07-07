
'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Trophy } from 'lucide-react';

/**
 * GameLoader.tsx
 * 
 * Este componente utiliza dynamic con ssr: false para garantizar
 * que el motor 3D NO se evalúe en el servidor.
 */

const LoadingState = () => (
  <div className="flex flex-col items-center justify-center min-h-[400px] text-muted-foreground animate-pulse">
    <div className="relative">
      <Trophy className="w-16 h-16 mb-4 opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
    <p className="text-sm font-medium tracking-wide">Iniciando Rubik 3D...</p>
    <p className="text-xs opacity-50 mt-2">Optimizando para React 19</p>
  </div>
);

const DynamicGame = dynamic(
  () => import('@/components/rubiks-cube-game').then((mod) => mod.RubiksCubeGame),
  { 
    ssr: false,
    loading: () => <LoadingState />
  }
);

export function GameLoader() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <LoadingState />;

  return (
    <div className="w-full flex items-center justify-center">
      <DynamicGame />
    </div>
  );
}
