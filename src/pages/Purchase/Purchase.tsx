import { Stack } from '@mui/material';
import useDebounce from '../../hooks/useDebounce';
import SearchBar from '../../components/elements/searchBar/SearchBar';
import DialogFormButton from '../../components/elements/buttons/DialogFormButton';
import PurchaseTable from './components/Table/PurchaseTable';
import PurchaseForm from './components/Form/PurchaseForm';
import { purchaseDefault } from './Purchase.constants';

export default function Product() {
  const { handleDebouncedSearch, searchQuery } = useDebounce(800);
  return (
    <>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <SearchBar onSearch={handleDebouncedSearch} />
        <DialogFormButton dialogButton="Create purchase" variant="contained">
          <PurchaseForm defaultValues={purchaseDefault} action="CREATE" />
        </DialogFormButton>
      </Stack>
      <PurchaseTable />
    </>
  );
}
