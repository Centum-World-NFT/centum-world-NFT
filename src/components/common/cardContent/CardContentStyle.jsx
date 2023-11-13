import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
  padding: "0px 0px 0px 0px",
});

export const MainDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
}));

export const LeftBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "35%",
  [theme.breakpoints.down("md")]: {
    width: "95%",
    flexDirection: "column",
  },
}));

export const ImgBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "row",
  },
}));

export const CollectionNameBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const RightBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "70%",
  justifyContent: "space-around",
  [theme.breakpoints.down("md")]: {
    width: "97%",
    flexDirection: "column",
  },
 
}));

export const RightUperBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "space-between",
    
  },
  [theme.breakpoints.up("md")]: {
    display:'flex',
     width:'35%',
     justifyContent:'space-between'
  },
}));
export const RightLowerBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    justifyContent: "space-between",
  },
  [theme.breakpoints.up("md")]: {
    display:'flex',
    width:'35%',
     justifyContent:'space-between'
  },
}));
export const SerialNumber = styled(Typography)(({ theme }) => ({
  fontamily: "'Poppins', sans-serif",
  fontWeight: "500",
  justifyContent: "center",
  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
    fontWeight: 900,
  },
}));
export const ImgDiv = styled(Box)({
  display: "flex",
  alignItems: "center",
  height: "70px",
  width: "70px",
});
export const CollectionName = styled(Typography)(({ theme }) => ({
  fontamily: "'Poppins', sans-serif",
  fontWeight: 700,
  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
    fontWeight: 900,
  },
}));

export const VolumeDiv = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",

});

export const VolumeContentDiv = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {},
}));

export const VolumeLabelDiv = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
export const VolumeLabel = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    color: "darkgrey",
    fontWeight: 700,
  },
}));
export const VolumeLeftDiv = styled(Box)({
  display: "flex",
});
export const VolumeRightDiv = styled(Box)({});
export const VolumeImgDiv = styled("div")({
  display: "flex",
  alignItems: "center",
  height: "35px",
  width: "15px",
});
export const VolumeETHDiv = styled(Box)({});
export const VolumeDolDiv = styled(Box)({});
export const EthValue = styled(Typography)({
  fontamily: "'Poppins', sans-serif",
  fontWeight: "bold",
});

export const DolValue = styled(Typography)({
  fontamily: "'Poppins', sans-serif",
  fontWeight: "400",
  color: "darkgray",
  fontSize: "14px",
});
export const PerChangeDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.not("sm")]: {
    justifyContent: "center",
  },
}));

export const PerChangeContentDiv = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "block",
    alignItems: "center",
  },
}));

export const PerChangeLabelDiv = styled(Box)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
export const PerChangeLabel = styled(Typography)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "block",
    fontWeight: 700,
    color: "darkgrey",
  },
}));

export const PerChangeValueDiv = styled(Box)({});
export const PerChangeValue = styled(Typography)({
  fontamily: "'Poppins', sans-serif",
  color: "#26aa73",
  fontWeight: "600",
});

export const SalesDiv = styled("div")(({ theme }) => ({
  display:'flex',
  flexDirection:'row',
  alignItems:'center',
  [theme.breakpoints.down("md")]:{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
 
  [theme.breakpoints.not("sm")]: {
    justifyContent: "center",
  },
}));

export const SalesLabelDiv = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    alignItems: "center",
    fontWeight: 700,
    color: "darkgrey",
  },
}));
export const SalesValueDiv = styled(Box)({

});
export const SalesValue = styled(Typography)({
  fontamily: "'Poppins', sans-serif",
  color: "#000000",
  fontWeight: "600",
});
