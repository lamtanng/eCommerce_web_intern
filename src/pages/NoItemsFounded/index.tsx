import { Typography } from '@mui/material';
import NoResultsImg from '../../assets/no-results.png';
export default function NoItemsFounded() {
  return (
    <div className="absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2  -translate-y-1/2 transform py-10 text-center">
      <img src={NoResultsImg} alt="No Results" className="w-20" />
      <Typography variant="h6" className="uppercase text-gray-600">
        No Results
      </Typography>
    </div>
  );
}
