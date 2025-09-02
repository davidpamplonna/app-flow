import  * as http from 'http';
import {geListEpisodes} from './controllers/podcasts-controllers'

const server = http.createServer(async (req: http.IncomingMessage, res: http.ServerResponse) => {

    if (req.method === "GET") {
        await geListEpisodes(req, res);
    }

});


const port = process.env.PORT

server.listen(process.env.PORT, () => {
    console.log(`Servidor iniciando na porta ${port}`);
})