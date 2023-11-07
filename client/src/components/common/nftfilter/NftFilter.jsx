import React from "react";
import {
  Filter,
  ImageDiv,
  ImageSelectorDiv,
  SelectorDiv,
} from "./NftfilterStyle";
import { FilterIcon } from "@/utils/icons";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { DownArrow } from "@/utils/icons";
import image from "../../../utils/cardimages/image.jpg";

const NftFilter = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <Filter>
        <FilterIcon />
        Filter
      </Filter>

      <ImageSelectorDiv>
        <SelectorDiv>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<DownArrow />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Marketplace
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Ocean"
                />
                <Chip
                  label="NFT.com"
                  variant="outlined"
                />
              </Stack>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<DownArrow />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Status
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
             
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<DownArrow />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                Price
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<DownArrow />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography sx={{ width: "33%", flexShrink: 0 }}>
                NFT Types
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              
            </AccordionDetails>
          </Accordion>
        </SelectorDiv>

        <ImageDiv>
          <Card sx={{ width: 345, marginRight: 2 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bean #1234
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Official end in 2 month.
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: 345, marginRight: 2 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bean #1234
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Official end in 2 month.
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ width: 345, marginRight: 2 }}>
            <CardMedia
              sx={{ height: 300 }}
              image={image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bean #1234
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Official end in 2 month.
              </Typography>
            </CardContent>
          </Card>
        </ImageDiv>
      </ImageSelectorDiv>
    </>
  );
};

export default NftFilter;
