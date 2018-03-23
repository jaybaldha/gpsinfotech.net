import React from "react";
import styled, { ThemeProvider } from "styled-components";
import theme from "styled-theming";
import logo from "./GPSLogo1.png";
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 50px;
  text-align: center;
  color: blue;
`;
// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 40px;
  background: white;
  box-shadow: 0 40px 80px 0 rgba(0, 0, 0, 0.55),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-align: center;
`;
const StyledImage = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
`;
const StyledPara = styled.p`
  padding: 10px;
`;
//Import Logo
//const Logo = styled.section`
//font-size: 20px;
// color: blue;
//`;
// Use Title and Wrapper like any other React component – except they're styled!
class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <StyledImage src={logo} />
        <StyledPara />
      </Wrapper>
    );
  }
}

export default App;
