import { Box, Stack } from '@mui/material';
import { lazy, Suspense } from 'react';
import DialogFormButton from '../../components/elements/buttons/DialogFormButton';
import SearchBar from '../../components/elements/SearchBar';
import useDebounce from '../../hooks/useDebounce';
import PurchaseTable from './components/Table';
import { purchaseDefault } from './Purchase.constants';
const PurchaseForm = lazy(() => import('./components/PurchaseForm'));

export default function Product() {
  const { handleDebouncedSearch, searchQuery } = useDebounce();
  return (
    <Box sx={{ position: 'relative' }}>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <SearchBar onSearch={handleDebouncedSearch} />
        <DialogFormButton dialogButton="Create purchase" variant="contained">
          <Suspense>
            <PurchaseForm defaultValues={purchaseDefault} action="CREATE" />
          </Suspense>
        </DialogFormButton>
      </Stack>
      <PurchaseTable searchQuery={searchQuery} />
    </Box>
  );
}
