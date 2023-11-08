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
import Web3 from "web3";

function SignInButton() {
  const [open, setOpen] = React.useState(false);
  const [showAll, setShowAll] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleMetaMaskClick = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        console.log("Connected to Metamask:", accounts[0]);
      } catch (error) {
        console.error("Error connecting to Metamask:", error);
      }
    } else {
      console.error("Metamask is not installed");
    }
  };

  const renderList = () => {
    if (showAll) {
      return allItems.map((item, index) => (
        <SignupList key={index}>
          <Wraper>
            <Typography
              onClick={() => item.name === "MetaMask" && handleMetaMaskClick()}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ marginRight: "8px" }}
              />{" "}
              {item.name}
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
              <img
                src={item.icon}
                alt={item.name}
                style={{ marginRight: "8px" }}
              />{" "}
              {item.name}
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
            <Typography className="Typography" variant="span" onClick={handleClose}>X</Typography>
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
