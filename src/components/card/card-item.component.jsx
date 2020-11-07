import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';

export default function CardComponent({ title, subtitle, value, lastUpdate }) {

    return (
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6} >
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {title}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        <CountUp start={0} end={value} duration={2.75} separator="," />
                    </Typography>
                    <Typography color="textSecondary">
                        {new Date(lastUpdate).toDateString()}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {subtitle}
                    </Typography>
                </CardContent></Card>
        </Grid >
    );
};