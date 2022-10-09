import { DataTypes } from 'sequelize';
import Database from '../db/connection';

const Usuario = Database.getInstance().define('Usuario',{
    nombre:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.BOOLEAN
    }
});

export default Usuario;