import { Stack } from '@mui/material';
import ResetButton from '../../../../components/elements/buttons/ResetButton';
import { PurchaseReviewFormSchema } from '../../../../types/purchase.type';
import { useReviewForm } from '../../hooks';
import { PurchaseReviewFormProps } from '../../Purchase.type';
import ControlledInput from '../../../../components/elements/controlledComponents/ControlledInput';
import { ControlledStarRating } from '../../../../components/elements/controlledComponents/ControlledStarRating';
import SubmitButton from '../../../../components/elements/buttons/SubmitButton';

export function ReviewForm({ defaultValues }: PurchaseReviewFormProps<PurchaseReviewFormSchema>) {
  const { handleSubmit, onSubmit, control, isSubmitting, isDirty, handleResetForm } = useReviewForm({ defaultValues });
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form !gap-2">
      <ControlledStarRating name="reviewNote" control={control} label="Rating" />
      <ControlledInput name="reviewComment" control={control} label="Comment" multiline />

      <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between" spacing="150px">
        <ResetButton onReset={handleResetForm} isDirty={isDirty} />
        <SubmitButton isSubmitting={isSubmitting} isDirty={isDirty} />
      </Stack>
    </form>
  );
}
