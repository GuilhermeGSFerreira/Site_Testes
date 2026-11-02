import { Link } from 'react-router-dom'
import type { Conta } from '../types/conta'

type PropriedadesPaginaPerfil = {
  conta: Conta
}

export function PaginaPerfil({ conta }: PropriedadesPaginaPerfil) {
  return (
    <section className="mx-auto min-h-[65vh] max-w-2xl py-12 sm:py-16">
      <span className="text-[9px] font-bold tracking-[0.17em] text-[#8c947e]">A SUA CONTA</span>
      <h1 className="mt-3 font-serif text-4xl font-normal tracking-[-0.04em] text-[#29483b]">
        Olá, {conta.nome}
      </h1>
      <div className="mt-8 grid gap-4 border-y border-[#e9e8e2] py-6 text-xs sm:grid-cols-2">
        <div>
          <span className="text-[#8b9086]">Nome</span>
          <p className="mt-1 font-semibold text-[#405849]">{conta.nome}</p>
        </div>
        <div>
          <span className="text-[#8b9086]">Tipo de conta</span>
          <p className="mt-1 font-semibold capitalize text-[#405849]">{conta.perfil}</p>
        </div>
      </div>
      <Link
        className="mt-6 inline-flex min-h-11 items-center rounded-sm bg-[#315545] px-5 text-xs font-semibold text-white no-underline transition hover:bg-[#244537]"
        to="/consultas"
      >
        Ver as minhas consultas
      </Link>
      <p className="mt-6 text-[10px] leading-5 text-[#92978b]">
        Demonstração local: o perfil termina quando a página é atualizada.
      </p>
    </section>
  )
}
