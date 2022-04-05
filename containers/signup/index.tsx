import React from "react";
import BrandImage from "components/brand-image";
import AuthLayout from "layouts/authLayout";
import SignUpForm from "./form";

const SignUp = () => {
  return (
    <AuthLayout url="/signup-image.png">
      <div className="overflow">
        <center>
          <BrandImage />
        </center>
        <SignUpForm />
      </div>
    </AuthLayout>
  );
};

export default SignUp;
