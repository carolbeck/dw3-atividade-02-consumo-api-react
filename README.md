# Atividade DW3 - Consumo de API com React e Next.js

Atividade do 2º bimestre de Desenvolvimento Web III (Fatec Registro, curso DSM, Prof. Diego Max).

## Sobre o projeto

Aplicação front-end feita com React e Next.js que consome a [Rick and Morty API](https://rickandmortyapi.com/) e exibe os personagens em formato de catálogo.

## Páginas

- `/`: catálogo com cards dos personagens (imagem, nome e espécie). Cada card leva para a página de detalhes.
- `/personagem/[id]`: detalhes do personagem (status, espécie, gênero, origem, localização e quantidade de episódios), com link para voltar ao catálogo.

## Como rodar

```bash
npm install
npm run dev
```

Depois é só abrir http://localhost:3000 no navegador.

## Tecnologias

- React
- Next.js
- JavaScript
- CSS