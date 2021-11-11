import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appointmentBanner = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58,74, .9)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
};
const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-120px' }}
                        src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#008CC4' }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: '#fff' }}>
                            Make An Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: 'white', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum enim est neque blanditiis id?
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: "#5DE6EE" }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;