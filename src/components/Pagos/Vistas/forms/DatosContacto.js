import React from 'react';
import {
    TextField,
    Grid,
    Typography
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete'

const DatosContacto = () => {

    return <>
        <Grid item xs={12}>
            <Typography variant="h6">Informacion de Contacto</Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Nombre"
                name="nombre"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Apellido"
                name="apellido"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Email"
                name="email"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                label="Direccion "
                name="address1"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <TextField
                label="Ciudad"
                name="ciudad"
                variant="outlined"
                required
                fullWidth
            />
        </Grid>
        <Grid item xs={12} sm={4}>
            <Autocomplete options={countries}
                getOptionLabel={option => option.name}
                renderInput={params => <TextField
                    label="Pais"
                    name="pais"
                    variant="outlined"
                    required
                    fullWidth
                    {...params}
                />
                }
            />
        </Grid>
    </>
}

export default DatosContacto;

const countries = [
    { name: 'Afghanistan', code: 'AF' },
    { name: 'Argentina', code: 'AR' },
    { name: 'Colombia', code: 'CO' },
    { name: 'Albania', code: 'AL' }];