# VISUALIZADOR DO BANCO DE DADOS SOFIFA

## Introdução

Este projeto completo foi desenvolvido principalmente usando _Express_, _SQLite_ e _React_, enquanto a análise do CSV foi feita via _Python_. Mesmo que o README original especifique 3 etapas principais, este repositório está dividido em _duas_ pastas principais: **Frontend** (site) e **Backend** (API e analisador CSV).

## Requisitos

- **Node** e **Python**
- Ou **Docker**

## Como executar

Existem duas formas possíveis de executar: Configurando manualmente os comandos na sua própria máquina, ou usando Docker.

### Manualmente, no seu terminal de preferência

```
# Primeira etapa - Analisar o CSV
cd ./backend/csv2db
python main.py

# Segunda etapa - Ligar o servidor
cd ../
npm install
npm start

# Terceira etapa - Ligar o frontend (requer outra instância de terminal)
cd ./frontend
npm install
npm start

PRONTO! - Você pode acessar http://localhost:3001/ para ver o projeto
```
