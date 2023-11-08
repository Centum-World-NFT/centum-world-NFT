import React from "react";
import {
  CardName,
  Filter,
  FilterText,
  ImageDiv,
  ImageSelectorDiv,
  MinDiv,
  SelectorDiv,
  TokenFilter,
} from "./NftfilterStyle";
import { FilterIcon } from "@/utils/icons";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  TextField,
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
              <FilterText sx={{ flexShrink: 0 }}>Marketplace</FilterText>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
                <Chip
                  label="OpenSea"
                  color="primary"
                  style={{ cursor: "pointer" }}
                />
                <Chip
                  label="NFT.com"
                  color="primary"
                  style={{ cursor: "pointer" }}
                />
                <Chip
                  label="LooksRare"
                  color="primary"
                  style={{ cursor: "pointer" }}
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
              <FilterText sx={{ width: "33%", flexShrink: 0 }}>
                Status
              </FilterText>
            </AccordionSummary>
            <AccordionDetails>
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Buy Now"
                  color="primary"
                  style={{ cursor: "pointer" }}
                />
                <Chip
                  label="New"
                  color="primary"
                  style={{ cursor: "pointer" }}
                />
              </Stack>
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
              <FilterText sx={{ width: "33%", flexShrink: 0 }}>
                Price
              </FilterText>
            </AccordionSummary>
            <AccordionDetails>
              <MinDiv>
                <Stack
                  component="form"
                  sx={{
                    width: "14ch",
                  }}
                  spacing={2}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    placeholder="Min"
                    variant="filled"
                    size="small"
                  />
                </Stack>
                <Typography
                  variant="body1"
                  style={{ color: "black", margin: "2px" }}
                >
                  To
                </Typography>
                <Stack
                  component="form"
                  sx={{
                    width: "14ch",
                  }}
                  spacing={2}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    hiddenLabel
                    id="filled-hidden-label-small"
                    placeholder="Max"
                    variant="filled"
                    size="small"
                  />
                </Stack>
              </MinDiv>
              <TokenFilter>
                <Accordion 
                    style={{background:"#F0F0F0"}}
                >
                  <AccordionSummary
                    expandIcon={<DownArrow />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography style={{color:"black"}}>Centomo Token</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography style={{background:"#4393f4", cursor:"pointer", marginBottom:"2px", borderRadius:"2px", textAlign:"center"}}>
                      Centomo Token
                    </Typography>
                    <Typography style={{background:"#4393f4", cursor:"pointer",  marginBottom:"2px", borderRadius:"2px", textAlign:"center"}}>
                      Centomo Token
                    </Typography>

                    <Button variant="contained" style={{width:"235px"}}>Apply</Button>
                  </AccordionDetails>
                </Accordion>
              </TokenFilter>
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
              <FilterText sx={{ width: "33%", flexShrink: 0 }}>
                NFT Types
              </FilterText>
            </AccordionSummary>
            <AccordionDetails>
            <Stack direction="column" spacing={1}>
                <Chip
                  label="ERC721"
                  color="primary"
                  style={{ cursor: "pointer" }}
                />
                <Chip
                  label="ERC1155"
                  color="primary"
                  style={{ cursor: "pointer" }}
                />
                <Chip
                  label="CRIPTO_PUNKS"
                  color="primary"
                  style={{ cursor: "pointer" }}
                />
              </Stack>
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
              <CardName gutterBottom variant="h5" component="div">
                Bean #1234
              </CardName>
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
              <CardName gutterBottom variant="h5" component="div">
                Bean #1234
              </CardName>
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
              <CardName gutterBottom variant="h5" component="div">
                Bean #1234
              </CardName>
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
