import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
export const FooterContainer = styled("footer")({
  textAlign: "center",
  backgroundColor: "dark",
  color: "white",
  padding: "50px 0",
  background: "black",
});

export const AllIcon = styled(Box)({
  display: "flex",
  justifyContent: "center",
});
export const SignNewsletter = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  margin: "1.5rem 0 0 0",
});
export const CopyrightContent = styled(Box)({
  textAlign: "center",
  padding: "10px",
  backgroundColor: "blue",
  color: "white",
  boxShadow:
    " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  margin: "1rem 0 0 0",
});
export const FooterContent = styled(Typography)({
  color: "white",
  margin: "1.5rem 0 0 0",
});
export const InputEmail = styled(TextField)({
  marginTop: "0.5rem",
  borderRadius: "10px",
  background: "white",
});
