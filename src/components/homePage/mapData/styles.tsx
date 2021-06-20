import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({

    
    papers: {
        background: "linear-gradient(to right, black, #18ffff)",        
        borderRadius:'2rem',
        display:'flex',
        padding: '0.5rem',
        margin:'1.8rem', 
        flexDirection:'row', 
        alignItems:'center',
        [theme.breakpoints.down('xs')]: {
            padding:'0.3rem', 
        },
        '&:hover': {
            background: "black",
         },
         '&:active': {
            background: "#18ffff",
         },

    },

    castContainer:{
        display:'flex',
        flexDirection:'row',
    },

    avatar:{
        backgroundColor:'#18ffff',
    },

    casts_avatars:{
        color:'black',
        fontWeight:'bold',
        fontFamily:'arvo',
    },

    casts_name:{
        color:'#546e7a',
        alignItems:'center',
        fontFamily:'arvo',
        fontWeight:'bold',
        paddingLeft:'0.5rem'
    }
    
  }));