import dotEnv from 'dotenv';
import Server from './models/server';

//configurar dotenv
dotEnv.config();

const server = new Server();

server.listen();