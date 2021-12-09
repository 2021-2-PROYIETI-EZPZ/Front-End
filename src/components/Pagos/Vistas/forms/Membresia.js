import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";

const Membresia = () => {

    return <>
        <Grid item xs={12}>
            <Typography variant="h6">Informacion de Producto</Typography>
        </Grid>
        
        <Grid item xs={12}>
            <TextField
                label="Membresia Bronce"
                name="membresia"
                variant="outlined"
                fullWidth
            />
        </Grid>
        <Grid item xs={12}>
            <Typography variant="h6">Valor del Servicio</Typography>
        </Grid>
        <Grid item xs={12}>
            <TextField
                label="Valor"
                name="valor"
                variant="outlined"
                fullWidth
            />
        </Grid>
    </>
}

export default Membresia;
