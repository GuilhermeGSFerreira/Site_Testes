import { useState, type FormEvent } from 'react'
import { horarios, type Medico } from '../data/medicos'
import type { PedidoConsulta } from '../types/consulta'

type PropriedadesSecaoMarcacao = {
  especialidade: string
  especialidades: string[]
  medicos: Medico[]
  medicoSelecionado: Medico
  data: string
  hora: string
  hoje: string
  aviso: string
  aoAlterarEspecialidade: (especialidade: string) => void
  aoAlterarMedico: (medicoId: string) => void
  aoAlterarData: (data: string) => void
  aoAlterarHora: (hora: string) => void
  aoSubmeter: (consulta: PedidoConsulta) => boolean
}

export function SecaoMarcacao({
  especialidade,
  especialidades,
  medicos,
  medicoSelecionado,
  data,
  hora,
  hoje,
  aviso,
  aoAlterarEspecialidade,
  aoAlterarMedico,
  aoAlterarData,
  aoAlterarHora,
  aoSubmeter,
}: PropriedadesSecaoMarcacao) {
  const [nomeUtente, setNomeUtente] = useState('')
  const [telefoneUtente, setTelefoneUtente] = useState('')
  const [clinica, setClinica] = useState('Lisboa')
  const clinicas = ['Lisboa', 'Porto', 'Vila Nova de Gaia']
  const labelClass = 'flex min-w-0 flex-col gap-2 text-[11px] font-semibold text-[#73796f]'
  const inputClass =
    'h-11 w-full rounded-sm border border-[#e6e8e1] bg-[#fffefa] px-3 text-xs font-normal text-[#3f5145] outline-none transition focus:border-[#9daf9a] focus:ring-2 focus:ring-[#dce8d9]/60'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const submetida = aoSubmeter({
      utente: nomeUtente.trim(),
      telefone: telefoneUtente.trim(),
      medicoId: medicoSelecionado.id,
      data,
      hora,
    })

    if (submetida) {
      setNomeUtente('')
      setTelefoneUtente('')
    }
  }

  return (
    <section id="marcar" className="grid grid-cols-1 gap-8 border-b border-[#e9e8e2] bg-[#f4f5ef] px-0 py-14 sm:grid-cols-[.8fr_1.2fr] sm:gap-[12%] sm:px-[7.3%] sm:py-[91px]">
      <div className="pt-1 sm:pt-5">
        <span className="text-[9px] font-bold tracking-[0.17em] text-[#8c947e]">MARCAÇÃO SIMPLES, CUIDADO PRÓXIMO</span>
        <h2 className="my-4 font-serif text-[39px] font-normal leading-tight tracking-[-0.04em] text-[#29483b] sm:text-5xl">
          Vamos encontrar<br />um momento para si.
        </h2>
        <p className="max-w-[345px] text-[13px] leading-7 text-[#777d73]">
          Escolha a especialidade, o profissional e a data que melhor se adequa a si. Estamos a um passo de cuidar de si.
        </p>
        <div className="mt-10 hidden items-center gap-3 text-[9px] leading-4 text-[#81867b] sm:flex">
          <span className="grid size-[34px] place-items-center rounded-full bg-[#e1eadd] text-lg text-[#64806a]">✳</span>
          <span><strong className="text-[10px] text-[#405b49]">Tem dúvidas?</strong><br />Estamos disponíveis para ajudar.</span>
          <a className="grid size-[26px] place-items-center rounded-full border border-[#d8ded3] text-[#55715d] no-underline" href="tel:+351210000000" aria-label="Ligar para a clínica">↗</a>
        </div>
      </div>

      <div className="rounded border border-[#e9e9e2] bg-[#fffefa] p-4 shadow-xl shadow-[#354b34]/5 sm:p-[30px_34px_26px]">
        <div className="flex items-center justify-between border-b border-[#efefe9] pb-5">
          <div>
            <span className="text-[9px] font-bold tracking-[0.17em] text-[#8c947e]">A SUA PRÓXIMA VISITA</span>
            <h3 className="mt-1 font-serif text-2xl font-normal text-[#304d3e]">Marcar consulta</h3>
          </div>
          <span className="flex items-center gap-2 text-[9px] text-[#8e9588]">01 <i className="h-px w-5 bg-[#d9ddd4]" /> 02</span>
        </div>
        <form className="pt-5" onSubmit={handleSubmit}>
          <label className={`${labelClass} mb-4`}>
            Clínica
            <select className={inputClass} onChange={(event) => setClinica(event.target.value)} value={clinica}>
              {clinicas.map((item) => <option key={item}>{item}</option>)}
            </select>
          </label>
          <div className="mb-4 grid grid-cols-2 gap-2.5">
            <label className={labelClass}>
              Especialidade
              <select className={inputClass} value={especialidade} onChange={(event) => aoAlterarEspecialidade(event.target.value)}>
                {especialidades.map((item) => <option key={item}>{item}</option>)}
              </select>
            </label>
            <label className={labelClass}>
              Profissional
              <select className={inputClass} value={medicoSelecionado.id} onChange={(event) => aoAlterarMedico(event.target.value)}>
                {medicos.map((medico) => <option key={medico.id} value={medico.id}>{medico.nome}</option>)}
              </select>
            </label>
          </div>
          <div className="mb-4 flex items-center gap-2.5 border border-[#e9eee6] bg-[#f7f8f3] p-2.5">
            <span className={`grid size-9 shrink-0 place-items-center rounded-full text-[9px] font-bold ${medicoSelecionado.cor}`}>
              {medicoSelecionado.iniciais}
            </span>
            <span className="flex min-w-0 flex-1 flex-col gap-1">
              <strong className="truncate text-[10px] font-semibold text-[#435a49]">{medicoSelecionado.nome}</strong>
              <small className="truncate text-[8px] text-[#888e82]">{medicoSelecionado.descricaoDias} · {medicoSelecionado.inicio}–{medicoSelecionado.fim}</small>
            </span>
            <span className="flex items-center gap-1 text-[8px] text-[#6c8069]"><i className="size-1.5 rounded-full bg-[#8eaa80]" /> Horário</span>
          </div>
          <div className="mb-4 grid grid-cols-[1.2fr_.8fr] gap-2.5">
            <label className={labelClass}>
              Data da consulta
              <input className={inputClass} min={hoje} onChange={(event) => aoAlterarData(event.target.value)} required type="date" value={data} />
            </label>
            <label className={labelClass}>
              Hora
              <select className={inputClass} onChange={(event) => aoAlterarHora(event.target.value)} value={hora}>
                {horarios.map((slot) => <option key={slot}>{slot}</option>)}
              </select>
            </label>
          </div>
          <div className="mb-4 grid grid-cols-2 gap-2.5">
            <label className={labelClass}>
              O seu nome
              <input className={inputClass} autoComplete="name" onChange={(event) => setNomeUtente(event.target.value)} placeholder="Nome completo" required value={nomeUtente} />
            </label>
            <label className={labelClass}>
              Telemóvel
              <input className={inputClass} autoComplete="tel" onChange={(event) => setTelefoneUtente(event.target.value)} placeholder="+351 912 345 678" required type="tel" value={telefoneUtente} />
            </label>
          </div>
          <button className="flex min-h-12 w-full items-center justify-center gap-6 rounded-sm bg-[#315545] px-5 text-xs font-semibold text-white transition hover:-translate-y-px hover:bg-[#244537] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#789477]" type="submit">
            Confirmar marcação <span className="text-base">↗</span>
          </button>
          {aviso && (
            <p className={`mt-3 text-[10px] leading-4 ${aviso.startsWith('Este médico') ? 'text-[#a35445]' : 'text-[#4a7351]'}`} role="status">
              {aviso}
            </p>
          )}
          <p className="mt-3 text-center text-[8px] text-[#9a9e94]">⌑ Os seus dados são tratados com total confidencialidade.</p>
        </form>
      </div>
    </section>
  )
}
