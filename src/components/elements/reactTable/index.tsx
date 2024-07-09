import { Paper, Table, TableContainer } from '@mui/material';
import ColumnSelector from './ColumnsSelector';
import ReactTableHeader from './ReactTableHeader';
import ReactTableBody from './ReactTableBody';
import ReactTablePagination from './ReactTablePagination';
import { RowData } from '@tanstack/react-table';
import { ReactTableProps } from './ReactTable.type';

export default function ReactTable<TData extends RowData>({ table }: ReactTableProps<TData>) {
  return (
    <>
      <ColumnSelector<TData> table={table} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <ReactTableHeader<TData> table={table} />
          <ReactTableBody<TData> table={table} />
        </Table>
      </TableContainer>
      <ReactTablePagination<TData> table={table} />
    </>
  );
}
