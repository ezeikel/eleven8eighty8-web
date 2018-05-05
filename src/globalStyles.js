import { injectGlobal, keyframes } from 'styled-components';

export default injectGlobal`
/* CSS Variables */

:root {
  /* Colors */
  --color-primary: #33B3A9;
  /* --color-primary: #F7E7CE; */
  --color-secondary: #F1D3D1;
  --color-black: #2E3333;
  --color-white: #fff;
  --color-gold: #CDA349;
  --color-gold-lighter: #d4af61;
  --color-light-grey: #ecf0f1;
  --color-red: #e74c3c;
  --color-green: #2ecc71;
  --color-grey: #bdc3c7;
  /* Spacing */
  --spacing-tiny: 4px;
  --spacing-small: 8px;
  --spacing-medium: 16px;
  --spacing-large: 32px;
  --spacing-huge: 64px;
  /* Font Sizing */
  --default-font-size: 16px;

  --header-height: 80px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: Helvetica;
}

img {
  max-width: 100%;
  max-height: 100%;
}

svg {
  max-height: 100%;
  max-width: 100%;;
}

a {
  text-decoration: none;
}

ul {
  list-style-type: none;
  padding-left: 0;
  margin: 0;
}
`;

export const dropBounceKeyframe = keyframes`
  0 % {
    transform: translateY(-100vh);
  }
  50 % {
    transform: translateY(25vh);
  }
  100 % {
    transform: translateY(0);
  }
`;