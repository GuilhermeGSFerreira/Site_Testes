import { Link } from 'react-router-dom'
import { medicos } from '../data/medicos'
import type { Consulta } from '../types/consulta'
import { formatarData } from '../utils/datas'

type PropriedadesSecaoConsultas = {
  consultas: Consulta[]
  aoCancelar: (consultaId: number) => void
}

export function SecaoConsultas({ consultas, aoCancelar }: PropriedadesSecaoConsultas) {
  return (
    <section className="px-0 py-14 sm:px-[7.3%] sm:py-[78px]" id="consultas">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <span className="text-[9px] font-bold tracking-[0.17em] text-[#8c947e]">A SUA AGENDA</span>
          <h2 className="mt-2 font-serif text-[25px] font-normal tracking-tight text-[#29483b] sm:text-3xl">
            Consultas marcadas<span className="ml-2 inline-grid size-[22px] place-items-center rounded-full bg-[#e8eee4] align-middle font-sans text-[10px] text-[#5f775e]">{consultas.length}</span>
          </h2>
        </div>
        {consultas.length > 0 && <span className="text-[9px] text-[#91978b]">Atualizada agora</span>}
      </div>
      {consultas.length === 0 ? (
        <div className="flex min-h-[147px] flex-col items-center justify-center border border-dashed border-[#dfe3d9] text-[10px] text-[#838a7e]">
          <span className="mb-2 grid size-7 place-items-center rounded-full bg-[#eef2eb] text-base text-[#628066]">＋</span>
          <p className="mb-2">Ainda não tem consultas marcadas.</p>
          <Link className="text-[#55735d] no-underline" to="/#marcar">Marque a sua primeira consulta <span>↗</span></Link>
        </div>
      ) : (
        <div className="border-t border-[#e9e8e2]">
          {consultas.map((consulta) => {
            const medico = medicos.find((item) => item.id === consulta.medicoId) ?? medicos[0]
            return (
              <article className="flex min-h-[78px] items-center gap-3 border-b border-[#e9e8e2]" key={consulta.id}>
                <span className={`grid size-9 shrink-0 place-items-center rounded-full text-[9px] font-bold ${medico.cor}`}>{medico.iniciais}</span>
                <div className="flex flex-1 flex-col gap-1">
                  <strong className="text-[11px] font-semibold text-[#405849]">{medico.nome}</strong>
                  <span className="text-[9px] text-[#8b9086]">{medico.especialidade} · {consulta.utente}</span>
                </div>
                <div className="flex min-w-[100px] flex-col gap-1 sm:min-w-[175px]">
                  <span className="text-[9px] text-[#8b9086]">{formatarData(consulta.data)}</span>
                  <strong className="text-[10px] font-semibold text-[#4c6551]">{consulta.hora}</strong>
                </div>
                <span className="flex items-center gap-1.5 text-[9px] text-[#668068]">
                  <i className="size-1.5 rounded-full bg-[#8eaa80]" /><span className="hidden sm:inline">Confirmada</span>
                </span>
                <button
                  className="ml-2 text-[9px] text-[#a35445] underline"
                  onClick={() => aoCancelar(consulta.id)}
                  type="button"
                >
                  Cancelar
                </button>
              </article>
            )
          })}
        </div>
      )}
    </section>
  )
}
