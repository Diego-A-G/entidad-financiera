import { Request, Response } from 'express';
import Producto from '../models/producto';

export const getProductos = async( req: Request, res: Response ) => {

    const productos = await Producto.findAll();

    res.json({productos});

}

export const getProducto = async( req:Request, res:Response ) => {

    const { id } = req.params;

    const producto = await Producto.findByPk(id);

    if (producto) {
        res.json({producto});
    } else {
        res.status(404).json({
            msg:`No existe un producto con el id ${id}`
        });
    }   

}

export const postProducto = async( req:Request, res:Response ) => {

    const { body } = req;

    try{
        //pendientes validaciones segun caso de uso
        //revisar envio de body
        const producto = new Producto ();
        await producto.save();
        res.json(producto);

    }catch(error){
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}

export const putProducto = async( req:Request, res:Response ) => {

    const { id} = req.params; 
    const { body } = req;

    try{
        const producto = await Producto.findByPk(id);
        if(!producto){
            return res.status(404).json({
                msg: 'No existe un producto con el id ' + id 
            });
        }
        await producto.update(body);
        res.json(producto);

    }catch(error){
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }

}

export const deleteProducto = async( req:Request, res:Response ) => {

    const { id} = req.params; 

    const producto = await Producto.findByPk(id);
    if(!producto){
        return res.status(404).json({
            msg: 'No existe un producto con el id ' + id 
        });
    }
    await producto.destroy();
    //await producto.update({estado: false});
    res.json(producto);

}