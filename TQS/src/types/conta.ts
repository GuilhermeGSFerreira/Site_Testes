export type PerfilConta = 'cliente' | 'medico'

export type Conta = {
  id: string
  nome: string
  palavraPasse: string
  perfil: PerfilConta
  especialidade: string
}

export type DadosRegisto = Omit<Conta, 'id'>
