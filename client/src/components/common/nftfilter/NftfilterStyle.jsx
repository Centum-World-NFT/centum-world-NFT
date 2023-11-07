import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Filter = styled("div")({
    display:"flex",
    justifyContent:"center",
    width:"100px",
    height:"50px",
    background:"#4393F4",
    borderRadius:"50px",
    alignItems:"center",
    color:"#fff",
    cursor:"pointer"
})

export const DisableButton = styled("div")({
    display:"flex",
    justifyContent:"center",
    width:"100px",
    height:"50px",
    background:"#EAEAEA",
    borderRadius:"50px",
    alignItems:"center",
    color:"#ccc",
    cursor:"pointer"
})

export const ImageSelectorDiv = styled("div")({
    display:"flex",
    marginTop:"10px"

})

export const SelectorDiv = styled("div")({
    width:"300px",
    margin:"5px",
})

export const SelectonrContent = styled(Typography)({
    fontamily: "'Poppins', sans-serif",
    fontWeight:'600',
    fontSize:"16px"
})

export const ImageDiv = styled("div")({
    display:"flex"
})

