import { Stack } from '@mui/material';
import { RowData } from '@tanstack/react-table';
import { ReactTableProps } from '../ReactTable.type';
import { NextButton, PreviousButton } from '../../buttons/NavigateButton';

interface ReactTablePaginationProps<TData extends RowData> extends ReactTableProps<TData> {}

const ReactTablePagination = <TData extends RowData>({ table }: ReactTablePaginationProps<TData>) => {
  if (table.getRowCount() === 0) return null;
  else
    return (
      <Stack direction="row" spacing={2} alignSelf="end">
        <PreviousButton table={table} />
        <NextButton table={table} disabled={table.getState().pagination.pageSize > table.getRowCount()} />
      </Stack>
    );
};

export default ReactTablePagination as typeof ReactTablePagination;
