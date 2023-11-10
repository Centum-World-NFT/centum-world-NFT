import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
    padding: "0px 0px 0px 0px",
})

export const HeadingDiv = styled(Box)(({theme}) => ({
    display: 'flex',
    marginTop: '30px',
    [theme.breakpoints.down("md")]:{
        display: "none"
    }
}))
export const HeadingLeftBox = styled(Box)({
    width: '35%',
    padding: '5px 0px 0px 40px'

})
export const HeadingRightBox = styled(Box)(() => ({
    display: 'flex',
    width: '70%',
    height: '30px',
    justifyContent: 'space-around',
    paddingTop: '5px'
}))
export const HeadingTitle = styled(Typography)({
    fontamily: "'Poppins', sans-serif",
    fontWeight: '600',
    color: 'darkgray',

})
