import * as React from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { LoginButton, Wraper } from "./SignInStyle";
import { LoginIcon } from "../../../../utils/icons";
import { LoginTitle } from "./SignInStyle";
import { LoginDialog } from "./SignInStyle";
import { Typography } from "@mui/material";
import { SignupList } from "./SignInStyle";
import allItems from "../../../../data/SignUpAllData";

function SignInButton() {
  const [open, setOpen] = React.useState(false);
  const [showAll, setShowAll] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleMetaMaskClick = () => {
    alert("Hi! You clicked on MetaMask.");
  };


  const renderList = () => {
    if (showAll) {
      return allItems.map((item, index) => (
        <SignupList key={index}>
          <Wraper>
            <Typography
              onClick={() => item.name === "MetaMask" && handleMetaMaskClick()}
            >
              <img src={item.icon} alt={item.name} style={{ marginRight: '8px' }} /> {item.name}
            </Typography>
            <Typography>{item.recommendation}</Typography>
          </Wraper>
        </SignupList>
      ));
    } else {
      const visibleItems = allItems.slice(0, 6);
      return visibleItems.map((item, index) => (
        <SignupList key={index}>
          <Wraper>
            <Typography
              onClick={() => item.name === "MetaMask" && handleMetaMaskClick()}
            >
              <img src={item.icon} alt={item.name} style={{ marginRight: '8px' }} /> {item.name}
            </Typography>
            <Typography>{item.recommendation}</Typography>
          </Wraper>
        </SignupList>
      ));
    }
  };

  return (
    <React.Fragment>
      <LoginButton variant="outlined" onClick={handleClickOpen}>
        <LoginIcon /> Sign In
      </LoginButton>
      <LoginDialog
        open={open}
        onClose={() => {}}
        aria-labelledby="responsive-dialog-title"
      >
        <LoginTitle id="responsive-dialog-title">
          {"Connect your wallet"}
        </LoginTitle>
        <DialogContent>
          <DialogContentText>{renderList()}</DialogContentText>
        </DialogContent>
        <Button onClick={toggleShowAll} variant="outlined">
          {showAll ? "View less" : "View all"}
        </Button>
      </LoginDialog>
    </React.Fragment>
  );
}

export default SignInButton;
