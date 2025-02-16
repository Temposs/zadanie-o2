/* eslint-disable @typescript-eslint/no-empty-interface */

import { Styled_theme } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme extends Styled_theme {}
}
