import { HTMLInputTypeAttribute } from 'react';
import { Control, FieldPath, FieldValues, Path } from 'react-hook-form';

export interface InputProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
}

export interface ControlledInputProps<FormValues extends FieldValues> {
  name: FieldPath<FormValues>;
  control: Control<FormValues>;
  label: string;
  type?: HTMLInputTypeAttribute;
  defaultValue?: number | boolean | null | undefined;
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
  isRequired?: boolean;
}
