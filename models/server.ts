import express,{Application} from 'express';
import userRoutes from '../routes/usuario';
import productRoutes from '../routes/producto';
import cors from 'cors';
import Database from '../db/connection';

class Server{

    private app : Application;
    private port: string;
    private apiPaths = {
        usuarios : '/api/usuarios',
        productos : '/api/productos'
    }

    constructor(){
        this.app  = express();
        this.port = process.env.PORT||'8000';

        this.dbconnection(); 
        this.middlewares();
        this.routes();
    }

    async dbconnection(){

        try{

            await Database.getInstance().authenticate();
            console.log('database online')

        } catch(error){
            throw new Error(error as string);
        }
    }

    middlewares(){
        //CORS
        this.app.use( cors());

        //BODY
        this.app.use( express.json());

        //PUBLIC 
        this.app.use( express.static('public'));


    }

    routes(){
        this.app.use(this.apiPaths.usuarios, userRoutes)
        this.app.use(this.apiPaths.productos, productRoutes)
    }

    listen(){
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto: ' + this.port);
        })
    }
}

export default Server;