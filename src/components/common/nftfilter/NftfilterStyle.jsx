import { styled, keyframes } from "@mui/system";
import { Card, Typography } from "@mui/material";

const blink = keyframes`
0% {
    transform:translateX(0%);
    transform-origin:50% 50%;
}
15% {
    transform:translateX(-30px) rotate(6deg);
}
30% {
    transform:translateX(15px) rotate(-6deg);
}
45% {
    transform:translateX(-15px) rotate(3.6deg);
}
60% {
    transform:translateX(9px) rotate(-2.4deg);
}
75% {
    transform:translateX(-6px) rotate(1.2deg);
}
100% {
    transform:translateX(0%);
    transform-origin:50% 50%;
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

export const ImageCardContainer = styled(Card)({
  display:"flex",
  flexDirection: 'column',
  alignItems:"center",
  background:"Black",
  width:"250px",
  height:"300px",
  padding:"20px 25px",
  marginRight:"10px",
  boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)',
  transition: 'transform 0.2s ease', // Add a transition for smoother effects
  '&:hover': {
    transform: 'translateY(3px)', // or 'translateY(0px)' depending on your preference
  },
  "@media (max-width: 600px)": {
    width: "95%", 
    marginBottom:"10px"
  },
})

export const CardTitle = styled(Typography)({
  fontSize:"18px",
  fontFamily: "'Poppins', sans-serif",
  fontWeight:"600",
  color:"white"
})

export const CreatorDetails = styled("div")({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  marginBottom:"10px"
})

export const CreatorName =styled("div")({
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  color:"white"
})

export const CreatorButton = styled("div")({
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  width:"90%",
  height:"50px",
  border:"1px solid #828792",
  borderRadius:"5px",
  padding:"5px"
})

export const PriceDiv = styled("div")({
  display:"flex"
})

export const BidButton = styled("div")({
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  width:"50px",
  height:"30px",
  background:"yellow",
  borderRadius:"3px",
  padding:"5px",
  cursor:"pointer"
})