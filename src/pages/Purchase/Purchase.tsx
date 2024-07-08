import { Stack } from '@mui/material';
import DialogFormButton from '../../components/elements/buttons/DialogFormButton';
import SearchBar from '../../components/elements/searchBar/SearchBar';
import useDebounce from '../../hooks/useDebounce';
import PurchaseForm from './components/form/PurchaseForm';
import PurchaseTable from './components/table/PurchaseTable';
import { purchaseDefault } from './Purchase.constants';

export default function Product() {
  const { handleDebouncedSearch, searchQuery } = useDebounce();
  return (
    <>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <SearchBar onSearch={handleDebouncedSearch} />
        <DialogFormButton dialogButton="Create purchase" variant="contained">
          <PurchaseForm defaultValues={purchaseDefault} action="CREATE" />
        </DialogFormButton>
      </Stack>
      <PurchaseTable searchQuery={searchQuery} />
    </>
  );
}
