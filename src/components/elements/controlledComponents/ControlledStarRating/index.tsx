import { Controller, FieldValues } from 'react-hook-form';
import { Rating } from 'react-simple-star-rating';
import { ControlledInputProps } from '../../../../types/input.type';

export function ControlledStarRating<FormValues extends FieldValues>({
  name,
  control,
}: ControlledInputProps<FormValues>) {
  return (
    <Controller
      key={name}
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Rating onClick={onChange} initialValue={value} transition allowTitleTag allowHover />
      )}
    />
  );
}
