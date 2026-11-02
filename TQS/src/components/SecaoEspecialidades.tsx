type PropriedadesSecaoEspecialidades = {
  especialidades: string[]
  especialidadeSelecionada: string
  aoSelecionar: (especialidade: string) => void
}

const specialtyIcons = ['♡', '✳', '⌂', '＋']

export function SecaoEspecialidades({
  especialidades,
  especialidadeSelecionada,
  aoSelecionar,
}: PropriedadesSecaoEspecialidades) {
  return (
    <section
      className="flex flex-col justify-center gap-6 border-b border-[#e9e8e2] py-8 sm:min-h-[153px] sm:flex-row sm:items-center sm:justify-between sm:gap-8"
      id="especialidades"
    >
      <div>
        <span className="text-[9px] font-bold tracking-[0.17em] text-[#8c947e]">CUIDADOS PARA CADA FASE</span>
        <h2 className="mt-2 font-serif text-2xl font-normal tracking-tight text-[#29483b]">Encontre o cuidado certo.</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {especialidades.map((especialidade, index) => (
          <button
            className={`flex min-h-11 items-center gap-2 rounded-sm border px-3 text-[10px] transition ${
              especialidadeSelecionada === especialidade
                ? 'border-[#cbd8c8] bg-[#f0f4ed] text-[#345443]'
                : 'border-[#e8e9e1] text-[#73796f] hover:bg-[#f0f4ed]'
            }`}
            key={especialidade}
            onClick={() => aoSelecionar(especialidade)}
            type="button"
          >
            <span className="grid size-[22px] place-items-center rounded-full bg-[#e6eee4] text-sm text-[#63816a]">
              {specialtyIcons[index]}
            </span>
            {especialidade}<span className="ml-1 text-[#a0a598]">↗</span>
          </button>
        ))}
      </div>
    </section>
  )
}
