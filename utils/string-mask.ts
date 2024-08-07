/**
 * This function can be more elegant and problably more performatic, it's a work in progress and can be improved.
 * @param value value to be formatted (e.g. "01011999")
 * @param mask mask to be applied to the value (e.g. "##/##/####")
 * @returns formatted string (e.g. "01/01/1999")
 */
export const parsePhoneNumber = (
  value: string,
  mask: string = "(##) #####-####"
): string => {
  const digits = value.replace(/\D/g, "");
  let formattedString = "";
  let digitIndex = 0;

  for (let i = 0; i < mask.length; i++) {
    if (mask[i] === "#") {
      if (digitIndex < digits.length) {
        formattedString += digits[digitIndex];
        digitIndex++;
      } else {
        break;
      }
    } else {
      formattedString += mask[i];
    }
  }

  return formattedString;
};
