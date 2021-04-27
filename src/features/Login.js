/** @format */

import React from "react";
import styled from "styled-components";
function Login() {
  
  return (
    <Container>
      <CTA>
        <CTAlogo src="/images/cta-logo-one.svg" alt="" />
        <CTAButton>GET ALL THERE </CTAButton>
        <CTAP>
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </CTAP>
        <CTAlogo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

const Container = styled.div`
  background-image: url("/images/login-background.jpg");
  background-size: cover;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CTA = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
  align-items: center;
`;
const CTAlogo = styled.img`
  width: 95%;
`;
const CTAButton = styled.button`
  color: rgb(249, 249, 249);
  width: 100%;
  font-size: 18px;
  font-weight: 900;
  background-color: rgb(0, 99, 229);
  border: 1px transparent;
  height: 60px;
  cursor: pointer;
  margin: 10px;
  &:hover {
    background-color: rgb(4, 131, 238);
  }
  border-radius: 5px;
`;
const CTAP = styled.p`
  font-size: 11px;
  padding: 10px;
  color: rgb(249, 249, 249);
  letter-spacing: 1px;
  text-align: center;
`;

export default Login;
