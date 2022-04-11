import React, { useState } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import GitHubIcon from '@material-ui/icons/GitHub';
import './Footer.css'
import { useDispatch, useSelector } from "react-redux";
import { UserState } from "../../../store/tokens/UserReducer";
import { addToken } from "../../../store/tokens/actions";

function Footer() {
    const token = useSelector<UserState, UserState['tokens']>(
        (state) => state.tokens
    )

    const dispatch = useDispatch()

    dispatch(addToken(token))

    var footerComponent;
    if (token != "") {
        footerComponent=
        <Grid container direction="row" justifyContent="center" alignItems="center" className='footer-container'>
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom className='text'>Nos siga nas redes sociais! </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="https://github.com/ColaboraTechPI" target="_blank">
                            <GitHubIcon className='redes' />
                        </a>
                    </Box>
                </Box>
                <Box className='box2'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='text' >Copyright © 2022 by Colaboratech</Typography>
                    </Box>
                    <Box>
                        <Typography variant="subtitle2" gutterBottom className='text' align="center">All Rights reserved</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    }
    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer;