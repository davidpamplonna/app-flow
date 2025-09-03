import  * as http from 'http';
import {geListEpisodes, getFilerEpisodes} from './controllers/podcasts-controllers'
import { Routes } from './routes/routes';
import { HttpMethod } from './utils/http-methods';


export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    //queryString
    const baseUrl = request.url?.split("?") [0];


    // listar podcasts
    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await geListEpisodes(request, response);
    }

    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODE){
        await getFilerEpisodes(request, response);
    }
}