import { Paper, Table, TableContainer } from '@mui/material';
import ColumnSelector from '../../../../components/elements/reactTable/ColumnsSelector';
import ReactTableBody from '../../../../components/elements/reactTable/ReactTableBody';
import ReactTableHeader from '../../../../components/elements/reactTable/ReactTableHeader';
import { CategoryTableProps } from '../../Category.types';
import { useCategoryTable } from '../../useCategory';
import { CategoryProps } from '../../../../types/category.type';

function CategoryTable({ searchQuery = undefined }: CategoryTableProps) {
  const { table } = useCategoryTable({ searchQuery });

  return (
    <>
      <ColumnSelector<CategoryProps> table={table} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <ReactTableHeader table={table} />
          <ReactTableBody table={table} />
        </Table>
      </TableContainer>
    </>
  );
}

export default CategoryTable;
