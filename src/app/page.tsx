
import React from 'react';
import { Box, Code2, Cpu, Globe, Zap } from 'lucide-react';

export default function OnyxPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center">
            <Box className="text-black w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Onyx Studio</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <a href="#" className="hover:text-white transition-colors">Proyectos</a>
          <a href="#" className="hover:text-white transition-colors">Servicios</a>
          <a href="#" className="hover:text-white transition-colors">Laboratorio</a>
          <button className="px-4 py-2 bg-white text-black rounded-full hover:bg-white/90 transition-colors">
            Contacto
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 pt-24 pb-32">
        <div className="space-y-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/80">
            <Zap className="w-3 h-3 text-yellow-400" />
            <span>Nueva era de desarrollo digital</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">
            CONSTRUYENDO EL <br />
            <span className="text-white/40">FUTURO CÓDIGO</span> A CÓDIGO.
          </h1>
          
          <p className="text-xl text-white/60 max-w-xl leading-relaxed">
            Onyx Studio es un ecosistema de desarrollo enfocado en la creación de experiencias digitales de alto rendimiento y diseño minimalista.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-transform active:scale-95">
              Empezar Proyecto
            </button>
            <button className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-lg hover:bg-white/5 transition-transform active:scale-95">
              Ver Demo
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-32">
          <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
            <Cpu className="w-10 h-10 mb-6 text-white/40 group-hover:text-white transition-colors" />
            <h3 className="text-xl font-bold mb-2">Arquitectura Robusta</h3>
            <p className="text-white/60 text-sm">Sistemas diseñados para escalar sin comprometer la velocidad ni la estabilidad.</p>
          </div>
          
          <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
            <Globe className="w-10 h-10 mb-6 text-white/40 group-hover:text-white transition-colors" />
            <h3 className="text-xl font-bold mb-2">Despliegue Global</h3>
            <p className="text-white/60 text-sm">Infraestructura distribuida para llegar a usuarios en cualquier parte del mundo.</p>
          </div>
          
          <div className="p-8 border border-white/10 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors group">
            <Code2 className="w-10 h-10 mb-6 text-white/40 group-hover:text-white transition-colors" />
            <h3 className="text-xl font-bold mb-2">Código Limpio</h3>
            <p className="text-white/60 text-sm">Estándares de desarrollo rigurosos para un mantenimiento sencillo y eficiente.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 p-12 text-center text-white/40 text-sm">
        <p>&copy; 2024 Onyx Studio. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
