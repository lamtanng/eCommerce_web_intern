import { Paper, Table, TableContainer } from '@mui/material';
import ColumnSelector from '../../../../components/elements/reactTable/ColumnsSelector';
import ReactTableBody from '../../../../components/elements/reactTable/ReactTableBody';
import ReactTableHeader from '../../../../components/elements/reactTable/ReactTableHeader';
import { ProductProps } from '../../../../types/product.type';
import { ProductTableProps } from '../../Product.type';
import { useProductTable } from '../../useProduct';

export default function ProductTable({ searchQuery = undefined }: ProductTableProps) {
  const { table } = useProductTable({ searchQuery });
  return (
    <>
      <ColumnSelector<ProductProps> table={table} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <ReactTableHeader table={table} />
          <ReactTableBody table={table} />
        </Table>
      </TableContainer>
    </>
  );
}
