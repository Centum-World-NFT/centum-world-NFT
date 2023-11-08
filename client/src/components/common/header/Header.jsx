import {
  CartBox,
  CompanyName,
  HeaderLeftContainer,
  HeaderRightContainer,
  HeaderWrapper,
  IconBox,
  LinkBox,
  LogoBox,
  NavLink,
  SearchBox,
  SearchInput,
} from "./HeaderStyle";
import CentumWorldLogo from "@/assets/png/centum-logo.png";
import { DownArrow } from "@/utils/icons";
import { NavSearchIcon } from "@/utils/icons";
import { CartIcon } from "@/utils/icons";
import SignInButton from "../../core/auth/login/SignIn";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLeftContainer>
        <LogoBox>
          <img src={CentumWorldLogo} alt="centum_world_logo" />
          <CompanyName>CENTUMO NFT’S</CompanyName>
        </LogoBox>
        <LinkBox>
          <NavLink>
            Discover <DownArrow />{" "}
          </NavLink>
          <NavLink>
            Learn <DownArrow />{" "}
          </NavLink>
        </LinkBox>
      </HeaderLeftContainer>
      <HeaderRightContainer>
      <SignInButton/>
        <SearchBox>
          <SearchInput
            id="outlined-start-adornment"
            label="Search"
            variant="filled"
          />
          <IconBox>
            <NavSearchIcon />
          </IconBox>
        </SearchBox>
        <CartBox>
          <CartIcon />
        </CartBox>
      </HeaderRightContainer>
    </HeaderWrapper>
  );
};

export default Header;
