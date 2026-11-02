import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { Cabecalho } from './components/Cabecalho'
import { Rodape } from './components/Rodape'
import { PaginaAutenticacao } from './pages/PaginaAutenticacao'
import { PaginaConsultas } from './pages/PaginaConsultas'
import { PaginaDoutor } from './pages/PaginaDoutor'
import { PaginaInicial } from './pages/PaginaInicial'
import { PaginaPerfil } from './pages/PaginaPerfil'
import type { Conta, DadosRegisto } from './types/conta'
import type { Consulta, PedidoConsulta } from './types/consulta'

const contaDemonstracao: Conta = {
  id: 'conta-demonstracao',
  nome: 'conta-demo',
  palavraPasse: 'SenhaDemo123!',
  perfil: 'cliente',
  especialidade: '',
}

function Aplicacao() {
  const [consultas, setConsultas] = useState<Consulta[]>([])
  const [contas, setContas] = useState<Conta[]>(() => import.meta.env.DEV ? [contaDemonstracao] : [])
  const [contaAtual, setContaAtual] = useState<Conta | null>(null)
  const localizacao = useLocation()

  useEffect(() => {
    if (localizacao.hash) {
      document.getElementById(localizacao.hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [localizacao.hash, localizacao.pathname])

  function submeterConsulta(pedido: PedidoConsulta) {
    setConsultas((atuais) => [...atuais, { ...pedido, id: Date.now() }])
  }

  function cancelarConsulta(consultaId: number) {
    const consulta = consultas.find((item) => item.id === consultaId)
    if (!consulta) return
    setConsultas((atuais) => atuais.filter((item) => item.medicoId !== consulta.medicoId))
  }

  function registarConta(dados: DadosRegisto) {
    if (contas.some((conta) => conta.nome.toLowerCase() === dados.nome.toLowerCase())) {
      return null
    }

    const conta = { ...dados, id: crypto.randomUUID() }
    setContas((atuais) => [...atuais, conta])
    return conta
  }

  function entrar(nome: string, palavraPasse: string) {
    return contas.find(
      (conta) => conta.nome.toLowerCase() === nome.toLowerCase() && conta.palavraPasse === palavraPasse,
    ) ?? null
  }

  return (
    <div className="mx-auto min-h-screen w-[min(100%-2rem,1280px)] text-[#4b554b] sm:w-[min(100%-3rem,1280px)]">
      <Cabecalho conta={contaAtual} aoTerminarSessao={() => setContaAtual(null)} />
      <main>
        <Routes>
          <Route
            path="/"
            element={<PaginaInicial aoSubmeterConsulta={submeterConsulta} />}
          />
          <Route
            path="/consultas"
            element={<PaginaConsultas aoCancelar={cancelarConsulta} consultas={consultas} />}
          />
          <Route
            path="/login"
            element={
              <PaginaAutenticacao
                aoAutenticar={setContaAtual}
                aoEntrar={entrar}
                aoRegistar={registarConta}
                modo="login"
              />
            }
          />
          <Route
            path="/registo"
            element={
              <PaginaAutenticacao
                aoAutenticar={setContaAtual}
                aoEntrar={entrar}
                aoRegistar={registarConta}
                modo="registo"
              />
            }
          />
          <Route path="/perfil" element={contaAtual ? <PaginaPerfil conta={contaAtual} /> : <Navigate replace to="/login" />} />
          <Route path="/doutor/:id" element={<PaginaDoutor contas={contas} />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
      <Rodape />
    </div>
  )
}

export default Aplicacao
