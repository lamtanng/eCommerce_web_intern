import { Stack } from '@mui/material';
import { lazy } from 'react';
import SearchBar from '../../components/elements/SearchBar';
import useDebounce from '../../hooks/useDebounce';
import { categoryDefaults } from './Category.constants';
import DialogFormButton from '../../components/elements/buttons/DialogFormButton';
const CategoryTable = lazy(() => import('./components/CategoryTable'));
const CategoryForm = lazy(() => import('./components/CategoryForm'));

export default function Category() {
  const { handleDebouncedSearch, searchQuery } = useDebounce();

  return (
    <>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <SearchBar onSearch={handleDebouncedSearch} />
        <DialogFormButton dialogButton="Create category">
          <CategoryForm action="CREATE" defaultValues={categoryDefaults} />
        </DialogFormButton>
      </Stack>
      <CategoryTable searchQuery={searchQuery} />
    </>
  );
}
