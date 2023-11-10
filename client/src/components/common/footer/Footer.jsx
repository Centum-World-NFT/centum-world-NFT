import React from "react";
import { Container, Button } from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  Google,
  LinkedIn,
  GitHub,
} from "../../../utils/icons";
import { FooterContainer } from "./FooterStyle";
import { AllIcon } from "./FooterStyle";
import { CopyrightContent } from "./FooterStyle";
import { FooterContent } from "./FooterStyle";
import { InputEmail } from "./FooterStyle";
import { SignNewsletter } from "./FooterStyle";

export default function Footer() {
  return (
    <FooterContainer>
      <Container>
        <AllIcon>
          <Button>
            <Facebook />
          </Button>
          <Button>
            <Twitter />
          </Button>
          <Button>
            <Google />
          </Button>
          <Button>
            <Instagram />
          </Button>
          <Button>
            <LinkedIn />
          </Button>
          <Button>
            <GitHub />
          </Button>
        </AllIcon>

        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SignNewsletter>
            <InputEmail
              id="standard-basic"
              label="Email"
              variant="standard"
              type="email"
            />
            <Button>Subscribe</Button>
          </SignNewsletter>
        </form>

        <FooterContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          distinctio earum repellat quaerat voluptatibus placeat nam, commodi
          optio pariatur est quia magnam eum harum corrupti dicta, aliquam sequi
          voluptate quas.
        </FooterContent>
      </Container>
      <CopyrightContent>© 2020 Copyright:</CopyrightContent>
    </FooterContainer>
  );
}
