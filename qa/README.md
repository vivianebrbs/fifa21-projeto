# Testes Backend e Frontend - SOFIFA's DB Visualizer

## 1. Visão Geral
Este documento descreve como foram desenvolvidos e executados os testes **backend** e **frontend** do projeto **SOFIFA's DB Visualizer**, incluindo tecnologias utilizadas, estrutura e instruções para execução local.  
Também contém um guia para **apresentar o projeto** de forma organizada.

---

## 2. Testes de Backend

### Tecnologias Utilizadas
- **Playwright** (modo API Testing) para testes black-box de endpoints REST.
- **Node.js** para execução dos scripts.
- **Jest-like API** (expect) para asserções.

### Como Funcionam
Os testes validam todos os requisitos do desafio, incluindo:
1. Listar todos os jogadores (com paginação).
2. Listar jogadores por nome.
3. Listar jogadores por time.
4. Listar jogadores por liga.
5. Listar jogadores por nacionalidade.
6. Listar jogadores por posição.
7. Listar detalhes de um jogador por ID (incluindo imagem).
8. Listar Top-K jogadores (geral).
9. Listar Top-K jogadores por posição.
10. Listar Top-K jogadores por nacionalidade.
11. Listar Top-K jogadores por liga.
12. Listar o melhor time (global).
13. Listar o melhor time por liga.
14. Listar o melhor time por nacionalidade.

**Fluxo dos testes backend**:
- Requisição HTTP (`GET`) para o endpoint alvo.
- Validação de **status code** (200 ou erro esperado).
- Checagem do tipo de resposta (JSON ou imagem).
- Validação de estrutura de dados e regras (ex.: `>= 11` jogadores no melhor time).

---

## 3. Testes de Frontend

### Tecnologias Utilizadas
- **Playwright** (modo browser) para testes E2E (End-to-End).
- **Chromium** como navegador principal (pode ser configurado para Firefox/WebKit).
- **Selectors CSS** para encontrar elementos na página.

### Como Funcionam
Os testes frontend simulam a navegação do usuário:
1. Abre `http://localhost:3001/` e interage com a tela inicial.
2. Navega até `/list` e verifica se os elementos do menu estão corretos.
3. Confere se a lista de jogadores é exibida (nomes famosos como Messi, Neymar, Cristiano).
4. Futuramente, poderá incluir testes para busca, top players e top team.

---

## 4. Como Rodar o Projeto

### Pré-requisitos
- **Node.js** (>= 18)
- **Python** (>= 3.8)
- **npm** instalado globalmente
- CSV de dados disponível no backend

### Rodando Manualmente

```bash
# Backend - converter CSV em SQLite
cd ./backend/csv2db
python main.py

# Backend - iniciar API
cd ../
npm install
npm start

# Frontend - iniciar site (em outro terminal)
cd ./frontend
npm install
npm start
```

Após isso:
- **API Backend**: http://localhost:3000  
- **Frontend**: http://localhost:3001  

---

## 5. Como Rodar os Testes

### Testes de Backend
```bash
# Na raiz do projeto
npm run test:backend
```
Isso executa apenas os testes de API.

### Testes de Frontend
```bash
npm run test:frontend:headed
```
Isso abre o browser controlado pelo Playwright e executa os testes E2E.

---

## 6. Guia para Apresentar o Projeto

Quando for apresentar o projeto, siga esta ordem:

1. **Introdução**  
   - Explique que o projeto é um visualizador de dados do SOFIFA com backend em **Express/SQLite** e frontend em **React**.
   - Mencione que os dados vêm de um CSV processado via **Python**.

2. **Demonstração Backend**  
   - Mostre a API rodando (`npm start` no backend).
   - Faça requisições pelo navegador ou Postman (`/api/players`, `/api/top`, etc.).
   - Mostre como cada endpoint cumpre os requisitos do desafio.

3. **Demonstração Frontend**  
   - Abra o site em `http://localhost:3001/`.
   - Mostre a navegação (Player List, Search, Top Players, Top Team).
   - Explique que os dados exibidos vêm da API testada no backend.

4. **Demonstração dos Testes**  
   - Rode `npm run teste-backend` e mostre todos passando.
   - Rode `npm run teste-frontend` e mostre o browser automatizado.
   - Explique que os testes garantem tanto a integridade da API quanto o funcionamento da UI.

5. **Encerramento**  
   - Destaque que o projeto tem cobertura de **backend** (API) e **frontend** (UI).
   - Mencione a escalabilidade: fácil adicionar novos testes e endpoints.
   - Se possível, mostrar relatório HTML gerado pelo Playwright.

---
