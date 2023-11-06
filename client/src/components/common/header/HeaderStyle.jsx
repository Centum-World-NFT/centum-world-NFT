import { Typography } from "@mui/material";
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
});

export const LogoBox = styled("div")({
    display: "flex",
    alignItems: "center",
    borderRight: "1px solid rgba(0, 0, 0, 0.50)",
    padding: "0px 10px 0px 0px"
})

export const CompanyName = styled(Typography)({
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
})
