import { useEffect } from 'react';
import { fetchPurchaseList } from '../../../../redux/actions/purchase.action';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { purchaseSelector } from '../../../../redux/slices/purchase.slice';
import { Paper, Table, TableContainer } from '@mui/material';
import ReactTableHeader from '../../../../components/elements/reactTable/ReactTableHeader';
import ReactTableBody from '../../../../components/elements/reactTable/ReactTableBody';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { PurchaseProps } from '../../../../types/purchase.type';
import { purchaseFormColumns } from '../../Purchase.constants';

export default function PurchaseTable() {
  const dispatch = useAppDispatch();
  const { purchaseList } = useAppSelector(purchaseSelector);

  const purchaseTable = useReactTable<PurchaseProps>({
    data: purchaseList,
    columns: purchaseFormColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    dispatch(fetchPurchaseList());
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <ReactTableHeader table={purchaseTable} />
        <ReactTableBody table={purchaseTable} />
      </Table>
    </TableContainer>
  );
}
