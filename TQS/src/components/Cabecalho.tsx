import { Link, NavLink } from 'react-router-dom'
import type { Conta } from '../types/conta'

type PropriedadesCabecalho = {
  conta: Conta | null
  aoTerminarSessao: () => void
}

export function Cabecalho({ conta, aoTerminarSessao }: PropriedadesCabecalho) {
  const linkPerfil = conta?.perfil === 'medico' ? `/doutor/${conta.id}` : '/perfil'

  return (
    <header className="flex h-[76px] items-center justify-between border-b border-[#e9e8e2] sm:h-[88px]">
      <Link
        className="flex items-center gap-2.5 text-2xl font-bold tracking-[-0.08em] text-[#203a32] no-underline"
        to="/"
        aria-label="Clínica Aurora, início"
      >
        <span className="grid size-[30px] place-items-center rounded-full bg-[#d9e8dc] text-lg font-normal text-[#315949]">+</span>
        <span>aura<span className="text-[#9eaa7b]">.</span></span>
      </Link>
      <nav className="hidden h-full items-center gap-9 md:flex" aria-label="Navegação principal">
        <NavLink
          className={({ isActive }) => `flex h-full items-center text-xs no-underline ${isActive ? 'border-b-2 border-[#63816a] text-[#294a3d]' : 'text-[#747a70] transition hover:text-[#294a3d]'}`}
          end
          to="/"
        >
          Início
        </NavLink>
        <Link className="flex h-full items-center text-xs text-[#747a70] no-underline transition hover:text-[#294a3d]" to="/#especialidades">
          Especialidades
        </Link>
        <NavLink
          className={({ isActive }) => `flex h-full items-center text-xs no-underline transition hover:text-[#294a3d] ${isActive ? 'border-b-2 border-[#63816a] text-[#294a3d]' : 'text-[#747a70]'}`}
          to="/consultas"
        >
          As minhas consultas
        </NavLink>
      </nav>
      <div className="flex items-center gap-3 text-[10px] sm:gap-5 sm:text-xs">
        {conta ? (
          <>
            <Link className="max-w-28 truncate text-[#315343] no-underline sm:max-w-40" to={linkPerfil}>
              {conta.nome}
            </Link>
            <button
              className="text-[#747a70] transition hover:text-[#29483d]"
              onClick={aoTerminarSessao}
              type="button"
            >
              Sair
            </button>
          </>
        ) : (
          <>
            <Link className="text-[#747a70] no-underline transition hover:text-[#29483d]" to="/login">
              <span className="sm:hidden">Entrar / Registar</span>
              <span className="hidden sm:inline">Entrar</span>
            </Link>
            <Link className="hidden text-[#747a70] no-underline transition hover:text-[#29483d] sm:inline" to="/registo">
              Registar
            </Link>
          </>
        )}
        <Link className="flex items-center gap-2 text-[#315343] no-underline" to="/#marcar">
          <span className="size-2 rounded-full bg-[#9eaa7b]" /> Marcar consulta
        </Link>
      </div>
    </header>
  )
}
