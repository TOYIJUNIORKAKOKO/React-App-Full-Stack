import React, {useEffect} from 'react'
import {Link, Grid, Paper, Typography, CircularProgress, LinearProgress} from '@material-ui/core';


import {useStyles} from './styles';
import {useQuery} from '@apollo/client';
import {getPersonByName} from '../../../GraphQL/query';
import {IpersonSearch, IonePersonData, IonePersonNameVars} from '../../../interfaces/people_interface';


const GetUsers:React.FC<IpersonSearch> = ({name, person, setPerson}) => {
    const styles = useStyles();


    // Query data from Graphql to get a person by search
    const {loading, data} = useQuery<IonePersonData, IonePersonNameVars>(getPersonByName, {variables: {name: name}} )

    useEffect(() => {
        if (loading)  {
            <h3>Loading...</h3>
        };
        setPerson(data?.getPerson[0]);
    }, [data, person, loading, setPerson])


    if(!person) return (
        <>
            <CircularProgress color="secondary" />
            <LinearProgress color="secondary" />
        </>
    )

        

    return (
        <>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
        {person === undefined || person === null || person.name === '' ? 
            <Typography className={styles.notFound}>.............................</Typography>:
            <Link  underline='none' href={`details/${person.name}`}>
                <Paper elevation={24} className={styles.papers}>
                    <div className={styles.castContainer} >
                        <Typography className={styles.casts_name} >{person.name}</Typography>
                    </div>
                </Paper>
            </Link>
            }
        </Grid>
        </>
    )
}

export default GetUsers
