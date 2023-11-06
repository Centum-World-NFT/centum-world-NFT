import { Box, Typography } from "@mui/material";
import { CompanyName, HeaderWrapper, LogoBox } from "./HeaderStyle";
import CentumWorldLogo from "@/assets/png/centum-logo.png"

const Header = () => {
  return (
    <HeaderWrapper>
        <Box>
            <LogoBox>
                <img src={CentumWorldLogo} alt="centum_world_logo" />
                <CompanyName>CENTUMO  NFT’S</CompanyName>
            </LogoBox>
            <Box>
              
            </Box>
        </Box>
    </HeaderWrapper>
  )
}

export default Header