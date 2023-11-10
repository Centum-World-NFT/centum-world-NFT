import { Accordion } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled(Accordion)({
  background: "#0a0a0a",
  boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
  width: "80%",
  color: "#fff",

  "&.MuiPaper-root": {
    margin: "0 auto",
    padding: "20px",    
  },
});
