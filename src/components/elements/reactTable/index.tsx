import { Paper, Stack, Table, TableContainer } from '@mui/material';
import { RowData } from '@tanstack/react-table';
import ColumnSelector from './ColumnsSelector';
import { ReactTableProps } from './ReactTable.type';
import ReactTableBody from './ReactTableBody';
import ReactTableHeader from './ReactTableHeader';
import ReactTablePagination from './ReactTablePagination';
import ExportButton from '../buttons/ExportButton';
import getVisibleDataTable from '../../../ultils/getVisibleDataTable';

export default function ReactTable<TData extends RowData>({ table, fileName }: ReactTableProps<TData>) {
  return (
    <Stack direction="column" spacing={3} className="mt-6">
      <Stack direction="column" spacing={3}>
        <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center">
          <ColumnSelector<TData> table={table} />
          <ExportButton<TData> data={getVisibleDataTable({ table })} fileName={fileName} />
        </Stack>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <ReactTableHeader<TData> table={table} />
            <ReactTableBody<TData> table={table} />
          </Table>
        </TableContainer>
      </Stack>
      {table.getRowModel().rows.length > 0 && <ReactTablePagination<TData> table={table} />}
    </Stack>
  );
}
