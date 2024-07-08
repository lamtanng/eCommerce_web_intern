import { Paper, Table, TableContainer } from '@mui/material';
import ReactTableBody from '../../../../components/elements/reactTable/ReactTableBody';
import ReactTableHeader from '../../../../components/elements/reactTable/ReactTableHeader';
import { CategoryTableProps } from '../../Category.types';
import { useCategoryTable } from '../../useCategory';

function CategoryTable({ searchQuery = undefined }: CategoryTableProps) {
  const { categoryTable } = useCategoryTable({ searchQuery });
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <ReactTableHeader table={categoryTable} />
          <ReactTableBody table={categoryTable} />
      </Table>
      </TableContainer>
    </>
  );
}

export default CategoryTable;
