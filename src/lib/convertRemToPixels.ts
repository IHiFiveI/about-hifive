export const convertRemToPixels = (rem: number) =>
  rem * Number.parseFloat(window.getComputedStyle(document.body).fontSize);
