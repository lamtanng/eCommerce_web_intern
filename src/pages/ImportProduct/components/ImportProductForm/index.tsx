import { Stack } from '@mui/material';
import ControlledInput from '../../../../components/elements/controlledComponents/ControlledInput';
import ControlledSelector from '../../../../components/elements/controlledComponents/ControlledSelector';
import SubmitButton from '../../../../components/elements/buttons/SubmitButton';
import { useProductForm } from '../../../Product/hooks';
import { ProductFormProps } from '../../../Product/Product.type';
import { ProductFormSchema } from '../../../../types/product.type';
import ResetButton from '../../../../components/elements/buttons/ResetButton';

export default function ImportProductForm({ defaultValues, action }: ProductFormProps<ProductFormSchema>) {
  const { handleSubmit, onSubmit, control, isSubmitting, cateSelectData, isDirty, onReset } = useProductForm({
    defaultValues,
    action,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form !gap-2">
      {action !== 'CREATE' && <ControlledInput name="id" control={control} label="ID" disabled={true} />}
      <ControlledInput name="name" control={control} label="Name" isRequired />
      <ControlledInput name="basePrice" control={control} label="Price" isRequired />
      <ControlledSelector
        name="categories"
        control={control}
        data={cateSelectData}
        label="Category"
        multiple={true}
        disabled={action === 'UPDATE' ? true : false}
      />
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
