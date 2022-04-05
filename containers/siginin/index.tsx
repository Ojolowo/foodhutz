import React from "react";
import BrandImage from "components/brand-image";
import AuthLayout from "layouts/authLayout";
import SignInForm from "./form";

const SignIn = () => {
  return (
    <AuthLayout url="/signin-image.png">
      <div className="overflow">
        <center>
          <BrandImage />
        </center>
        <SignInForm />
      </div>
    </AuthLayout>
  );
};

export default SignIn;
