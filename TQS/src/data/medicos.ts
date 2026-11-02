export type Medico = {
  id: string
  nome: string
  especialidade: string
  iniciais: string
  cor: string
  dias: number[]
  descricaoDias: string
  inicio: string
  fim: string
}

export const medicos: Medico[] = [
  {
    id: 'ines',
    nome: 'Dra. Inês Carvalho',
    especialidade: 'Cardiologia',
    iniciais: 'IC',
    cor: 'bg-[#dce8dd] text-[#47624d]',
    dias: [1, 2, 3, 4, 5],
    descricaoDias: 'Segunda a sexta',
    inicio: '09:00',
    fim: '13:00',
  },
  {
    id: 'miguel',
    nome: 'Dr. Miguel Santos',
    especialidade: 'Dermatologia',
    iniciais: 'MS',
    cor: 'bg-[#f1e2d7] text-[#90684f]',
    dias: [1, 2, 4, 5],
    descricaoDias: 'Segunda, terça, quinta e sexta',
    inicio: '10:00',
    fim: '17:00',
  },
  {
    id: 'sofia',
    nome: 'Dra. Sofia Matos',
    especialidade: 'Pediatria',
    iniciais: 'SM',
    cor: 'bg-[#deeeea] text-[#557b70]',
    dias: [1, 3, 5, 6],
    descricaoDias: 'Segunda, quarta, sexta e sábado',
    inicio: '09:00',
    fim: '15:00',
  },
  {
    id: 'joao',
    nome: 'Dr. João Ribeiro',
    especialidade: 'Medicina geral',
    iniciais: 'JR',
    cor: 'bg-[#e2e7f0] text-[#566580]',
    dias: [1, 2, 3, 4, 5],
    descricaoDias: 'Segunda a sexta',
    inicio: '08:00',
    fim: '16:00',
  },
]

export const horarios = Array.from({ length: 9 }, (_, index) => {
  const hour = index + 9
  return `${String(hour).padStart(2, '0')}:00`
})
