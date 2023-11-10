import {Typography, styled} from "@mui/material";

export const FAQWrapper = styled("div")({
    background: "#0a0a0a",
    color: "#fff",
    fontFamily: "Poppins, 'sans-serif",
})

export const FAQContainer = styled("div")({
    width: "90vw",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    padding: "20px"
})

export const FAQTitle = styled(Typography)({
    fontWeight: "600"
})