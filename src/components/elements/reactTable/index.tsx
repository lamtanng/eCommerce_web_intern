import { Paper, Stack, Table, TableContainer } from '@mui/material';
import { RowData } from '@tanstack/react-table';
import getVisibleDataTable from '../../../ultils/getVisibleDataTable';
import ExportButton from '../buttons/ExportButton';
import ColumnSelector from './ColumnsSelector';
import { ReactTableProps } from './ReactTable.type';
import ReactTableBody from './ReactTableBody';
import ReactTableHeader from './ReactTableHeader';
import ReactTablePagination from './ReactTablePagination';

export default function ReactTable<TData extends RowData>({ table, fileName, filterColumns }: ReactTableProps<TData>) {
  return (
    <Stack direction="column" spacing={3} className="mt-6">
      <Stack direction="column" spacing={3}>
        <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center">
          <ColumnSelector<TData> table={table} />
          <div className="flex flex-row items-center gap-2">
            <ExportButton<TData> data={getVisibleDataTable({ table })} fileName={fileName} />
          </div>
        </Stack>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} className="transition-all duration-300 ease-in-out">
            <ReactTableHeader<TData> table={table} filterColumns={filterColumns} />
            <ReactTableBody<TData> table={table} />
          </Table>
        </TableContainer>
      </Stack>
      <ReactTablePagination<TData> table={table} />
    </Stack>
  );
}
