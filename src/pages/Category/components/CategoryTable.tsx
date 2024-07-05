import { Paper, Stack, Table, TableContainer } from '@mui/material';
import CreateCategoryButton from '../../../components/elements/buttons/DialogFormButton';
import SearchBar from '../../../components/elements/searchBar/SearchBar';
import { useCategoryTable } from '../useCategoryTable';
import CategoryForm from './CategoryForm';
import ReactTableHeader from '../../../components/elements/reactTable/ReactTableHeader';
import ReactTableBody from '../../../components/elements/reactTable/ReactTableBody';

function CategoryTable() {
  const { categoryTable, handleSearch, handleCreateCategory } = useCategoryTable();
  return (
    <>
      <Stack spacing={2} direction='row' justifyContent='flex-end'>
        <SearchBar onSearch={handleSearch} />
        <CreateCategoryButton dialogButton='Create category'>
          <CategoryForm handleSubmit={handleCreateCategory} />
        </CreateCategoryButton>
      </Stack>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <ReactTableHeader table={categoryTable} />
          <ReactTableBody table={categoryTable} />
        </Table>
      </TableContainer>
    </>
  );
}

export default CategoryTable;
