import { Paper, Table, TableContainer } from '@mui/material';
import ReactTableBody from '../../../../components/elements/reactTable/ReactTableBody';
import ReactTableHeader from '../../../../components/elements/reactTable/ReactTableHeader';
import { PurchaseTableProps } from '../../Purchase.type';
import { usePurchaseTable } from '../../usePurchase';

export default function PurchaseTable({ searchQuery = undefined }: PurchaseTableProps) {
  const { purchaseTable } = usePurchaseTable({ searchQuery });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <ReactTableHeader table={purchaseTable} />
        <ReactTableBody table={purchaseTable} />
      </Table>
    </TableContainer>
  );
}
