import { Paper, Table, TableContainer } from '@mui/material';
import ReactTableBody from '../../../../components/elements/reactTable/ReactTableBody';
import ReactTableHeader from '../../../../components/elements/reactTable/ReactTableHeader';
import { ProductTableProps } from '../../Product.type';
import { useProductTable } from '../../useProduct';

export default function ProductTable({ searchQuery = undefined }: ProductTableProps) {
  const { productTable } = useProductTable({ searchQuery });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <ReactTableHeader table={productTable} />
        <ReactTableBody table={productTable} />
      </Table>
    </TableContainer>
  );
}
