import { HTMLInputTypeAttribute } from 'react';
import { FieldValues, Path } from 'react-hook-form';

export default interface InputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}
