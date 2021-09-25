import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          Star on Disney+ brings you more. Hundreds more TV series & movies,
          plus thousands of hours of drama, suspense, humour and thrills. Enjoy
          Star as part of your Disney+ subscription.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: top;

  &:before {
    position: absolute;
    content: "";
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.7;
    background-position: top;
    background-size: cover;
    background-image: url("/images/login-background.jpg");
    z-index: -1;
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 100px;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  border-radius: 5px;
  padding: 17px 0;
  margin-top: 10px;
  margin-bottom: 12px;
  color: #f9f9f9;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.25s;
  letter-spacing: 1.5px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 10px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;

const CTALogoTwo = styled.img`
  width: 100%;
`;
