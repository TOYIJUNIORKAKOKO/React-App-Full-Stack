import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
      background: "linear-gradient(to top, black, #283593)",        
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '8rem',
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center'
    },

    papers: {
      backgroundColor:'rgba(52, 52, 52, 0.8)', 
      height:'2rem',
      width:'70%',
      display:'flex',
      padding:'0.5rem', 
      flexDirection:'row', 
      justifyContent:'center', 
      alignItems:'center',
      [theme.breakpoints.down('xs')]: {
          padding:'0.3rem', 
      },


  },

    titles: {
      fontWeight:'bold',
      color: '#cfd8dc',
      fontSize:'1rem',
      [theme.breakpoints.down('xs')]: {
        fontSize:'0.6rem',
      },
      
    }
    
  }));