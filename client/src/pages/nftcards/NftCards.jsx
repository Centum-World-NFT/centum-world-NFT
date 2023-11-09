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
        <TabNftCard>
        </TabNftCard>
      </Wrapper>
    </>
  );
};

export default NftCards;
