import { Typography } from '@mui/material';

interface ErrorPageProps {
  errorMsg: string;
}

export default function Error({ errorMsg }: ErrorPageProps) {
  return (
    <div className="w-full py-10 text-center">
      <Typography variant="h6">{errorMsg}</Typography>
    </div>
  );
}
