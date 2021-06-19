import React from 'react'
import {useSelector} from 'react-redux';
import { useParams, useHistory } from 'react-router-dom'
import {useStyles} from './styles';
import { Link, Paper, Typography, Grid, Avatar, CircularProgress, LinearProgress } from '@material-ui/core';
import {Helmet} from 'react-helmet';
import GOBACK from '@material-ui/icons/KeyboardBackspace';


import {RootSore} from '../../store/store';

const DetailsPage = () => {
    const styles = useStyles();

    const history = useHistory();
    const pages = useSelector((state: RootSore) => state.page)  

    const {page} = useParams<{page?: string}>()
    const persons =  pages.people?.find((p) => p.name === page) || pages.person

    if(!persons) return (
        <>
            <CircularProgress color="secondary" />
            <LinearProgress color="secondary" />
        </>
    )


    return (
        <>
        <Helmet>
            <title>Details Page</title>
        </Helmet>

        
        {persons && 
        <div className={styles.root}>
            <Paper elevation={24} className={styles.divider}></Paper>
            

            <Link underline='none' onClick={() => history.goBack()}>
                <Paper className={styles.goBack} elevation={24}>
                    <Typography className={styles.typo}><GOBACK className={styles.backIcon}/></Typography>
                </Paper >
            </Link>


            <Paper elevation={24} className={styles.profile}>
                <Typography className={styles.profileTypo}>Cast |=| Profile</Typography>
            </Paper>


            <Grid container className={styles.details} spacing={2}>
                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                    <Paper elevation={24} className={styles.profile_picture}>
                        <Avatar className={styles.avatar}>{persons?.name.charAt(0).toUpperCase()}</Avatar>
                    </Paper>
                </Grid>


                <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                     <Typography className={styles.names} >{persons?.name}</Typography>

                    <Typography className={styles.other_details} >Height:  
                        <Link className={styles.height_gender} underline='none'> {persons?.height} cm</Link>
                    </Typography>

                    <Typography className={styles.other_details} >Mass:  
                        <Link className={styles.height_gender} underline='none'> {persons?.mass} kg</Link>
                    </Typography>

                    <Typography  className={styles.other_details} >Gender:  
                        <Link className={styles.height_gender} underline='none'> {persons?.gender}</Link>
                    </Typography>

                    <Typography className={styles.other_details} >H.W:  
                        <Link className={styles.H_W_link} href={`${persons?.homeworld}`} underline='none'> {persons?.homeworld}</Link>
                    </Typography>
                </Grid>

            </Grid>

        </div>
        }
    </>
        
    )
}

export default DetailsPage
