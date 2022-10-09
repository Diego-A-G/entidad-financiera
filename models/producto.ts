import { DataTypes } from 'sequelize';
import Database from '../db/connection';

const Producto = Database.getInstance().define('Producto',{

    nombre:{
        type:DataTypes.STRING
    },
    descripcion:{
        type:DataTypes.TEXT
    },
    categoria:{
        type:DataTypes.INTEGER
    },
    estado:{
        type:DataTypes.BOOLEAN
    }


});

export default Producto;