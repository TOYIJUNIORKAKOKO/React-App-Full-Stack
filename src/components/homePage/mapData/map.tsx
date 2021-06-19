import React from 'react';
import {Link, Grid, Paper,Avatar, Typography, CircularProgress, LinearProgress } from '@material-ui/core';


import {useStyles} from './styles';
import {Ipeople} from '../../../interfaces/people_interface';




const Map:React.FC<Ipeople> = ({people}) => {
    const styles = useStyles();

    if(!people) return (
        <>
            <CircularProgress color="secondary" />
            <LinearProgress color="secondary" />
        </>
    )


    return (
        <>  
            {people && people.map((p) => (
                <Grid  item xl={6} lg={6} md={6} sm={6} xs={12} key={p.name}>
                <Link  underline='none' href={`details/${p.name}`}>
                    <Paper elevation={24} className={styles.papers}>
                        <div className={styles.castContainer} >
                            <Avatar className={styles.avatar}>
                                <Typography className={styles.casts_avatars} >{p.name.charAt(0).toUpperCase()}</Typography>
                            </Avatar>
                            <Typography className={styles.casts_name} >{p.name}</Typography>

                        </div>
                    </Paper>
                </Link>
                </Grid>
            ))}
        </>
    )
}

export default Map
