import  * as http from 'http';
import { app } from './app';


const server = http.createServer(app);


const port = process.env.PORT

server.listen(process.env.PORT, () => {
    console.log(`Servidor iniciando na porta ${port}`);
})