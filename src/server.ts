import  * as http from 'http';
import {geListEpisodes, getFilerEpisodes} from './controllers/podcasts-controllers'

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {

    //queryString
    const [baseUrl, queryString] = req.url?.split("?") ?? ["", ""];


    // listar podcasts
    if (req.method === "GET" && baseUrl === "/api/list") {
        await geListEpisodes(req, res);
    }

    if(req.method === "GET" && baseUrl === "/api/episode"){
        await getFilerEpisodes(req, res);
    }
});


const port = process.env.PORT

server.listen(process.env.PORT, () => {
    console.log(`Servidor iniciando na porta ${port}`);
})