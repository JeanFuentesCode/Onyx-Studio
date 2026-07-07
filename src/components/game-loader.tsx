
'use client';

import dynamic from 'next/dynamic';
import { Trophy } from 'lucide-react';

/**
 * GameLoader.tsx
 * 
 * Este componente es fundamental para evitar el error de 'ReactCurrentOwner' en React 19.
 * Al usar dynamic con ssr: false, garantizamos que el pesado motor 3D (Three.js/Fiber)
 * solo se cargue en el cliente. En React 19 + Next.js 15, esto es vital para evitar
 * que el servidor intente acceder a propiedades de React que solo existen en el navegador.
 */

const LoadingState = () => (
  <div className="flex flex-col items-center justify-center min-h-[400px] text-muted-foreground animate-pulse">
    <div className="relative">
      <Trophy className="w-16 h-16 mb-4 opacity-20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
    <p className="text-sm font-medium tracking-wide">Cargando motor Rubik 3D...</p>
    <p className="text-xs opacity-50 mt-2">Optimizando para React 19</p>
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
