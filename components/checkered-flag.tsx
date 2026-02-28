export function CheckeredFlag() {
  return (
    <div className="w-full h-full flex" aria-hidden="true">
      {Array.from({ length: 60 }).map((_, i) => (
        <div
          key={i}
          className={`flex-1 h-full ${i % 2 === 0 ? "bg-foreground/10" : "bg-transparent"}`}
        />
      ))}
    </div>
  );
}
