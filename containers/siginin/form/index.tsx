import React, { useState } from "react";
import router from "next/router";
import Input from "components/input";
import Button from "components/button";
import {
  HeadingOne,
  HeadingTwo,
  ParagraphText,
  SmallText,
  TextBlock,
} from "styles/typography";
import { Divisor, FormFooter } from "./styles";

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {}, 1000);
  };

  return (
    <div>
      <TextBlock>
        <HeadingOne center>Welcome Back!</HeadingOne>
        <HeadingTwo center>Sign In</HeadingTwo>
      </TextBlock>
      <form data-testid="form-box" onSubmit={onSubmit}>
        <Input
          type="text"
          label="Employee ID"
          id="employeeID"
          placeholder="Employee ID"
        />
        <Input
          endAdornment
          type="password"
          label="Password"
          id="password"
          placeholder="*********"
        />
        <Button
          type="submit"
          variant="primary"
          size="regular"
          isLoading={isLoading}
          fullWidth
        >
          Sign In
        </Button>
      </form>
      <FormFooter>
        <SmallText center>Forgotten Password?</SmallText>
        <Divisor />
        <ParagraphText center onClick={() => router.push("/signup")} pointer>
          Create new account
        </ParagraphText>
      </FormFooter>
    </div>
  );
};

export default SignInForm;
