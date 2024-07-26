import currency from 'currency.js';

export const formatToUSD = (value: any) => {
    return currency(+value, { separator: '.', errorOnInvalid: true, pattern: `#` }).dollars();
  };