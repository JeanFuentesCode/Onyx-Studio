
import React from 'react';
import { Sparkles } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-background">
      <div className="max-w-2xl w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-4">
          <Sparkles className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-5xl font-extrabold tracking-tight">
          Lienzo en Blanco
        </h1>
        <p className="text-xl text-muted-foreground">
          He borrado todo. Ahora el proyecto es tuyo. ¿Qué quieres construir desde cero?
        </p>
      </div>
    </div>
  );
}
