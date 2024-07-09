import { Paper, Table, TableContainer } from '@mui/material';
import { RowData } from '@tanstack/react-table';
import ColumnSelector from './ColumnsSelector';
import { ReactTableProps } from './ReactTable.type';
import ReactTableBody from './ReactTableBody';
import ReactTableHeader from './ReactTableHeader';
import ReactTablePagination from './ReactTablePagination';

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
