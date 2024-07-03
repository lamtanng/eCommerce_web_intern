import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LoadingButton from '@mui/lab/LoadingButton';
import { useFormContext } from 'react-hook-form';
import ButtonProps from '../../../types/button.type';

export default function FormContextButton({ text, variant, type }: ButtonProps) {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <LoadingButton
      variant={variant}
      type={type}
      size='large'
      fullWidth
      className='group'
      loading={isSubmitting}
      loadingPosition='start'
    >
      <ArrowForwardIcon className='mr-1 group-hover:block hidden transition-all duration-500 ease-in-out' />
      <span>{text}</span>
    </LoadingButton>
  );
}
