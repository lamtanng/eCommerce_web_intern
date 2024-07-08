import { Stack } from '@mui/material';
import { lazy, Suspense } from 'react';
import DialogFormButton from '../../components/elements/buttons/DialogFormButton';
import SearchBar from '../../components/elements/searchBar/SearchBar';
import useDebounce from '../../hooks/useDebounce';
import { categoryDefaults } from './Category.constants';
const CategoryTable = lazy(() => import('./components/table/CategoryTable'));
const CategoryForm = lazy(() => import('./components/form/CategoryForm'));

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
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryTable searchQuery={searchQuery} />
      </Suspense>
    </>
  );
}
