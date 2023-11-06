import { Box, Button, InputAdornment, TextField } from "@mui/material";
import {
  CartBox,
  CompanyName,
  HeaderLeftContainer,
  HeaderRightContainer,
  HeaderWrapper,
  IconBox,
  LinkBox,
  LoginButton,
  LogoBox,
  NavLink,
  SearchBox,
  SearchInput,
} from "./HeaderStyle";
import CentumWorldLogo from "@/assets/png/centum-logo.png";
import { DownArrow } from "@/utils/icons";
import { KeyIcon } from "@/utils/icons";
import { NavSearchIcon } from "@/utils/icons";
import { CartIcon } from "@/utils/icons";

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
        <LoginButton variant="contained">
          <KeyIcon />
          Sign In
        </LoginButton>
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
