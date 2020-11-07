import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './tab-panel.component';

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: '100vh',
        width: '100%',
    },
    tabs: {
        minWidth: '50px',
        borderRight: `1px solid ${theme.palette.divider}`,

    },
    tab: {
        marginRight: '1rem',
    },
    panels: {
        width: '100%',
    }
}));

export default function VerticalTabs({ data }) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                {data && data.map(country => (
                    <Tab key={country.id}
                        index={country.id}
                        label={country.name}
                        className={classes.tab}
                        {...a11yProps(country.id)} />
                ))}

            </Tabs>

            <div className={classes.panels} >
                {data && data.map(country => (
                    <TabPanel key={country.id} value={value} index={country.id} country={country} />))}
            </div>
        </div>
    );
}