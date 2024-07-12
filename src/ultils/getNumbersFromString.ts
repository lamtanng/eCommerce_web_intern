import { replace } from 'lodash';

const removeTextRegex = /\D/g;
export function getNumbersFromString(str: string): number {
  const numbersOnly = replace(str, removeTextRegex, '');
  return Number(numbersOnly);
}
