import { FieldValues, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import InputProps from '../../../types/input.type';
import { ReactNode } from 'react';

export default function FormContextInput<T extends FieldValues>({
  name,
  label,
  type = 'text',
  placeholder,
}: InputProps<T>) {
  const {
    register,
    formState: { errors, defaultValues },
  } = useFormContext();

  return (
    <TextField
      {...register(name)}
      defaultValue={defaultValues}
      helperText={(errors[name]?.message ?? '') as ReactNode}
      size='medium'
      error={errors[name]?.message ? true : false}
      fullWidth
      label={label}
      variant='outlined'
      type={type}
      placeholder={placeholder}
    />
  );
}
