import { Box, Typography } from "@mui/material";
import React from "react";
import { FAQContainer, FAQTitle, FAQWrapper } from "./FaqSectionStyle";
import AccordionTemplate from "../templates/accordionTemplate/AccordionTemplate";

const FaqSection = () => {
  return (
    <FAQWrapper>
      <FAQContainer>
        <FAQTitle variant="h2">Frequetly Asked Question</FAQTitle>
        <AccordionTemplate />
      </FAQContainer>
    </FAQWrapper>
  );
};

export default FaqSection;
