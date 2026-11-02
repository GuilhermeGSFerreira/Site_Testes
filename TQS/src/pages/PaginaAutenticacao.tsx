import { useState, type FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { medicos } from '../data/medicos'
import type { Conta, DadosRegisto, PerfilConta } from '../types/conta'

type ModoAutenticacao = 'login' | 'registo'

type PropriedadesPaginaAutenticacao = {
  modo: ModoAutenticacao
  aoAutenticar: (conta: Conta) => void
  aoRegistar: (dados: DadosRegisto) => Conta | null
  aoEntrar: (nome: string, palavraPasse: string) => Conta | null
}

export function PaginaAutenticacao({ modo, aoAutenticar, aoRegistar, aoEntrar }: PropriedadesPaginaAutenticacao) {
  const [nome, setNome] = useState('')
  const [palavraPasse, setPalavraPasse] = useState('')
  const [perfil, setPerfil] = useState<PerfilConta>('cliente')
  const [especialidade, setEspecialidade] = useState(medicos[0].especialidade)
  const [erro, setErro] = useState('')
  const navegar = useNavigate()
  const especialidades = [...new Set(medicos.map((medico) => medico.especialidade))]
  const eRegisto = modo === 'registo'
  const inputClass =
    'h-11 w-full rounded-sm border border-[#e6e8e1] bg-[#fffefa] px-3 text-xs text-[#3f5145] outline-none transition focus:border-[#9daf9a] focus:ring-2 focus:ring-[#dce8d9]/60'

  function submeter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setErro('')

    const conta = eRegisto
      ? aoRegistar({
          nome: nome.trim(),
          palavraPasse,
          perfil,
          especialidade: perfil === 'medico' ? especialidade : '',
        })
      : aoEntrar(nome.trim(), palavraPasse)

    if (!conta) {
      setErro(eRegisto ? 'Este nome já está registado.' : 'Nome ou palavra-passe incorretos.')
      return
    }

    aoAutenticar(conta)
    navegar(conta.perfil === 'medico' ? `/doutor/${conta.id}` : '/perfil')
  }

  return (
    <section className="mx-auto grid min-h-[65vh] max-w-lg content-center py-12">
      <span className="text-[9px] font-bold tracking-[0.17em] text-[#8c947e]">
        {eRegisto ? 'JUNTE-SE À AURA' : 'BEM-VINDO DE VOLTA'}
      </span>
      <h1 className="mt-3 font-serif text-4xl font-normal tracking-[-0.04em] text-[#29483b]">
        {eRegisto ? 'Criar conta' : 'Iniciar sessão'}
      </h1>
      <p className="mt-3 text-[13px] leading-7 text-[#777d73]">
        {eRegisto ? 'Crie a sua conta para continuar.' : 'Entre com os dados da sua conta.'}
      </p>

      <form className="mt-7 grid gap-4 rounded border border-[#e9e9e2] bg-[#fffefa] p-5 shadow-xl shadow-[#354b34]/5 sm:p-7" onSubmit={submeter}>
        <label className="grid gap-2 text-[11px] font-semibold text-[#73796f]">
          Nome
          <input
            autoComplete="username"
            className={inputClass}
            onChange={(event) => setNome(event.target.value)}
            required
            value={nome}
          />
        </label>
        <label className="grid gap-2 text-[11px] font-semibold text-[#73796f]">
          Palavra-passe
          <input
            autoComplete={eRegisto ? 'new-password' : 'current-password'}
            className={inputClass}
            onChange={(event) => setPalavraPasse(event.target.value)}
            required
            type="password"
            value={palavraPasse}
          />
        </label>

        {eRegisto && (
          <>
            <label className="grid gap-2 text-[11px] font-semibold text-[#73796f]">
              Tipo de conta
              <select
                className={inputClass}
                onChange={(event) => setPerfil(event.target.value === 'medico' ? 'medico' : 'cliente')}
                value={perfil}
              >
                <option value="cliente">Cliente</option>
                <option value="medico">Médico</option>
              </select>
            </label>
            {perfil === 'medico' && (
              <label className="grid gap-2 text-[11px] font-semibold text-[#73796f]">
                Especialidade
                <select
                  className={inputClass}
                  onChange={(event) => setEspecialidade(event.target.value)}
                  value={especialidade}
                >
                  {especialidades.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
            )}
          </>
        )}

        <button className="mt-1 flex min-h-12 w-full items-center justify-center rounded-sm bg-[#315545] px-5 text-xs font-semibold text-white transition hover:bg-[#244537]" type="submit">
          {eRegisto ? 'Criar conta' : 'Entrar'}
        </button>
        {erro && <p className="text-xs text-[#a35445]" role="alert">{erro}</p>}
      </form>

      <p className="mt-5 text-center text-xs text-[#777d73]">
        {eRegisto ? 'Já tem conta?' : 'Ainda não tem conta?'}{' '}
        <Link className="text-[#55735d] underline" to={eRegisto ? '/login' : '/registo'}>
          {eRegisto ? 'Iniciar sessão' : 'Registar'}
        </Link>
      </p>
      <p className="mt-6 text-center text-[10px] leading-5 text-[#92978b]">
        Demonstração local para fins educativos. Não utilize palavras-passe reais; as contas só existem nesta sessão.
      </p>
    </section>
  )
}
