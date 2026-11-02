export function Rodape() {
  return (
    <footer className="flex min-h-[75px] items-center justify-between gap-3 border-t border-[#e9e8e2] text-[9px] text-[#90958a]">
      <a className="flex items-center gap-2 text-xl font-bold tracking-[-0.08em] text-[#203a32] no-underline" href="#inicio">
        <span className="grid size-[25px] place-items-center rounded-full bg-[#d9e8dc] text-base font-normal text-[#315949]">+</span>
        <span>aurora<span className="text-[#9eaa7b]">.</span></span>
      </a>
      <span className="hidden sm:inline">Clínica Aura · Cuidamos de si, perto de si.</span>
      <span>© 2025 Clínica Aura</span>
    </footer>
  )
}
