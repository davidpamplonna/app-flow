# App Podcast Menager

### Descrição
Um app ao estilo netflix, aonde possa centralizar diferentes episódio de podcasts separados por categoria

### Domínio 
Podcasts feitos em vídeo

### Features
- Listar os episódios de podcasts em sessões de categorias
    - [saúde, bodybuilder, mentalidade, humor]
- Filtrar epsódios por nome de podcast

## Como

### Feature:
Listar os episódios podcasts em sessões de categorias

### Como  vou implementar:
Vou retornar em uma api rest (json) o nome podcast, nome do episódio, imagem de capa, link

 ```js

{
    podcastName: "flow",
    episode: "CBUM - Flow #319,
    videoId: "pQSuQmUfS30"
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30&ab_channel=FlowPodcast"
    category: ["saúde", "bodybuilder"]
},

{
    podcastName: "flow",
    episode: "RUBENS BARRICHELLO - Flow #339,
     videoId: "4KDGTdiOV4I"
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg",
    link: "https://www.youtube.com/watch?v=yZdeH_P5Geo&ab_channel=FlowPodcast"
    category: ["esporte", "corrida"]
},

 ```