# Visualizador do Banco de Dados SOFIFA

## O que é
Projeto para visualizar dados do FIFA 21, com **backend em Express/SQLite**, **frontend em React** e análise do CSV com **Python**.

## Como rodar rápido

### 1) CSV → Banco
cd backend/csv2db
python main.py


### 2) Backend
cd ../
npm install
npm start


### 3) Frontend (outro terminal)
cd frontend
npm install
npm start


Acesse: [http://localhost:3001](http://localhost:3001)

## Testes
- **Backend:** testes de API com Playwright  
- **Frontend:** testes de navegação, listagem, filtros e detalhes  

Rodar testes:
cd qa
npm install
npm run test
npx playwright show-report


## Estrutura
- `backend/` → API + CSV → SQLite  
- `frontend/` → React  
- `qa/` → testes automatizados  
- `players_21.csv` → CSV original  

## Autora
Viviane Barbosa  
[GitHub: vivianebrbs](https://github.com/vivianebrbs)

