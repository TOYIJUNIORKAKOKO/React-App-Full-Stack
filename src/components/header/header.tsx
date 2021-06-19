import React from 'react';
import {Paper} from '@material-ui/core';

import {useStyles} from './styles';

function Header() {
    const styles = useStyles();
    return (

        <div className={styles.root} >
            <Paper elevation={24} className={styles.papers}>
                <div className={styles.titles}>Star Wars Casts</div>
            </Paper>
        </div>
    )
}

export default Header
