import { css } from "styled-components";

const sizes = {
  bigdesktop: 1330,
  desktop: 992,
  tablet: 768,
  phone: 576,
  mini: 200
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default media