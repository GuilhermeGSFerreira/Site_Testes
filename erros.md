1- Qualquer pessoa pode criar uma conta de médico, escolhendo esse perfil no registo, sem verificação ou aprovação. PaginaAutenticacao.tsx

2- A área de doutor não verifica quem está autenticado nem se tem permissão para aceder. É possível abrir diretamente /doutor/ines, por exemplo. App.tsx · PaginaDoutor.tsx

3- É possível marcar uma consulta sem iniciar sessão. SecaoMarcacao.tsx

4- As consultas não são associadas ao utente que as marcou. Assim, contas diferentes na mesma aplicação podem ver a mesma lista. App.tsx · SecaoConsultas.tsx

5- As palavras-passe são guardadas em texto simples, em vez de serem protegidas por um sistema de autenticação adequado. App.tsx

6- Contas, sessão e consultas desaparecem ao atualizar a página, porque ficam apenas em memória. App.tsx

7- É possível marcar várias consultas para o mesmo médico no mesmo dia e hora; não há validação de conflito. App.tsx · PaginaInicial.tsx

8- A lista de horários é igual para todos os médicos e inclui opções fora do horário de trabalho indicado no perfil. SecaoMarcacao.tsx · medicos.ts

9- A opção de cancelar uma consulta remove todas as consultas desse médico, em vez de cancelar apenas a escolhida. App.tsx · SecaoConsultas.tsx

10- O formulário permite escolher uma clínica, mas a seleção não é guardada nem aparece nos dados da consulta. SecaoMarcacao.tsx · types/consulta.ts

11- No f12, se tivermos a extensão do React, sonseguimos ver as passwords. nome, id.. de outra pessoa