import { Typography } from '@mui/material';

interface ErrorPageProps {
  errorMsg: string;
}

export default function Error({ errorMsg }: ErrorPageProps) {
  return (
    <>
      <Typography variant="h1">{errorMsg}</Typography>
    </>
  );
}
