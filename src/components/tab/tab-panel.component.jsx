import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CardList from '../card/card-list.component';
import SplineChart from '../chart/spline-chart.component';
import GridChart from '../chart/grid-chart.component';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        height: '100vh',
        width: '100%',
    },
    container: {
        marginLeft: '1rem',
        marginRight: '0.5rem'
    }
}));

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default function TabPanel({ value, index, country }) {

    const classes = useStyles();

    /*
        COUNTRY:

        id
        name
        lastUpdated
        lastDailyCases
        cumulativeCases
        dailyData
        days
    */

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            className={classes.root}
        >
            {value === index && (
                <div className={classes.container} >
                    <CardList
                        lastDailyCases={country.lastDailyCases}
                        cumulativeCases={country.cumulativeCases}
                        lastUpdated={country.lastUpdated}
                    />

                    <SplineChart country={country} />
                    <GridChart country={country} />
                </div>
            )}
        </div>
    );
}