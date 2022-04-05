import type { NextPage } from "next";
import SignUp from "containers/signup";
import Meta from "seo";

const SignUpPage: NextPage = () => {
  return (
    <Meta title="Food Hutz | Get Started" description="Create your account">
      <SignUp />;
    </Meta>
  );
};

export default SignUpPage;
