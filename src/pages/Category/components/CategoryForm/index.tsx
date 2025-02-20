import { Stack } from '@mui/material';
import ResetButton from '../../../../components/elements/buttons/ResetButton';
import { CategoryFormProps, CategorySchema } from '../../Category.types';
import { useCategoryForm } from '../../hooks';
import ControlledInput from '../../../../components/elements/controlledComponents/ControlledInput';
import SubmitButton from '../../../../components/elements/buttons/SubmitButton';

export default function CategoryForm({ action, defaultValues }: CategoryFormProps<CategorySchema>) {
  const { handleSubmit, handleResetForm, control, isSubmitting, isDirty, onSubmit } = useCategoryForm({
    action,
    defaultValues,
  });
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <ControlledInput name="name" label="Category Name" control={control} isRequired />
        <Stack direction="row" spacing={2}>
          <ResetButton onReset={handleResetForm} isDirty={isDirty} />
          <SubmitButton isSubmitting={isSubmitting} isDirty={isDirty} />
        </Stack>
      </form>
    </>
  );
}
