import styled from "styled-components";

export const HeadingOne = styled.h1<{ center?: boolean }>`
  color: ${({ theme }) => theme.colors?.secondary};
  font-size: 48px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  font-weight: ${({ theme }) => theme.fontWeights?.semiBold};
`;

export const HeadingTwo = styled.h2<{ center?: boolean }>`
  color: ${({ theme }) => theme.colors?.secondary};
  font-size: 32px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  font-weight: ${({ theme }) => theme.fontWeights?.semiBold};
`;

export const SmallText = styled.p<{ center?: boolean }>`
  color: ${({ theme }) => theme.colors?.primary};
  font-size: 14px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  font-weight: ${({ theme }) => theme.fontWeights?.regular};
`;

export const ParagraphText = styled.p<{ center?: boolean; pointer?: boolean }>`
  color: ${({ theme }) => theme.colors?.primary};
  font-size: 18px;
  text-align: ${({ center }) => (center ? "center" : "left")};
  font-weight: ${({ theme }) => theme.fontWeights?.semiBold};
  cursor: ${({ pointer }) => (pointer ? "pointer" : "")};
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  margin: 3em 0;
`;
