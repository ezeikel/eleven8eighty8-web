import { injectGlobal, keyframes } from 'styled-components';

export default injectGlobal`
/* CSS Variables */

:root {
  /* Colors */
  --color-primary: #6CC7BE;
  --color-secondary: #030D54;
  --color-tertiary: #4629D3;
  --color-radical-red: #FF3D63;
  --color-aquamarine: #62FFD3;
  --color-bittersweet: #FF7264;
  --color-black: #2E3333;
  --color-white: #FFFFFF;
  --color-gold: #CDA349;
  --color-gold-lighter: #D4AF61;
  --color-light-grey: #ECF0F1;
  --color-red: #E74C3C;
  --color-green: #2ECC71;
  --color-grey: #BDC3C7;

  /* Spacing */
  --spacing-tiny: 4px;
  --spacing-small: calc(var(--spacing-tiny) * 2); //8px
  --spacing-medium: calc(var(--spacing-small) * 2); //16px
  --spacing-large: calc(var(--spacing-medium) * 2); //32px
  --spacing-huge: calc(var(--spacing-large) * 2); //64px
  --spacing-gargantuan: calc(var(--spacing-huge) * 2); //128px

  /* Font Sizing */
  --default-font-size: 16px;

  --default-font-family: 'neuzeit-grotesk';

  --header-height: 120px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--default-font-family);
}

img {
  max-width: 100%;
  max-height: 100%;
}

svg {
  max-height: 100%;
  max-width: 100%;;
}

h1,h2,h3,h4,h5 {
  margin: 0;
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