import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Stack } from '@mui/material';
import ResetButton from '../../../../components/elements/buttons/ResetButton';
import SubmitButton from '../../../../components/elements/buttons/SubmitButton';
import InputFileUpload from '../../../../components/elements/buttons/FileUploadButton';

const imageSchema = yup.object({
  picture: yup.mixed().required('Please upload an image'),
});

export default function ImageForm() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm({ resolver: yupResolver(imageSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
    
  };

  const onReset = () => reset();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form !gap-2">
      {/* <InputFileUpload control={control} name="picture" label="Picture" /> */}
      <Stack width="100%" direction="row" alignItems="center" justifyContent="space-between" spacing="150px">
        {/* <ResetButton onReset={onReset} isDirty={isDirty} /> */}
        <SubmitButton isSubmitting={isSubmitting} isDirty={isDirty} />
      </Stack>
    </form>
  );
}
