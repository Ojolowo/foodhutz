import React, { useState } from "react";
import router from "next/router";
import PhoneInput from "react-phone-number-input";
import Input from "components/input";
import Button from "components/button";
import { HeadingTwo, ParagraphText, TextBlock } from "styles/typography";
import { CustomLabel, Divisor, FormFooter, PhoneInputWrapper } from "./styles";

const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState();

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {}, 1000);
  };

  return (
    <div>
      <TextBlock>
        <HeadingTwo center>Create account</HeadingTwo>
      </TextBlock>
      <form data-testid="form-box" onSubmit={onSubmit}>
        <Input
          type="text"
          label="Employee ID"
          id="employeeID"
          placeholder="Employee ID"
        />

        <CustomLabel>Phone Number</CustomLabel>
        <PhoneInputWrapper>
          <PhoneInput
            style={{ boxShadow: "none", border: "none" }}
            international
            countryCallingCodeEditable={false}
            defaultCountry="NG"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber}
            placeholder="Enter Phone Number"
          />
        </PhoneInputWrapper>

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
          Create Account
        </Button>
      </form>
      <FormFooter>
        <Divisor />
        <ParagraphText center onClick={() => router.push("/")} pointer>
          Sign In
        </ParagraphText>
      </FormFooter>
    </div>
  );
};

export default SignUpForm;
