import LoadingButton from '@mui/lab/LoadingButton';
import ButtonProps from '../../../../types/button.type';

interface SubmitButtonProps extends ButtonProps {
  isSubmitting?: boolean;
}

export default function SubmitButton({
  text = 'Finish',
  variant = 'contained',
  isSubmitting,
  isDirty = true,
}: SubmitButtonProps) {
  return (
    <LoadingButton
      variant={variant}
      type="submit"
      size="large"
      fullWidth
      className="group"
      loading={isSubmitting}
      disabled={isDirty ? false : true}
      // loadingPosition='start'
    >
      <span>{text}</span>
    </LoadingButton>
  );
}
