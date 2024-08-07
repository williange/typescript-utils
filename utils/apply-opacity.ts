/**
 * I've created this to help me with a project where we applied opacity to background colors using `styled-components`. But it should work with any css-in-js library.
 * @param color color to be applyed the opacity
 * @param opacity opacity to be applied to the color
 * @returns value with the opacity applied
 */
export const applyOpacity = (color: string, opacity: number): string => {
  if (color.startsWith("#")) {
    const hex = color.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
  }
  return color;
};
