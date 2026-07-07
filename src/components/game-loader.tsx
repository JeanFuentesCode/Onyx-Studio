
'use client';

import dynamic from 'next/dynamic';
import { Trophy } from 'lucide-react';

/**
 * GameLoader.tsx
 * 
 * Este componente es fundamental para evitar el error de 'ReactCurrentOwner' en React 19.
 * Al usar dynamic con ssr: false, garantizamos que el pesado motor 3D (Three.js/Fiber)
 * solo se cargue en el cliente, evitando conflictos con las APIs internas de React
 * durante el renderizado en el servidor.
 */

const LoadingState = () => (
  <div className="flex flex-col items-center justify-center min-h-[400px] text-muted-foreground animate-pulse">
    <Trophy className="w-12 h-12 mb-4 opacity-20" />
    <p className="text-sm font-medium">Iniciando motor 3D...</p>
  </div>
);

// Importamos el juego dinámicamente deshabilitando SSR
const DynamicGame = dynamic(
  () => import('@/components/rubiks-cube-game').then((mod) => mod.RubiksCubeGame),
  { 
    ssr: false,
    loading: () => <LoadingState />
  }
);

export function GameLoader() {
  return (
    <div className="w-full flex items-center justify-center">
      <DynamicGame />
    </div>
  );
}
