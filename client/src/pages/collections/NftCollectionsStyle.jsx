import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
    height: '100vh',
    padding: "0px 0px 0px 0px"
})

export const HeadingDiv = styled(Box)({
    textAlign: 'left',
    display:'flex'
})

export const HeadingTitle = styled(Typography)({
    fontamily: "'Poppins', sans-serif",
    fontWeight:'600',
    fontSize:'22px'
})
export const HeadingRoute = styled(Typography)({
    fontFamily:"'Poppins', sans-serif",
    marginLeft:'50px',
    marginTop:'5px',
    color:'darkgray',
    cursor:'pointer',
    textDecoration:'underline'
})