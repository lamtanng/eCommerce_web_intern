import { Stack, Typography } from '@mui/material';
import PurchaseTable from '../../Purchase/components/Table';
import { purchaseFormColumns } from '../../Purchase/Purchase.constants';

export default function UserPurchase() {
  return (
    <>
      <Stack direction="column" spacing={4} sx={{ position: 'relative' }}>
        <Stack spacing={2} direction="row" justifyContent="space-between" alignItems="center">
          <Typography variant="h5" className="font-bold">
            User Purchase
          </Typography>
        </Stack>
        <PurchaseTable searchQuery={undefined} columnDefs={purchaseFormColumns} />
      </Stack>
    </>
  );
}
