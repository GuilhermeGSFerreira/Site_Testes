import { SecaoConsultas } from '../components/SecaoConsultas'
import type { Consulta } from '../types/consulta'

type PropriedadesPaginaConsultas = {
  consultas: Consulta[]
  aoCancelar: (consultaId: number) => void
}

export function PaginaConsultas({ consultas, aoCancelar }: PropriedadesPaginaConsultas) {
  return (
    <>
      <header className="border-b border-[#e9e8e2] py-12 sm:py-16">
        <span className="text-[9px] font-bold tracking-[0.17em] text-[#8c947e]">A SUA AGENDA</span>
        <h1 className="mt-3 font-serif text-4xl font-normal tracking-[-0.04em] text-[#29483b] sm:text-5xl">
          As minhas consultas
        </h1>
        <p className="mt-3 max-w-lg text-[13px] leading-7 text-[#777d73]">
          Consulte aqui as marcações que fez nesta sessão.
        </p>
      </header>
      <SecaoConsultas aoCancelar={aoCancelar} consultas={consultas} />
    </>
  )
}
