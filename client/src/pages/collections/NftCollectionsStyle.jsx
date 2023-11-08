import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
    height: '100vh',
    padding: "0px 0px 0px 0px",
})

export const HeadingDiv = styled(Box)({
    // textAlign: 'left',
     display:'flex',
    gap:'30px',
    
})
export const TableMainDiv = styled(Box)({
    // textAlign: 'center',
    display: 'flex',
    marginTop: '20px'
})
export const TableHeadingLeftBox = styled(Box)({
    width: '35%',
    height: '20px',
    border: '1px solid black',

})
export const TableHeadigRightBox = styled(Box)({
    height: '20px',
    border: '1px solid black'
})

export const HeadingTitle = styled(Typography)({
    fontamily: "'Poppins', sans-serif",
    fontWeight: '700',
    // color: "#000",
    fontSize: '22px'
})
export const HeadingRoute = styled(Typography)({
    fontamily: "'Poppins', sans-serif",
    cursor:'pointer',
    textDecoration:'underline',
    color:'darkgray',
    marginTop:'5px'

})