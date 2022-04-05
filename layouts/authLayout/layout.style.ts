import styled from "styled-components";
import responsive from "theme/responsive";

export const LayoutWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  ${responsive("$medium")`
    grid-template-columns: repeat(1, 1fr);

   .hidden {
      display: none
   }
   `};
`;

export const RightContent = styled.div<{ url: string }>`
  background-position: center;
  background-blend-mode: darken;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${({ url }) => `url(${url})`};
  position: fixed;
  left: 0;
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  ${responsive("$medium")`
      display: none  
   `};
`;

export const FormDiv = styled.div`
  min-height: 100vh;
  padding: 0 43px 43px 43px;
  transition: opacity 3s;
  background-color: ${({ theme }) => theme.colors?.white};

  .overflow {
    width: 100%;
    height: 100%;
    padding: 16px 15%;
    margin: 48px 0;
    position: relative;
    background-color: #fefdff;
  }
`;
