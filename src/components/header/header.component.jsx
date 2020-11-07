import React from 'react';
import Logo from '../../assets/logo.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    div: {
        width: '100%'
    },
    title: {
        textAlign: 'center',
        fontSize: '36px'
    },
    img: {
        height: '27px'
    }

}));

export default function Header() {

    const classes = useStyles();
    return (
        <div className={classes.div}>
            <h1 className={classes.title}>C
                <img className={classes.img} alt='logo' src={Logo} />
                VID-19 UK
            </h1>
        </div>);
}
