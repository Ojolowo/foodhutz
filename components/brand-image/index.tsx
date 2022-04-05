import router from "next/router";
import {
  BrandImageStyledContainer,
  BrandImageStyledComponent,
} from "./brand-image.styles";

const BrandImage = () => {
  return (
    <BrandImageStyledContainer onClick={() => router.push("/")}>
      <BrandImageStyledComponent src="/food-hutz.png" alt="Food Hutz" />
    </BrandImageStyledContainer>
  );
};
export default BrandImage;
