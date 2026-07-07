
'use client';

import dynamic from 'next/dynamic';
import { Trophy } from 'lucide-react';

// Este componente de carga se usa mientras el motor 3D se inicializa en el cliente
const LoadingState = () => (
  <div className="flex flex-col items-center justify-center min-h-[400px] text-muted-foreground animate-pulse">
    <Trophy className="w-12 h-12 mb-4 opacity-20" />
    <p>Iniciando experiencia 3D...</p>
  </div>
);

// Cargamos el juego dinámicamente con SSR desactivado
const RubiksCubeGame = dynamic(
  () => import('@/components/rubiks-cube-game').then((mod) => mod.RubiksCubeGame),
  { 
    ssr: false,
    loading: () => <LoadingState />
  }
);

export function GameLoader() {
  return <RubiksCubeGame />;
}
