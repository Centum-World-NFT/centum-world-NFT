import { Box, Button, Dialog, DialogTitle, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const LoginButton = styled(Button)({
  borderRadius: "50px",
  textTransform: "inherit",
  padding: ".6rem 1.2rem",
  gap: ".3rem",
  fontWeight: "500",
  fontSize: "1.15rem",
  lineHeight: "1.75rem",
  background: "#4393F4",
  color: "black",
  margin: "0 0.7rem 0 0",
  transition: "font-weight 0.2s, filter 0.2s",
});

export const SignupList = styled(Typography)({
  font: "600 16px inherit",
  color: "#121212",
  padding: "16px 24px",
  "&:hover": {
    backgroundColor: "#E4E4E4",
    color: "#000",
    opacity: 0.8,
    borderRadius: "16px",
    cursor: "pointer",
  },
});

export const LoginTitle = styled(DialogTitle)({
  textAlign: "center",
  font: "900 16px inherit",
  color: "#121212",
  boxShadow: "0px -1px 2.5px grey",
  display: "flex",
  justifyContent: "space-between",
  ".Typography": {
    cursor: "pointer",
  },
});

export const LoginDialog = styled(Dialog)(({theme})=>({
  borderRadius: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  "& .MuiDialog-paper": {
    overflowX: "hidden",
    width: "50%",
    borderRadius: "24px",
    height: "70%",
    overflowY: "auto",
    margin: "0",
  },
  ".css-1rwt2y5-MuiButtonBase-root-MuiButton-root": {
    color: "grey",
    boxShadow: "0px -1px 5px grey",
    padding: "24px",
    border: "none",
    overflowY: "hidden",
    "&:hover": {
      border: "none",
    },
  },
  ".css-ahj2mt-MuiTypography-root": {
    display: "flex",
  },
  [theme.breakpoints.down(1024)]:{
    "& .MuiDialog-paper": {
      width: "60%",
      borderRadius: "0",
      height: "60%",
      overflowY: "auto",
      borderRadius:"20PX",
    },
    ".recommendation":{
      fontSize:"0.7rem",
    },
    ".css-1rwt2y5-MuiButtonBase-root-MuiButton-root": {
      padding: "16px",
    },
  },

   [theme.breakpoints.down(768)]:{
    "& .MuiDialog-paper": {
      width: "70%",
      borderRadius: "0",
      height: "65%",
      overflowY: "auto",
      borderRadius:"20PX",
      marginTop:"4rem",
      ".recommendation":{
        fontSize:"0.6rem",
      },
      ".css-ypiqx9-MuiDialogContent-root":{
        padding:"0px"
      }
    },    
    ".css-1rwt2y5-MuiButtonBase-root-MuiButton-root": {
      padding: "13px",
    },
  },
  [theme.breakpoints.down(480)]:{
    "& .MuiDialog-paper": {
      width: "90%",
      borderRadius: "0",
      height: "70%",
      overflowY: "auto",
      borderRadius:"20PX",
      marginTop:"4rem",
      ".recommendation":{
        fontSize:"0.5rem",
        marginTop:"0.4rem"
      },
      ".css-ypiqx9-MuiDialogContent-root":{
        padding:"0px"
      }
    },    
    ".css-1rwt2y5-MuiButtonBase-root-MuiButton-root": {
      padding: "10px",
    },
  },
}));

export const Wraper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  ".recommendation":{
    fontSize:"0.8rem"
  }
});
