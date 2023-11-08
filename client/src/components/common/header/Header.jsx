import {
  CartBox,
  CompanyName,
  HeaderLeftContainer,
  HeaderRightContainer,
  HeaderWrapper,
  HomePageLink,
  IconBox,
  LinkBox,
  LinkText,
  LoginButton,
  LogoBox,
  NavLink,
  PopLinks,
  SearchBox,
  SearchInput,
} from "./HeaderStyle";
import CentumWorldLogo from "@/assets/png/centum-logo.png";
import { DownArrow } from "@/utils/icons";
import { KeyIcon } from "@/utils/icons";
import { NavSearchIcon } from "@/utils/icons";
import { CartIcon } from "@/utils/icons";
import { Link, Popover, Typography } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <HeaderWrapper>
      <HeaderLeftContainer>
          <HomePageLink href="/" underline="none">
        <LogoBox>
          <img src={CentumWorldLogo} alt="centum_world_logo" />
          <CompanyName>CENTUMO NFT’S</CompanyName>
        </LogoBox>
          </HomePageLink>
        <LinkBox>
          <NavLink onClick={handleClick}>
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
            placeholder="Search Now"
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
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2, width: "100px" }}>
          <LinkText>
            <PopLinks href="/nft" underline="none">
              NFT'S
            </PopLinks>
          </LinkText>
          <LinkText>
            <PopLinks href="/collection" underline="none">
              Collection
            </PopLinks>
          </LinkText>
        </Typography>
      </Popover>
    </HeaderWrapper>
  );
};

export default Header;
