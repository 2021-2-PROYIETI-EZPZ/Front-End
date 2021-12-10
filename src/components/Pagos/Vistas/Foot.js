import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link
} from "@material-ui/core";
import {
    Security,
    Info
} from "@material-ui/icons";

const Footer = () => <>
    <Grid container justify="center" style={{ minHeight: "20px" }}>
        <Grid container item sm={55} xs={11} justify="space-between">
            <Grid item sm={5} xs={12}>
                <Security color="action" />
                <Typography paragraph>
                    
                </Typography>
            </Grid>
            <Grid item sm={5} xs={11}>
                <Info color="action" />
                <Typography paragraph>
                    Esta Web App es plenamente intelectual. Fue realizada con <Link href="https://reactjs.org/" target="_blank">ReactJS</Link>, usando <Link href="https://material-ui.com" target="_blank">Material-UI</Link> 
                </Typography>
            </Grid>
        </Grid>
    </Grid>
    <AppBar position="static" elevation={0} component="footer" color="primary">
        <Toolbar style={{ justifyContent: "center" }}>
            <Typography variant="caption">EZBROWSER All rights deserved ©2021</Typography>
        </Toolbar>
    </AppBar>
</>

export default Footer;