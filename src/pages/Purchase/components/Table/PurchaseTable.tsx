import { Paper, Table, TableContainer } from '@mui/material';
import ReactTableBody from '../../../../components/elements/reactTable/ReactTableBody';
import ReactTableHeader from '../../../../components/elements/reactTable/ReactTableHeader';
import { PurchaseTableProps } from '../../Purchase.type';
import { usePurchaseTable } from '../../usePurchase';
import ColumnSelector from '../../../../components/elements/reactTable/ColumnsSelector';
import { PurchaseProps } from '../../../../types/purchase.type';

export default function PurchaseTable({ searchQuery = undefined }: PurchaseTableProps) {
  const { table } = usePurchaseTable({ searchQuery });
  return (
    <>
      <ColumnSelector<PurchaseProps> table={table} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <ReactTableHeader table={table} />
          <ReactTableBody table={table} />
        </Table>
      </TableContainer>
    </>
  );
}
