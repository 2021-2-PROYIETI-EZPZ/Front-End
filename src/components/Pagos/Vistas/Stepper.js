import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Stepper,
    Step,
    StepLabel,
    Box,
    Grid,
    Button
} from '@material-ui/core';
import StepIconos from './StepIconos';
import StepConector from './StepConnector';
import DatosContacto from './forms/DatosContacto';
import Membresia from './forms/Membresia';
import Pagos from './forms/Formapagos';

const style = makeStyles(theme => ({
    button: {marginRight: theme.spacing(1),},
    mainBox: {
        position: "relative",
        marginTop: "-8px",
        padding: "20px 20px",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px",
        background: theme.palette.background.default
    },
    stepper: {
        height: "calc(10vh - 40px)",
        minHeight: "100px"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "100%"
    }
}));

const Steppers = () => {
    const [ activeStep, setActiveStep ] = useState(0);
    const classes = style();
    const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
    const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
    const handleCancel = () => setActiveStep(window.location.replace("https://ezbrowser-frontend.herokuapp.com/search"));

    return <>
        <Stepper alternativeLabel className={classes.stepper} connector={<StepConector />} activeStep={ activeStep}>
            {/* Solo tendremos tres pasos para el pago, en caso de necesitar mas se añade  */}
            {[1, 2, 3].map(e => (
                <Step key={e}>
                    <StepLabel StepIconComponent={StepIconos}/>
                </Step>
            ))}
        </Stepper>
        <Box className={classes.mainBox}>
            <Grid
                container
                spacing={3}
                direction="column"
                justify="space-around"
                alignItems="center"
                style={{ height: "400px" }}
            >
                {/* Al llegar al ultimo paso, se activa un boton de enviar */}
            {activeStep === 3
                    ?

                <Button onClick={handleCancel} className={classes.button}>
                        Tu pago ha sido exitoso! Haz clic aqui para volver al menu principal
                </Button>
                :

                <form className={classes.form} onSubmit={e => { e.preventDefault(); handleNext() }}>
                        <Grid container spacing={3}>
                            <StepContent step={activeStep}/>
                            <Grid container item justify="flex-end">
                                <Button enable={activeStep == 0} className={classes.button} onClick={handleCancel}>
                                    Cancelar
                                </Button>

                            <Button disabled={activeStep === 0} className={classes.button} onClick={handleBack}>
                                Atras
                                </Button>

                            <Button variant="contained" color="primary" className={classes.button} onClick={handleNext}>
                            {activeStep === 2 ? 'Pagar' : 'Siguiente'}
                                </Button>
                                
                            </Grid>
                            
                    </Grid>
                </form>
            }
            </Grid>
        </Box>
    </>
}
//Se conecta el contenido del paso a paso
const StepContent = ({ step }) => {
    switch (step) {
        case 0:
            return <DatosContacto/>;
        case 1:
            return <Membresia/>;
        case 2:
            return <Pagos/>;
        default:
            return <></>;

    }

}

export default Steppers;