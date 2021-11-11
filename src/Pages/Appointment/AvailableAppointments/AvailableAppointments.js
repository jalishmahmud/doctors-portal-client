import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodontics',
        time: '08:00 AM - 09:00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetics Dentisty',
        time: '09:00 AM - 10:00 AM',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Clining',
        time: '10:00 AM - 11:00 AM',
        space: 9
    },
    {
        id: 4,
        name: 'Cavity Potection',
        time: '08:00 AM - 09:00 AM',
        space: 5
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06:00 PM - 07:00 PM',
        space: 10
    },
    {
        id: 6,
        name: 'Oral Sergery',
        time: '07:00 PM - 08:00 PM',
        space: 10
    }
]

const AvailableAppointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', my: 4, fontWeight: 600 }}>Available appointment on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert sx={{ mb: 3 }} severity="success">Your have booked your appointment successfully!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking

                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppointments;