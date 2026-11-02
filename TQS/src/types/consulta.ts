export type Consulta = {
  id: number
  utente: string
  telefone: string
  medicoId: string
  data: string
  hora: string
}

export type PedidoConsulta = Omit<Consulta, 'id'>
