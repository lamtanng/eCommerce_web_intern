import { Stack } from '@mui/material';
import { memo } from 'react';
import ResetButton from '../../../../components/elements/buttons/ResetButton';
import SubmitButton from '../../../../components/elements/buttons/SubmitButton';
import ControlledInput from '../../../../components/elements/controlledComponents/ControlledInput';
import { ProductFormProps } from '../../Product.type';
import { useProductForm } from '../../useProduct';
import { ControlledSelector } from '../../../../components/elements/controlledComponents/ControlledSelector/ControlledSelector';
import { ProductFormSchema } from '../../../../types/product.type';

function ProductForm({ defaultValues, action }: ProductFormProps<ProductFormSchema>) {
  const { handleSubmit, onSubmit, control, isSubmitting, cateSelectData, isDirty, onReset } = useProductForm({
    defaultValues,
    action,
  });

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="form !gap-2">
        {action === 'UPDATE' && <ControlledInput name="id" control={control} label="ID" disabled={true} />}
        <ControlledInput name="name" control={control} label="Name" />
        <ControlledInput name="basePrice" control={control} label="Price" />
        <ControlledSelector
          name="categories"
          control={control}
          data={cateSelectData}
          label="Category"
          multiple={true}
        />
        <ControlledInput name="discountPercentage" control={control} label="Discount" />
        <ControlledInput name="stock" control={control} label="Stock" />
        <ControlledInput name="description" control={control} label="Description" multiline />
        <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between" spacing="150px">
          <ResetButton onReset={onReset} isDirty={isDirty} />
          <SubmitButton isSubmitting={isSubmitting} isDirty={isDirty} />
        </Stack>
      </form>
  );
}

export default memo(ProductForm);
