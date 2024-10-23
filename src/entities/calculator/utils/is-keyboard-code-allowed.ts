export const isKeyboardInputAllowed = (code: string) => {
  return code.startsWith('Digit') || code === 'Backspace' || code === 'Period';
};
