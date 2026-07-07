
import React from 'react';
import { Card } from '@/components/ui/card';
import { Trophy, Info } from 'lucide-react';
import { GameLoader } from '@/components/game-loader';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground pb-20 md:pb-8">
      <header className="p-6 flex items-center justify-between border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
            <Trophy className="text-primary-foreground w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">Rubik's Master 3D</h1>
        </div>
        <div className="flex gap-2">
          <Card className="px-3 py-1 flex items-center gap-2 bg-muted/50 border-none hidden sm:flex">
            <Info className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium">Usa los botones para girar las caras</span>
          </Card>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 max-w-4xl mx-auto w-full">
        {/* GameLoader aísla la lógica 3D del servidor */}
        <GameLoader />
      </main>

      <footer className="p-4 text-center text-muted-foreground text-xs">
        <p>Desarrollado con Three.js y React Three Fiber • React 19 Ready</p>
      </footer>
    </div>
  );
}
