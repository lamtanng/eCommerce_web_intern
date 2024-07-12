import { Stack } from '@mui/material';
import { lazy } from 'react';
import SearchBar from '../../components/elements/SearchBar';
import useDebounce from '../../hooks/useDebounce';
import ProductTable from './Components/ProductTable';
import { productDefaultValue } from './Product.constants';
import DialogFormButton from '../../components/elements/buttons/DialogFormButton';
const ProductForm = lazy(() => import('./Components/ProductForm'));

export default function Product() {
  const { handleDebouncedSearch, searchQuery } = useDebounce();
  return (
    <>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <SearchBar onSearch={handleDebouncedSearch} />
        <DialogFormButton variant="contained" dialogButton="Create category">
          <ProductForm defaultValues={productDefaultValue} action="CREATE" />
        </DialogFormButton>
      </Stack>

      <ProductTable searchQuery={searchQuery} />
    </>
  );
}
