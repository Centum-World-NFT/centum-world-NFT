import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { PlusIcon } from "../../../utils/icons";
import AccordionItems from "../../../utils/accordionDetails";
import { Wrapper } from "./AccordionTemplateStyle";

const AccordionTemplate = () => {
  return (
    <>
      {AccordionItems.map((item, index) => (
        <Wrapper>
          <AccordionSummary
            expandIcon={<PlusIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answerr}</Typography>
          </AccordionDetails>
        </Wrapper>
      ))}
    </>
  );
};

export default AccordionTemplate;
