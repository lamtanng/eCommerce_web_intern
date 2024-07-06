import { Stack } from '@mui/material';
import { FormProvider } from 'react-hook-form';
import ResetButton from '../../../components/elements/buttons/ResetButton';
import SubmitButton from '../../../components/elements/buttons/SubmitButton';
import FormContextInput from '../../../components/elements/controlledComponents/FormContextInput';
import { CategoryFormProps } from '../Category.types';
import { useCategoryForm } from '../useCategoryTable';

export default function CategoryForm({ handleSubmit, defaultValues }: CategoryFormProps) {
  const { form, handleResetFields } = useCategoryForm({ defaultValues });
  console.log('form');
  return (
    <>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="form">
          <FormContextInput name="name" label="Category Name" type="text" />
          <Stack direction="row" spacing={2}>
            <ResetButton onReset={handleResetFields} isDirty={form.formState.isDirty} />
            <SubmitButton isSubmitting={form.formState.isSubmitting} isDirty={form.formState.isDirty} />
          </Stack>
        </form>
      </FormProvider>
    </>
  );
}
