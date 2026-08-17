export const AmbientBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.08)_0%,rgba(0,240,255,0)_50%)]" />
      <div className="absolute bottom-0 right-0 h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.08)_0%,rgba(99,102,241,0)_50%)]" />
    </div>
  );
};
