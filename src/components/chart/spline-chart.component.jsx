import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    LineSeries,
    Title,
    Legend,
    Tooltip,

} from '@devexpress/dx-react-chart-material-ui';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Animation, EventTracker } from '@devexpress/dx-react-chart';
import {
    curveCatmullRom,
    line,
} from 'd3-shape';

const Line = props => (
    <LineSeries.Path
        {...props}
        path={line()
            .x(({ arg }) => arg)
            .y(({ val }) => val)
            .curve(curveCatmullRom)}
    />
);

const titleStyles = {
    title: {
        textAlign: 'center',
        width: '100%',
        marginBottom: '10px',
    },
};

const Text = withStyles(titleStyles)((props) => {
    const { text, classes } = props;
    const [mainText, subText] = text.split('\\n');
    return (
        <div className={classes.title}>
            <Typography component="h3" variant="h5">
                {mainText}
            </Typography>
            <Typography variant="subtitle1">{subText}</Typography>
        </div>
    );
});

const legendStyles = () => ({
    root: {
        display: 'flex',
        margin: 'auto',
        flexDirection: 'row',
    },
});
const legendLabelStyles = theme => ({
    label: {
        marginBottom: theme.spacing(1),
        whiteSpace: 'nowrap',
    },
});
const legendItemStyles = () => ({
    item: {
        flexDirection: 'column-reverse',
    },
});

const legendRootBase = ({ classes, ...restProps }) => (
    <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
    <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
    <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);


const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '2rem'
    },

}));

export default function SplineChart({ country }) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper>
                <Chart
                    data={country.chartData}
                >
                    <ArgumentAxis showLabels={false} showTicks={false} />
                    <ValueAxis />

                    <LineSeries
                        name={country.name}
                        valueField="newCasesByPublishDate"
                        argumentField="date"
                        seriesComponent={Line}
                    />

                    <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
                    <Title
                        text="Daily Covid Cases"
                        textComponent={Text}
                    />
                    <EventTracker />
                    <Tooltip />
                    <Animation />
                </Chart>

            </Paper>
        </div>
    );
}