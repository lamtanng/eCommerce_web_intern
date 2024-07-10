import LoadingButton from '@mui/lab/LoadingButton';
import ButtonProps from '../../../../types/button.type';

interface ResetButtonProps extends ButtonProps {
  onReset?: () => void;
}

export default function ResetButton({ text = 'Reset', variant = 'outlined', onReset, isDirty }: ResetButtonProps) {
  return (
    <LoadingButton
      variant={variant}
      type="submit"
      size="large"
      fullWidth
      disabled={isDirty ? false : true}
      onClick={onReset}
    >
      <span>{text}</span>
    </LoadingButton>
  );
}
