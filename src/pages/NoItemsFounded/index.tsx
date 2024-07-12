import { Typography } from '@mui/material';

export default function NoItemsFounded() {
  return (
    <div className="mx-auto w-full py-10 text-center">
      <Typography variant="h6" className="uppercase text-gray-600">
        No founded
      </Typography>
    </div>
  );
}
