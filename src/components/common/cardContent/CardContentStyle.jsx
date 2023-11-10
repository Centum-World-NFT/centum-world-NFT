import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
    padding: "0px 0px 0px 0px",
})

export const MainDiv = styled(Box)({
    display: 'flex',
   
})
export const LeftBox = styled(Box)({
    display:'flex',
    width:'35%',
})
export const RightBox = styled(Box)({
    display:'flex',
     width:'70%',
    justifyContent:'space-around',
   
})
export const SerialNumber = styled(Typography)({
    fontamily: "'Poppins', sans-serif",
    fontWeight:'500',
    justifyContent:'center',
    margin:"30px 0px 0px 10px",
})
export const ImgDiv = styled("div")({
    height:'70px',
    width:'70px',
    margin:'20px 20px 0px 30px'
})
export const CollectionName = styled(Typography)({
    fontamily: "'Poppins', sans-serif",
    fontWeight:700,
    margin:'30px 0px 0px 10px'
}) 
export const VolumeDiv = styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:'0.5rem'
})
export const VolumeLeftDiv = styled(Box)({
    
     margin:'0px 0px 15px 0px'
})
export const VolumeRightDiv = styled(Box)({
   
})
export const VolumeImgDiv = styled("div")({
    height:'35px',
    width:'15px',
    margin:'30px 0px 0px 10px'
})
export const VolumeETHDiv = styled(Box)({

})
export const VolumeDolDiv = styled(Box)({

})
export const EthValue = styled(Typography)({
    fontamily: "'Poppins', sans-serif",
    fontWeight:'bold'
})
export const DolValue = styled(Typography)({
    fontamily: "'Poppins', sans-serif",
    fontWeight:'400',
    color:'darkgray',
    fontSize:'14px'
})
export const PerChangeDiv = styled("div")({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
})
export const PerChangeValueDiv = styled(Box)({

})
export const PerChangeValue = styled(Typography)({
    fontamily: "'Poppins', sans-serif",
    color:'#26aa73',
    fontWeight:'600',
    marginLeft:'40px'
})

export const SalesDiv = styled("div")({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:'0px 0px 0px 60px'
    
})
export const SalesValueDiv = styled(Box)({
    margin:'0px 0px 0px 60px', 
    alignContent:'right'
})
export const SalesValue = styled(Typography)({
    fontamily: "'Poppins', sans-serif",
    color:'#000000',
    fontWeight:'600',

})