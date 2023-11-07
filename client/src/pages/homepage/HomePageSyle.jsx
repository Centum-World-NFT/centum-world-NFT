import { Typography } from "@mui/material";
import { styled } from "@mui/system";

export const Wrapper = styled("div")({
  height: "100vh",
  position: "relative",
  background: "#0a0a0a",
});

export const imageStyle = {
  animation: "slide-br 1s ease-out 1s infinite alternate both",
  position: "absolute",
  right: "-10%",
  top: "-20%",
};

export const imageStyle2 = {
    position: "absolute",
    right: "10%",
    animation: "slide-br 1s ease-out 1s infinite alternate-reverse both",
};

export const frameImage = {
  position: "absolute",
  right: "20%",
  animation: "slide-bl 1s linear 0s infinite alternate both",
};

export const HeroText = styled(Typography)(({ theme }) => ({
  position: "absolute",
  bottom: "0%",
  fontWeight: "600",
  fontSize: "8.75rem",
  fontFamily: "'Poppins', sans-serif",
  color: "#fff",
  width: "60%",
  [theme.breakpoints.down("md")]: {
    width: "100vw",
    fontSize: "3.5rem",
    top: "20%",
    height: "max-content",
  },
}));

export const HightLightedText = styled(Typography)({
  color: "#913DF3",
  textShadow:
    "1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white",
});
