import { styled, keyframes } from "@mui/system";
import { Card, Typography } from "@mui/material";

const blink = keyframes`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const Filter = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "100px",
  height: "50px",
  background: "#4393F4",
  borderRadius: "50px",
  alignItems: "center",
  color: "#fff",
  cursor: "pointer",
  "@media (max-width: 768px)": {
    width: "80px",
  },
});

export const DisableButton = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "100px",
  height: "50px",
  background: "#EAEAEA",
  borderRadius: "50px",
  alignItems: "center",
  color: "#ccc",
  cursor: "pointer",
  "@media (max-width: 768px)": {
    width: "80px",
  },
});

export const ImageSelectorDiv = styled("div")({
  display: "flex",
  marginTop: "10px",
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
});

export const SelectorDiv = styled("div")({
  width: "300px",
  margin: "5px",
  "@media (max-width: 768px)": {
    width: "100%",
  },
});

export const SelectonrContent = styled(Typography)({
  fontFamily: "'Poppins', sans-serif",
  fontWeight: "600",
  fontSize: "16px",
});

export const ImageDiv = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "space-between",
  "@media (max-width: 768px)": {
    flexDirection: "column",
  },
});

export const FilterText = styled(Typography)({
  color: "#000",
});

export const CardName = styled("div")({
  color: "#000",
});

export const MinDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "5px",
});

export const TokenFilter = styled("div")({
  background: "#f7f7f8",
});

export const CardWithBadge = styled(Card)({
  position: "relative",
});

export const Badge = styled("div")({
  position: "absolute",
  top: 0,
  right: 0,
  backgroundColor: "red", // Customize the badge color
  color: "white", // Customize the text color
  padding: "4px 8px",
  borderRadius: "50%",
  animation: `${blink} 1s infinite`,
});


