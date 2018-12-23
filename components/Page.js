import React from 'react';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import Header from '../components/Header';
import Meta from '../components/Meta';

 
const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    maxWidthSingle: '840px',
    maxWidthFront: '600px',
    innerPadding: '4rem 2rem',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  };
  
  const StyledPage = styled.div`
    background: white;
    color: ${props => props.theme.black};
  `;
  
  const Content = styled.div`
  `;

injectGlobal`
html {
  box-sizing: border-box;
  font-size: 10px;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  padding: 0;
  margin: 0;
  font-size: 1.6rem;
  line-height: 2;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
}
a {
  text-decoration: none;
  color: ${theme.black};
}

h1 {
    font-size: 3.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin: 0.5rem 0 2rem;
    text-align: center;
}

h2,h3,h4,h5,h6 {
    font-size: 2.5rem;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin: 0.5rem 0 2rem;
    text-align: center;
}
`;

class Page extends React.Component {
    render() {

        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />
                    <Content>{this.props.children}</Content>
                </StyledPage>
         </ThemeProvider>
        )
    }
}

export default Page;
