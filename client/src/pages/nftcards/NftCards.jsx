import Header from "../../components/common/header/Header";
import {
  HeadingTitle,
  HighlightedText,
  IconContainer,
  InputSearchBox,
  SearchBox,
  TabNftCard,
  Wrapper,
} from "./NftCardsStyle";
import { HeadingDiv } from "./NftCardsStyle";
import { SearchIcon } from "@/utils/icons";
import NavTabs from "../../components/common/tabs/NavTabs";


const NftCards = () => {
  return (
    <>
      <Header />
    <Wrapper>
      <HeadingDiv>
        <HeadingTitle variant="h3">Find your next collectible</HeadingTitle>
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
      <TabNftCard>
        <NavTabs />
      </TabNftCard>
    </Wrapper>
    </>
  );
};

export default NftCards;
