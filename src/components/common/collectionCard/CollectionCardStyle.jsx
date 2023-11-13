import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const WrapDiv = styled(Box)({
    display:'flex',
    flexDirection: 'column' , 
    gap:'1.5rem',
});



export const MainDiv = styled(Box)(({theme}) => ({
  display: 'flex',
  padding:'5px',
  alignItems:'center',

  '& > :not(style)': {
    width: '96%',
    margin: '0 auto',
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.02)',
    },
  },
  [theme.breakpoints.down("md")]:{
    // height: 180,
    flexDirection:'column'
  }
}));

// ... other styled components
