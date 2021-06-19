import React from 'react';
import {Paper} from '@material-ui/core';

import {useStyles} from './styles';

function Footer() {
    const styles = useStyles();
    return (

        <div className={styles.root} >
            <Paper elevation={24} className={styles.papers}>
                <div className={styles.titles}>@2021| SOVTECH |=| Inteview Assessment</div>
            </Paper>
        </div>
    )
}

export default Footer
