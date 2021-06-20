import { makeStyles } from '@material-ui/core/styles';

import Background from '../../images/body.jpg';


export const useStyles = makeStyles((theme) => ({
    root: {
      backgroundImage: `url(${Background})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '12rem',
      margin:0,     
      padding:'3rem',
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      [theme.breakpoints.down('xs')]: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        height: '9rem',
      },

    },

    papers: {
      backgroundColor:'black', 
      display:'flex',
      padding:'2rem',
      marginTop:'2rem', 
      flexDirection:'row', 
      justifyContent:'space-between', 
      alignItems:'center',
      [theme.breakpoints.down('xs')]: {
          padding:'0.3rem', 
      },

  },

    titles: {
      padding:'1rem',
      fontWeight:'bold',
      color: '#546e7a',
      fontSize:'1.8rem',
      fontFamily:'arvo',
      [theme.breakpoints.down('xs')]: {
        fontSize:'1.1rem',
      },
      
    }

    
  }));