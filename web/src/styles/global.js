import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
  margin:0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body, input, button {
  font-family: 'Poppins', sans-serif;
  font-size: 0.88rem;
}
button {
  cursor: pointer;
}
a {
  text-decoration: none;
}

img {
  width: 100vw;
  max-width: 300px;
}

:root {
  --color-primary: 	#9966cc;
  --color-primary-50: #e0d1ef;
  --color-secondary: #0b9c62;
  --color-secondary-50: #ceebdf;
  --details: #e4721f;
  --details-50: #f6d4bb;
  --grey-0: #212529;
  --grey-1: #868e96;
  --grey-2: #e9ecef;
  --grey-3: #f8f9fa;
  --white-1: #fff;
  --box-shadow: 0px 0px 40px -20px rgba(0, 0, 0, 0.25);  
}
`;
