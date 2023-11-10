import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";
export const FooterContainer= styled("footer")({
    textAlign: "center",
    backgroundColor: "dark",
    color: "white",
    padding: "50px 0",
  });

  export const AllIcon = styled(Box)({
        display: "flex",
        justifyContent: "center",
  })
  export const SignNewsletter= styled(Box)({
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        flexWrap:"wrap",
        margin:"1.5rem 0 0 0",  
  })
  export const CopyrightContent = styled(Box)({
    textAlign: "center",
    padding: "10px",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  })
  export const FooterContent = styled(Typography)({
    color:"black" ,
    margin:"1.5rem 0 0 0"
  })
  export const InputEmail = styled(TextField)({
    marginTop: "0.5rem"
  })
