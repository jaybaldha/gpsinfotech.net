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
  padding: 4em;
  background: white;
  background-image: url(${logo});
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
        <Title>Hello World, this is my first styled component!</Title>
      </Wrapper>
    );
  }
}

export default App;
