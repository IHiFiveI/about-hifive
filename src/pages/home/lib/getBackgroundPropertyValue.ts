export const getBackgroundPropertyValue = () => {
  const style = window.getComputedStyle(document.body);

  return style.getPropertyValue('--background');
};
