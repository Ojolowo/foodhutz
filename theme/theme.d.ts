import "styled-components";

import colors from "./colors";
import fontWeights from "./fontWeights";

type ColorsTokens = Partial<typeof colors>;
type FontWeightsTokens = Partial<typeof fontWeights>;

declare module "styled-components" {
  export interface DefaultTheme {
    colors?: ColorsTokens;
    fontWeights?: FontWeightsTokens;
  }
}
