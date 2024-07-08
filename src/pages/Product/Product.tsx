import { Stack } from '@mui/material';
import { lazy } from 'react';
import DialogFormButton from '../../components/elements/buttons/DialogFormButton';
import SearchBar from '../../components/elements/searchBar/SearchBar';
import useDebounce from '../../hooks/useDebounce';
import { productDefaultValue } from './Product.constants';
import ProductTable from './Components/Table/ProductTable';
const ProductForm = lazy(() => import('./Components/Form/ProductForm'));

export default function Product() {
  const { handleDebouncedSearch, searchQuery } = useDebounce();
  return (
    <>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <SearchBar onSearch={handleDebouncedSearch} />
        <DialogFormButton dialogButton="Create category">
          <ProductForm defaultValues={productDefaultValue} action="CREATE" />
        </DialogFormButton>
      </Stack>

      <ProductTable searchQuery={searchQuery} />
    </>
  );
}
