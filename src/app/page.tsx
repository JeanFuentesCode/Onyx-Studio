export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8 text-center">
      <h1 className="text-4xl font-bold tracking-tight mb-4">Nuevo Proyecto</h1>
      <p className="text-muted-foreground text-lg max-w-md">
        Tu aplicación ha sido reseteada. Cuéntame qué quieres construir ahora y empezaré a programarlo para ti.
      </p>
    </div>
  );
}
