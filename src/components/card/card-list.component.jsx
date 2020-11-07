import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardComponent from './card-item.component';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '20%',
        marginBottom: '0.5rem'
    }
}));

export default function CardList({ lastDailyCases, cumulativeCases, lastUpdated }) {

    const classes = useStyles();
    return (
        <div >
            <Grid container className={classes.root} spacing={3} justify='center'>

                <CardComponent
                    title="Daily"
                    subtitle="Number of active cases"
                    value={lastDailyCases}
                    lastUpdate={lastUpdated}
                />
                <CardComponent
                    title="Cumulative"
                    subtitle="Number of cumulative cases"
                    value={cumulativeCases}
                    lastUpdate={lastUpdated}
                /></Grid>
        </div>
    );
};