import { Stack } from '@mui/material';
import CategoryTable from './components/table/CategoryTable';
import SearchBar from '../../components/elements/searchBar/SearchBar';
import DialogFormButton from '../../components/elements/buttons/DialogFormButton';
import useDebounce from '../../hooks/useDebounce';
import { categoryDefaults } from './Category.constants';
import CategoryForm from './components/form/CategoryForm';

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
