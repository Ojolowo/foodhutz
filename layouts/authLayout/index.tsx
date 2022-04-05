import React from "react";
import { RightContent, LayoutWrapper, FormDiv } from "./layout.style";

interface Props {
  url: string;
  children: React.ReactNode;
}

const SignupLayout: React.FC<Props> = ({ url, children }) => {
  return (
    <LayoutWrapper>
      <RightContent url={url}></RightContent>
      <div className="hidden"></div>
      <FormDiv>{children}</FormDiv>
    </LayoutWrapper>
  );
};

export default SignupLayout;
