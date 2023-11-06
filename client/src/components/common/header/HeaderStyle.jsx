import { Button, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const HeaderWrapper = styled("div")({
  position: "fixed",
  borderRadius: "50px",
  background: "#FFF",
  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
  width: "96vw",
  display: "flex",
  alignItems: "center",
  padding: "20px",
  justifyContent: "space-between",
});

export const LogoBox = styled("div")({
  display: "flex",
  alignItems: "center",
  borderRight: "1px solid rgba(0, 0, 0, 0.50)",
  padding: "0px 10px 0px 0px",
});

export const CompanyName = styled(Typography)({
  fontWeight: "600",
  fontFamily: "'Poppins', sans-serif",
});

export const HeaderLeftContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const NavLink = styled(Typography)({
  margin: "0px 0px 0px 10px",
  fontWeight: "600",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  gap: ".2rem",
});

export const LinkBox = styled("div")({
  display: "flex",
});

export const HeaderRightContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const LoginButton = styled(Button)({
  borderRadius: "50px",
  textTransform: "inherit",
  padding: ".7rem 1.5rem",
  display: "flex",
  gap: ".2rem",
});

export const SearchInput = styled(TextField)({
  padding: "0px 10px 0px 0px",

  ".MuiInputBase-root": {
    borderRadius: "50px",
  },

  ".MuiInputLabel-root": {
    left: "20px",
  },

  ".css-1ff8729-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before":
    {
      border: "none",
    },

  ".css-1ff8729-MuiInputBase-root-MuiFilledInput-root:before": {
    border: "none",
  },

  ".css-1iulo1y-MuiInputBase-root-MuiFilledInput-root:hover:not(.Mui-disabled, .Mui-error):before":
    {
      border: "none",
    },

  ".MuiFilledInput-root:hover": {
    border: "none",
  },

  ".css-1iulo1y-MuiInputBase-root-MuiFilledInput-root:before": {
    border: "none",
  },

  ".MuiFilledInput-input:focus": {
    outline: "0",
  },

  ".MuiFilledInput-root:after": {
    border: "none",
  },

  ".MuiFilledInput-input": {
    padding: "25px 12px 8px 32px",
  },
});

export const SearchBox = styled("div")({
  display: "flex",
  alignItems: "center",
  borderRight: "1px solid black",
  position: "relative",
});

export const IconBox = styled("div")({
  position: "absolute",
  left: "10px",
});

export const CartBox = styled("div")({
  margin: "0px 0px 0px 10px",
  cursor: "pointer",
});
