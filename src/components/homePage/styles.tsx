import { makeStyles } from '@material-ui/core/styles';

import Background from '../../images/header.jpg';

export const useStyles = makeStyles((theme) => ({
    root: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin:0,
    paddingBottom:'6rem',
    minHeight:'100vh', 

    },


    form: {
      background: "linear-gradient(to bottom, black, black, #9198e5)",        
      display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding: '0.5rem',
        borderBottomLeftRadius:'4rem',
        borderBottomRightRadius:'4rem',
        marginBottom:'4rem'
        
      },

      inputs: {
        borderRadius:'0.9rem',
        padding:'0.5rem',
        fontSize:'1.2rem',
        fontWeight:'bold',
        fontFamily:'arvo',
        marginLeft: '0.4rem',
        marginRight: '0.4rem',
        color:'black',
        background: "linear-gradient(to right, #18ffff, #18ffff, black)",        
        textTransform: 'uppercase',
        [theme.breakpoints.down('xs')]: {
          marginLeft: '0.1rem',
          marginRight: '0.1rem',
          padding:'0.2rem',
          fontSize:'0.8rem',

        },
    },

    validationText: {
      color:'red',
        [theme.breakpoints.down('sm')]: {
          fontSize:'0.2rem',
    
      },
    },

    buttons: {
        fontWeight:'bold',
        fontFamily:'arvo',
        color:'black',
        background: "linear-gradient(to top, #263238, #9198e5)",        
        borderRadius:'0.5rem',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: "#424242",
        },
        '&:active': {
          backgroundColor: "#18ffff",
        },
    },




    
  }));