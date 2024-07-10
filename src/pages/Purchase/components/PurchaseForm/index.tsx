import { Stack } from '@mui/material';
import { memo } from 'react';
import ResetButton from '../../../../components/elements/buttons/ResetButton';
import { ControlledSelector } from '../../../../components/elements/controlledComponents/ControlledSelector';
import { PurchaseFormSchema } from '../../../../types/purchase.type';
import { PurchaseFormProps } from '../../Purchase.type';
import { usePurchaseForm } from '../../hooks';
import ControlledInput from '../../../../components/elements/controlledComponents/ControlledInput';
import SubmitButton from '../../../../components/elements/buttons/SubmitButton';

function PurchaseForm({ defaultValues, action }: PurchaseFormProps<PurchaseFormSchema>) {
  const { handleSubmit, onSubmit, control, isSubmitting, isDirty, onReset, productData } = usePurchaseForm({
    defaultValues,
    action,
  });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form !gap-2">
      {action === 'UPDATE' && <ControlledInput name="id" control={control} label="ID" disabled={true} />}
      <ControlledSelector
        name="productId"
        control={control}
        data={productData}
        isRequired
        label="Product"
        multiple={false}
      />
      <ControlledInput name="amount" control={control} label="Amount" isRequired />
      <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between" spacing="150px">
        <ResetButton onReset={onReset} isDirty={isDirty} />
        <SubmitButton isSubmitting={isSubmitting} isDirty={isDirty} />
      </Stack>
    </form>
  );
}

export default memo(PurchaseForm);
