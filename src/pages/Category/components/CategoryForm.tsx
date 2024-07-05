import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';
import ResetButton from '../../../components/elements/buttons/ResetButton';
import SubmitButton from '../../../components/elements/buttons/SubmitButton';
import FormContextInput from '../../../components/elements/inputs/FormContextInput';
import { categorySchema } from '../Category.constants';
import { CategoryFormProps, CategorySchemaProps } from '../Category.types';



export default function CategoryForm({ handleSubmit, defaultValues }: CategoryFormProps) {
  const form = useForm<CategorySchemaProps>({
    resolver: yupResolver(categorySchema),
    defaultValues,
  });

  const handleResetFields = () => {
    form.reset(defaultValues);
  };
  return (
    <>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className='w-full flex flex-col justify-between items-start gap-8'
        >
          <FormContextInput name='name' label='Category Name' type='text' />
          <Stack direction='row' spacing={2}>
            <ResetButton onReset={handleResetFields} isDirty={form.formState.isDirty} />
            <SubmitButton
              isSubmitting={form.formState.isSubmitting}
              isDirty={form.formState.isDirty}
            />
          </Stack>
        </form>
      </FormProvider>
    </>
  );
}
