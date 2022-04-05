import type { NextPage } from "next";
import SignIn from "containers/siginin";
import Meta from "seo";

const SignInPage: NextPage = () => {
  return (
    <Meta
      title="Food Hutz | Welcome Back "
      description="Sign in to your account"
    >
      <SignIn />;
    </Meta>
  );
};

export default SignInPage;
