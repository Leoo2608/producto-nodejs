import { pool } from '../database'

export const readAllProds = async(req, res)=>{
    try {
        const response = await pool.query('select * from producto');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}
export const readProd = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from producto where idproducto = $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const delProd = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from producto where idproducto = $1', [id]);
        return res.status(200).json(
            `Producto ${ id } eliminado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const updateProd = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const{ nomprod, precio, stock} = req.body;
        await pool.query('update producto set nomprod = $1, precio = $2, stock = $3 where idproducto = $4', [nomprod, precio, stock, id]);
        return res.status(200).json(
            `Producto modificado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const createProd = async(req, res)=>{
    try {
        const{ nomprod, precio, stock} = req.body;
        await pool.query('insert into producto(nomprod, precio, stock) values($1, $2, $3)', [nomprod, precio, stock]);
        return res.status(200).json(
            `El Producto ${ nomprod } se ha agregado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

