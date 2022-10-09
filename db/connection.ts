import { Sequelize } from "sequelize";

class Database{
    private static intance: Sequelize;
    private static _database: string;
    private static _user: string;
    private static _password: string;
    private static _host: string;

    private constructor(){    }

    private static initialize(): void{
        this._database = 'prueba';
        this._user = 'dag';
        this._password = '123';
        this._host = 'localhost';
    }

    public static getInstance(): Sequelize{
        if(!this.intance){
            this.initialize();
            this.intance = new Sequelize(this._database,this._user,this._password,{
                host:this._host,
                dialect:'mysql'
                //logging:'false'
            });
        }       

        return this.intance;
    }

}

export default Database;



