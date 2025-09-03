# App Podcast Manager

Um aplicativo estilo Netflix para centralizar diferentes episódios de podcasts em vídeo, separados por categoria.

## Descrição

Este projeto permite listar e filtrar episódios de podcasts, organizando-os em sessões de categorias como saúde, bodybuilder, mentalidade, humor, entre outros.

## Funcionalidades

- Listar episódios de podcasts por categoria
- Filtrar episódios pelo nome do podcast

## Como funciona

### Listar episódios

- **Endpoint:** `GET /api/list`
- **Resposta:** Lista todos os episódios disponíveis.

### Filtrar episódios por nome

- **Endpoint:** `GET /api/episode?p={nome_do_podcast}`
- **Resposta:** Lista episódios filtrados pelo nome do podcast informado.

### Exemplo de resposta

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30",
    "category": ["saúde", "bodybuilder"]
  },
  {
    "podcastName": "venus",
    "episode": "Xuxa - Venus #339",
    "videoId": "0000",
    "category": ["humor"]
  }
]
```
