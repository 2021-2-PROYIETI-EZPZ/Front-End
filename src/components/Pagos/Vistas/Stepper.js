import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Stepper,
    Step,
    Box,
    Grid,
} from '@material-ui/core';

const style = makeStyles(theme => ({
    mainBox: {
        position: "relative",
        marginTop: "-8px",
        padding: "10px 20px",
        borderBottomRightRadius: "4px",
        borderBottomLeftRadius: "4px",
        background: theme.palette.background.default
    },
    stepper: {
        height: "calc(10vh - 40px)",
        minHeight: "55px"
    },
}));

const Steppers = () => {
    const classes = style();

    return <>
        <Stepper alternativeLabel className={classes.stepper}>
            {/* Change the number of loops here based on StepContent */}
            {[1, 2, 3].map(e => (
                <Step key={e}>

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
            </Grid>
        </Box>
    </>
}

export default Steppers;