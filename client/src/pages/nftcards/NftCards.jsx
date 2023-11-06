import Header from "../../components/common/header/Header";
import { SearchIcon } from "../../utils/icons";
import {
  HeadingTitle,
  HighlightedText,
  IconContainer,
  InputSearchBox,
  SearchBox,
  SearchIconBox,
  Wrapper,
} from "./NftCardsStyle";
import { HeadingDiv } from "./NftCardsStyle";
import InputAdornment from "@mui/material/InputAdornment";

const NftCards = () => {
  return (
    <>
      <Header />
    <Wrapper>
      <HeadingDiv>
        <HeadingTitle variant="h3">
          Find your next collectible</HeadingTitle>
          <HighlightedText variant="h3"> wherever it lives</HighlightedText>
          <SearchBox>
          <InputSearchBox
            id="filled-basic"
            label="Search profiles and NFTs by name..."
            variant="filled"
          />
          <IconContainer>
            <SearchIcon />
          </IconContainer>
          </SearchBox>
      </HeadingDiv>
    </Wrapper>
    </>
  );
};

export default NftCards;
