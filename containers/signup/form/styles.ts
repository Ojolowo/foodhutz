import styled from "styled-components";

export const FormFooter = styled.div`
  margin: 3em 0;
`;

export const Divisor = styled.hr`
  border: 0.5px solid #888a8e;
  margin: 1.75em 0;
  opacity: 0.5;
`;

export const PhoneInputWrapper = styled.div`
  display: flex;
  border: solid 1px #888a8e;
  padding: 0 1rem;
  margin-top: 0.75em;
  margin-bottom: 1.75em;
`;

export const CustomLabel = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.colors?.secondary};
`;
