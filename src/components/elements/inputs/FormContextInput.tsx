import { FieldValues, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';
import InputProps from '../../../types/input.type';

export default function FormContextInput<T extends FieldValues>({
  name,
  label,
  type = 'text',
  placeholder,
}: InputProps<T>) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <TextField
      {...register(name)}
      helperText={errors[name]?.message ?? ''}
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
