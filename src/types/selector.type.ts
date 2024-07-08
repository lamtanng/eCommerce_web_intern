import { FieldValues } from 'react-hook-form';
import { ControlledInputProps } from './input.type';

export interface SelectData {
  value: string;
  name: string;
}

export interface ControlledSelectorProps<FormValues extends FieldValues> extends ControlledInputProps<FormValues> {
  data: SelectData[];
  multiple?: boolean;
}
