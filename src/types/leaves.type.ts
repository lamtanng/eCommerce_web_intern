// spread nested object keys into a flat string union
type Leaves<T> = T extends object
  ? {
      [K in keyof T]: `${Exclude<K, symbol>}${Leaves<T[K]> extends never ? '' : `.${Leaves<T[K]>}`}`;
    }[keyof T]
  : never;

export type { Leaves };
