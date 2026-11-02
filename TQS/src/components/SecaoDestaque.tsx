import { Link } from 'react-router-dom'
import { medicos } from '../data/medicos'

export function SecaoDestaque() {
  return (
    <section className="relative grid min-h-[690px] grid-cols-1 items-start overflow-hidden border-b border-[#e9e8e2] py-12 sm:min-h-[540px] sm:grid-cols-2 sm:items-center sm:py-0">
      <div className="relative z-10 pb-8 sm:pl-[5%]">
        <span className="inline-flex items-center gap-2 text-[9px] font-bold tracking-[0.17em] text-[#8c947e]">
          <span className="size-2 rounded-full bg-[#9eaa7b]" /> CUIDAMOS DE SI, SEMPRE
        </span>
        <h1 className="my-5 font-serif text-[clamp(3.5rem,7vw,5rem)] font-normal leading-[1.02] tracking-[-0.045em] text-[#29483b]">
          A sua saúde<br />em boas mãos<span className="text-[#9eaa7b]">.</span>
        </h1>
        <p className="max-w-[390px] text-[13px] leading-7 text-[#777d73]">
          Cuidados de saúde próximos e personalizados, com uma equipa que está aqui para si.
        </p>
        <Link className="mt-6 inline-flex min-h-12 items-center gap-7 rounded-sm bg-[#315545] px-5 text-xs font-semibold text-white no-underline transition hover:bg-[#244537]" to="/#marcar">
          Marcar consulta <span className="text-base">↗</span>
        </Link>
        <div className="mt-8 flex items-center gap-3">
          <div className="flex -space-x-1">
            {medicos.slice(0, 3).map((medico) => (
              <span className={`grid size-8 place-items-center rounded-full border-2 border-[#fbfaf6] text-[8px] font-bold ${medico.cor}`} key={medico.id}>
                {medico.iniciais}
              </span>
            ))}
          </div>
          <p className="text-[9px] leading-4 text-[#858a80]">
            <strong className="text-[10px] text-[#44594c]">Uma equipa que cuida.</strong><br />
            Ao seu lado em cada etapa.
          </p>
        </div>
      </div>
      <div className="absolute inset-x-[4%] bottom-10 top-[365px] overflow-hidden rounded-t-[48%] bg-[#e6eee4] sm:inset-y-8 sm:left-auto sm:right-0 sm:w-[52%]">
        <div className="absolute left-[15%] top-[8%] size-32 rounded-full bg-[#f1e8cf]" />
        <div className="absolute right-[8%] top-[12%] grid h-[42%] w-[39%] grid-cols-2 grid-rows-2 gap-1.5 border-[8px] border-[#f7f4e9] bg-[#f7f4e9] shadow-xl">
          <span className="bg-[#d4e1d6]" /><span className="bg-[#dbe8df]" /><span className="bg-[#dbe8df]" /><span className="bg-[#d4e1d6]" />
        </div>
        <div className="absolute bottom-0 right-[27%] flex h-[78%] w-[42%] justify-center">
          <div className="absolute left-[26%] top-[1%] h-[33%] w-[53%] rounded-[48%_48%_37%_37%] bg-[#493d37]" />
          <div className="absolute left-[32%] top-[7%] z-10 h-[25%] w-[40%] rounded-[42%_42%_48%_48%] bg-[#dcae8e]">
            <i className="absolute left-[26%] top-1/2 size-[3px] rounded-full bg-[#493d37]" />
            <i className="absolute left-[68%] top-1/2 size-[3px] rounded-full bg-[#493d37]" />
          </div>
          <div className="absolute bottom-[-8%] h-[68%] w-[91%] rounded-t-[48%] bg-[#fbfaf5]">
            <span className="absolute left-[41%] top-0 h-[46%] w-[20%] bg-[#799784] [clip-path:polygon(50%_0,100%_20%,50%_100%,0_20%)]" />
            <span className="absolute right-[22%] top-[44%] grid size-[22px] place-items-center rounded-full bg-[#d9e8dc] text-[#63816a]">+</span>
          </div>
        </div>
        <div className="absolute bottom-[16%] right-[4%] flex items-center gap-2.5 rounded-sm bg-[#fffdfa] p-3 shadow-xl">
          <span className="grid size-8 place-items-center rounded-full bg-[#e4eee2] text-sm text-[#54755b]">✓</span>
          <span className="text-[9px] leading-4 text-[#92978b]"><b className="block text-[#405b49]">Estamos aqui</b>para cuidar de si</span>
        </div>
        <span className="absolute bottom-0 left-[8%] text-5xl text-[#77927d]">♣</span>
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-between text-[8px] tracking-[0.14em] text-[#9a9d92]">
        <span>01 — 04</span><span>CLÍNICA MÉDICA · LISBOA</span>
      </div>
    </section>
  )
}
