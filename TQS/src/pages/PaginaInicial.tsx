import { useMemo, useState } from 'react'
import { SecaoMarcacao } from '../components/SecaoMarcacao'
import { SecaoDestaque } from '../components/SecaoDestaque'
import { SecaoEspecialidades } from '../components/SecaoEspecialidades'
import { medicos } from '../data/medicos'
import type { PedidoConsulta } from '../types/consulta'
import { obterProximoDiaUtil } from '../utils/datas'

type PropriedadesPaginaInicial = {
  aoSubmeterConsulta: (pedido: PedidoConsulta) => void
}

export function PaginaInicial({ aoSubmeterConsulta }: PropriedadesPaginaInicial) {
  const [especialidade, setEspecialidade] = useState('Cardiologia')
  const [medicoId, setMedicoId] = useState('ines')
  const [data, setData] = useState(obterProximoDiaUtil)
  const [hora, setHora] = useState('09:00')
  const [aviso, setAviso] = useState('')
  const [hoje] = useState(() => new Date().toISOString().slice(0, 10))

  const especialidades = [...new Set(medicos.map((medico) => medico.especialidade))]
  const medicosFiltrados = medicos.filter((medico) => medico.especialidade === especialidade)
  const medicoSelecionado = medicos.find((medico) => medico.id === medicoId) ?? medicos[0]
  const diaSelecionado = useMemo(
    () => (data ? new Date(`${data}T12:00:00`).getDay() : null),
    [data],
  )

  function alterarEspecialidade(valor: string) {
    setEspecialidade(valor)
    const proximoMedico = medicos.find((medico) => medico.especialidade === valor)
    if (proximoMedico) setMedicoId(proximoMedico.id)
    setAviso('')
  }

  function submeterConsulta(pedido: PedidoConsulta) {
    if (diaSelecionado === null || !medicoSelecionado.dias.includes(diaSelecionado)) {
      setAviso(`Este médico não dá consultas nesse dia. Dias de consulta: ${medicoSelecionado.descricaoDias}.`)
      return false
    }

    aoSubmeterConsulta(pedido)
    setAviso('Consulta marcada com sucesso. Enviámos os detalhes para o seu contacto.')
    return true
  }

  return (
    <>
      <SecaoDestaque />
      <SecaoEspecialidades
        especialidades={especialidades}
        especialidadeSelecionada={especialidade}
        aoSelecionar={alterarEspecialidade}
      />
      <SecaoMarcacao
        especialidade={especialidade}
        especialidades={especialidades}
        medicos={medicosFiltrados}
        medicoSelecionado={medicoSelecionado}
        data={data}
        hora={hora}
        hoje={hoje}
        aviso={aviso}
        aoAlterarEspecialidade={alterarEspecialidade}
        aoAlterarMedico={(valor) => {
          setMedicoId(valor)
          setAviso('')
        }}
        aoAlterarData={(valor) => {
          setData(valor)
          setAviso('')
        }}
        aoAlterarHora={setHora}
        aoSubmeter={submeterConsulta}
      />
    </>
  )
}
