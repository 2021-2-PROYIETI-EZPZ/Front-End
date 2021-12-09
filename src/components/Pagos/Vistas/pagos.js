import React from "react";
import { Container, Paper, Box, } from "@material-ui/core";
import { makeStyles, } from '@material-ui/core/styles';
import Stepper from './Stepper';

const useStyles = makeStyles(() => ({
    boxWrapper: {
        marginBottom: "20px",
        minHeight: "calc(26vh + 260px)"
    },
    container: {
        position: "relative",
        zIndex: "1100",
        marginTop: "55px",
        marginBottom: "55px",
    }
}));

const Pagos = () => {

    const classes = useStyles();

    return <Box component="Pagos" className={classes.boxWrapper}>
        <Container maxWidth="md" className={classes.container}>
            <Paper elevation={5}>
                <Stepper />
            </Paper>
        </Container>
    </Box>
}

export default Pagos;