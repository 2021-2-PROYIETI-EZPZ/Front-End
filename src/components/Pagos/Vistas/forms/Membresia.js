import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import { FormatAlignLeft } from '@material-ui/icons';

const Membresia = () => {

    return <>
        <Grid item xs={12}>
            <Typography variant="h6">Informacion de Producto</Typography>
        </Grid>
        <Grid item xs={6} sm={4}>
            <img src={`./tarjetas/membresiab.png`} width="150px" align="bottom" style={{ padding: "5 50px" }} />
        </Grid>
        
        <Grid itemxs={6} sm={7}>
            La membresia cuenta con los siguientes beneficios:
            <ol>
                <li>- Acceso a mas productos por un menor precio </li>
                <li>- Obten productos de paginas web exclusivas </li>
                <li>- Bono de descuento del 1% de tus compras anuales </li>
                <li>- Compra de forma segura  </li>
            </ol>
            
            {/* Este contenido es para traer la informacion del back*/}
            {/* <TextField
                label="Membresia Bronce"
                name="membresia"
                variant="outlined"
                fullWidth
            /> */}
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h6">Valor del Servicio</Typography>
        </Grid>
        <Grid item xs={12}>
            3 USD
            {/* Este texto identado es para conectar el valor desde el back*/}
            {/*<TextField
                label="Valor"
                name="valor"
                variant="outlined"
                fullWidth
            /> */}
        </Grid>
    </>
}

export default Membresia;
