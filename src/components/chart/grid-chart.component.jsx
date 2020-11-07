import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
    PagingState,
    IntegratedPaging,
} from '@devexpress/dx-react-grid';
import { Grid, Table, TableHeaderRow, PagingPanel } from '@devexpress/dx-react-grid-material-ui';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { DataTypeProvider } from '@devexpress/dx-react-grid';

const columns = [
    { name: 'date', title: 'Date' },
    { name: 'newCasesByPublishDate', title: 'Daily Cases' },
    { name: 'cumCasesByPublishDate', title: 'Cumulative Cases' },
];

const DateFormatter = ({ value }) => value.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3.$2.$1');

const DateTypeProvider = props => (
    <DataTypeProvider
        formatterComponent={DateFormatter}
        {...props}
    />
);

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '2rem'
    },
    title: {
        textAlign: 'center',
        width: '100%',
        padding: '1.5rem',
    }
}));

export default function GridChart({ country }) {

    const classes = useStyles();
    const [dateColumns] = useState(['date']);

    return (
        <Paper className={classes.root}>
            <Typography variant="h5" component="h2" className={classes.title}>
                {'Data'}
            </Typography>
            <Grid
                rows={country.gridData}
                columns={columns}
            >
                <PagingState
                    defaultCurrentPage={0}
                    pageSize={10}
                />
                <IntegratedPaging />
                <DateTypeProvider
                    for={dateColumns}
                />
                <Table />
                <TableHeaderRow />

                <PagingPanel />
            </Grid>
        </Paper>
    );
};