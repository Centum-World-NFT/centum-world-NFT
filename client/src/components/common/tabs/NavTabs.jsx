import React, { useState } from "react";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import NftFilter from "../nftfilter/NftFilter";
import NftCollections from "../../../pages/collections/NftCollections";

const NavTabs = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="NFTs" value="1" />
            <Tab label="Collections" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
        <NftFilter/>
        </TabPanel>
        <TabPanel value="2">
          <NftCollections/>
        </TabPanel>
        <TabPanel value="2">
          
        </TabPanel>
        
      </TabContext>
    </Box>
  );
};

export default NavTabs;
