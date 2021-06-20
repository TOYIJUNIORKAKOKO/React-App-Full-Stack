import { makeStyles } from '@material-ui/core/styles';

import Background from '../../images/other.jpg';

export const useStyles = makeStyles((theme) => ({
    root: {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    margin:0,
    minHeight:'100vh', 
    padding:'1rem',
    [theme.breakpoints.down('xs')]: {
        padding:'1rem',

      },   

    [theme.breakpoints.down('sm')]: {
    padding:'1rem',

    }, 

    },

    divider:{
        background: "linear-gradient(to right, #18ffff, black, #d500f9)",        
        height:'1rem',
        marginBottom:'0.5rem',
        [theme.breakpoints.down('xs')]: {
            height:'0.5rem',

        },
        [theme.breakpoints.down('sm')]: {
            height:'0.5rem',

        },
    },

    goBack: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        marginLeft:'0.5rem',
        width:'3rem',
        height:'2.5rem',
        fontWeight:'bold',
        fontFamily:'arvo',
        color:'black',
        backgroundColor:'#18ffff',
        borderRadius:'0.5rem',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: "#424242",
       },
       '&:active': {
          backgroundColor: "#18ffff",
       },
       [theme.breakpoints.down('xs')]: {
        marginLeft:'0rem',
        width:'2.5rem',
        height:'2rem',
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft:'0rem',
        width:'2.5rem',
        height:'2rem',
      },
    }, 

    typo: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
    },

    backIcon: {
        fontSize:'3rem',
        [theme.breakpoints.down('xs')]: {
            fontSize:'2.5rem',

          },
        [theme.breakpoints.down('sm')]: {
            fontSize:'2.5rem',

          },
    },

    profile: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:'4rem',
        marginLeft:'0.5rem',
        padding:'0.1rem',
        width:'50%',
        fontWeight:'bold',
        fontFamily:'arvo',
        color:'#18ffff',
        background: "linear-gradient(to top, black, #9198e5, black)",        
        borderTopLeftRadius:'10rem',
        borderTopRightRadius:'10rem',
        [theme.breakpoints.down('xs')]: {
            width:'100%',
            marginTop:'2rem',
            marginLeft:'0rem',
          },
        [theme.breakpoints.down('sm')]: {
            width:'100%',
            marginTop:'2rem',
            marginLeft:'0rem',
          },
    }, 

    profileTypo: {
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        fontSize:'1.5rem',
        [theme.breakpoints.down('xs')]: {
            fontSize:'1.3rem',

        },
        [theme.breakpoints.down('sm')]: {
            fontSize:'1.3rem',

          },
    },


    details: {
        marginTop:'2rem',
        marginLeft:'0.5rem',
        width:'50%',
        [theme.breakpoints.down('xs')]: {
            width:'100%',
            marginTop:'1rem',
            marginLeft:'0rem',
          },
        [theme.breakpoints.down('sm')]: {
            width:'100%',
            marginTop:'1rem',
            marginLeft:'0rem',
          },
    },

    profile_picture: {
        height:'17rem',
        width:'100%',
        borderRadius:'8rem',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        background: "linear-gradient(to top, black, #9198e5, black)",        
        [theme.breakpoints.down('xs')]: {
            width:'100%',
            height:'6rem',
        },
        [theme.breakpoints.down('sm')]: {
            width:'100%',
            height:'12rem',
        },
    },

    avatar:{
        fontSize:'3rem',
        height:'8rem',
        width:'8rem',
        color:'black',
        backgroundColor:'#18ffff',
        [theme.breakpoints.down('xs')]: {
            fontSize:'1.5rem',
            height:'4rem',
            width:'4rem',
        },
        [theme.breakpoints.down('sm')]: {
            fontSize:'1.5rem',
            height:'4rem',
            width:'4rem',
        },
    },

    names:{
        color:'#18ffff',
        fontSize:'1.8rem',
        fontWeight:'bold',
        fontFamily:'avaro',
        paddingTop:'0.3rem',
        [theme.breakpoints.down('sm')]: {
            color:'#18ffff',
        },
    },

    other_details:{
        color:'gold',
        fontWeight:'bold',
        fontFamily:'avaro',
        paddingTop:'1.5rem',
        fontSize:'1.2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize:'1rem',
            color:'gold',
        },

    },

    height_gender:{
        color:'#18ffff',
        cursor: 'none',
        [theme.breakpoints.down('sm')]: {
            fontSize:'1.3rem',
            padding:'1rem'
        },
    },

    H_W_link:{
        cursor: 'pointer',
        color:'#18ffff',
        [theme.breakpoints.down('sm')]: {
            fontSize:'1rem',
            padding:'1rem'
        },

    }

    
  }));