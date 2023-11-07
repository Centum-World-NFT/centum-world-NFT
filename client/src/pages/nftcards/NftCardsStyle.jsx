import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
    height: '100vh',
    padding: "150px 0px 0px 0px",
})

export const HeadingDiv = styled(Box)({
    textAlign: 'center',
})

export const HeadingTitle = styled(Typography)({
    fontamily: "'Poppins', sans-serif",
    fontWeight:'700',
    color: "#000",
})

export const HighlightedText = styled(Typography)({
    color:'#4754F0',
    fontWeight:'700'
})

export const InputSearchBox = styled(TextField)({

    width:"100%",

    ".MuiInputBase-root":{
        borderRadius:'50px',
    },
    
    ".MuiFilledInput-input:focus":{
        outline:"0",
    },

    ".MuiFilledInput-root:after":{
        border:"none"
    },

    ".MuiFilledInput-root:before":{
        border:"none"
    },

    ".css-1ff8729-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before":{
        border:"none"
    },

    ".css-1iulo1y-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before":{
        border:"none"
    },

    ".MuiFilledInput-input":{
        padding: "25px 12px 8px 32px",
    },

    ".MuiInputLabel-root":{
        left: "20px",
    }
})

export const SearchIconBox = styled("div")({
    border: "1px solid black",
})

export const SearchBox = styled("div")({
    width: "60%",
    margin: "60px auto",
    position: "relative",
})

export const IconContainer = styled("div")({
    position: "absolute",
    left: "10px",
    top: "20px",
})

export const TabNftCard = styled("div")({
  
})

