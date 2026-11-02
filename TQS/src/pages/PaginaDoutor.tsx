import { Link, useParams } from 'react-router-dom'
import { medicos } from '../data/medicos'
import type { Conta } from '../types/conta'

type PropriedadesPaginaDoutor = {
  contas: Conta[]
}

const consultasFicticias = [
  { hora: '09:00', utente: 'Utente de demonstração 01' },
  { hora: '10:30', utente: 'Utente de demonstração 02' },
  { hora: '14:00', utente: 'Utente de demonstração 03' },
]

export function PaginaDoutor({ contas }: PropriedadesPaginaDoutor) {
  const { id } = useParams()
  const conta = contas.find((item) => item.id === id && item.perfil === 'medico')
  const medico = medicos.find((item) => item.id === id)
  const nome = conta?.nome ?? medico?.nome
  const especialidade = conta?.especialidade ?? medico?.especialidade

  if (!nome || !especialidade) {
    return (
      <section className="py-16">
        <h1 className="font-serif text-3xl text-[#29483b]">Médico não encontrado</h1>
        <Link className="mt-4 inline-block text-sm text-[#55735d] underline" to="/">Voltar ao início</Link>
      </section>
    )
  }

  return (
    <section className="py-12 sm:py-16">
      <span className="text-[9px] font-bold tracking-[0.17em] text-[#8c947e]">ÁREA DO MÉDICO · DADOS FICTÍCIOS</span>
      <h1 className="mt-3 font-serif text-4xl font-normal tracking-[-0.04em] text-[#29483b]">
        Olá, {nome}
      </h1>
      <p className="mt-3 text-[13px] text-[#777d73]">{especialidade}</p>
      <div className="mt-8 max-w-2xl border-t border-[#e9e8e2]">
        <h2 className="py-5 font-serif text-2xl text-[#29483b]">Agenda de demonstração</h2>
        {consultasFicticias.map((consulta) => (
          <article className="flex min-h-[64px] items-center justify-between border-t border-[#e9e8e2] text-xs" key={consulta.hora}>
            <span className="text-[#777d73]">{consulta.utente}</span>
            <strong className="text-[#4c6551]">{consulta.hora}</strong>
          </article>
        ))}
      </div>
      <p className="mt-6 text-[10px] text-[#92978b]">Os utentes e horários apresentados são fictícios e servem apenas para o exercício.</p>
    </section>
  )
}
