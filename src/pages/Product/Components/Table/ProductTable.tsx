import { Paper, Table, TableContainer } from '@mui/material';
import ReactTableBody from '../../../../components/elements/reactTable/ReactTableBody';
import ReactTableHeader from '../../../../components/elements/reactTable/ReactTableHeader';
import { useProductTable } from '../../useProduct';
import { ProductTableProps } from '../../Product.type';

export default function ProductTable({ searchQuery = undefined }: ProductTableProps) {
  const { productTable } = useProductTable({ searchQuery });
  console.log('productTable');

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <ReactTableHeader table={productTable} />
        <ReactTableBody table={productTable} />
      </Table>
    </TableContainer>
  );
}
