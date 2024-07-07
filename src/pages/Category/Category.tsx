import { Stack } from '@mui/material';
import CategoryTable from './components/CategoryTable';
import SearchBar from '../../components/elements/searchBar/SearchBar';
import DialogFormButton from '../../components/elements/buttons/DialogFormButton';
import CategoryForm from './components/CategoryForm';
import useDebounce from '../../hooks/useDebounce';

export default function Category() {
  const { handleDebouncedSearch, searchQuery } = useDebounce();

  return (
    <>
      <Stack spacing={2} direction="row" justifyContent="flex-end">
        <SearchBar onSearch={handleDebouncedSearch} />
        <DialogFormButton dialogButton="Create category">
          <CategoryForm action="CREATE" />
        </DialogFormButton>
      </Stack>
      <CategoryTable searchQuery={searchQuery} />
    </>
  );
}
