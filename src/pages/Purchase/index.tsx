import { Box } from '@mui/material';
import useDebounce from '../../hooks/useDebounce';
import PurchaseTable from './components/Table';
import { purchaseFormColumns } from './Purchase.constants';

export default function Purchase() {
  const { searchQuery } = useDebounce();
  return (
    <Box sx={{ position: 'relative' }}>
      <PurchaseTable searchQuery={searchQuery} columnDefs={purchaseFormColumns} />
    </Box>
  );
}
