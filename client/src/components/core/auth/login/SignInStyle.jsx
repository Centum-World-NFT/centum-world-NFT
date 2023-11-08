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
  marginRight: "0.7rem",
  transition: "font-weight 0.2s, filter 0.2s",
  "&::-webkit-scrollbar": {
    display: "none",
  },
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

export const LoginDialog = styled(Dialog)({
  maxWidth: "100%",
  borderRadius: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  "& .MuiDialog-paper": {
    overflowX: "hidden",
    width: "550px",
    maxWidth: "100%",
    borderRadius: "24px",
    height: "450px",
    maxheight: "100%",
    overflowY: "auto",
  },
  ".css-1rwt2y5-MuiButtonBase-root-MuiButton-root": {
    color: "grey",
    boxShadow: "0px -1px 5px grey",
    padding: "24px",
    border: "none",
    "&:hover": {
      border: "none",
    },
  },
  ".css-ahj2mt-MuiTypography-root ": {
    display: "flex",
  },
});

export const Wraper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});
