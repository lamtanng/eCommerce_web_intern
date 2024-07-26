import { Stack } from '@mui/material';
import { Row } from '@tanstack/react-table';
import ResetButton from '../../../../components/elements/buttons/ResetButton';
import SubmitButton from '../../../../components/elements/buttons/SubmitButton';
import ControlledInput from '../../../../components/elements/controlledComponents/ControlledInput';
import ControlledSelector from '../../../../components/elements/controlledComponents/ControlledSelector';
import { ProductProps } from '../../../../types/product.type';
import { useUpdateForm } from './useUpdateForm';

export default function UpdateForm({ row }: { row: Row<ProductProps> }) {
  const { handleSubmit, control, onSubmit, cateSelectData, onReset, isSubmitting, isDirty } = useUpdateForm({
    row,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form !gap-2">
      {<ControlledInput name="id" control={control} label="Order" disabled={true} />}
      <ControlledInput name="name" control={control} label="Name" isRequired />
      <ControlledInput name="basePrice" control={control} label="Price" isRequired />
      <ControlledSelector name="categories" control={control} data={cateSelectData} label="Category" multiple={true} />
      <ControlledInput name="discountPercentage" control={control} label="Discount" />
      <ControlledInput name="stock" control={control} label="Stock" />
      <ControlledInput name="description" control={control} label="Description" multiline />
      <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between" spacing="150px">
        <ResetButton onReset={onReset} isDirty={isDirty} />
        <SubmitButton isSubmitting={isSubmitting} text="Save" />
      </Stack>
    </form>
  );
}
