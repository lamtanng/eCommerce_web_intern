import { Stack } from '@mui/material';
import { RowData } from '@tanstack/react-table';
import { NextButton, PreviousButton } from '../buttons/NavigateButton';
import { ReactTableProps } from './ReactTable.type';

interface ReactTablePaginationProps<TData extends RowData> extends ReactTableProps<TData> {}

const ReactTablePagination = <TData extends RowData>({ table }: ReactTablePaginationProps<TData>) => {
  return (
    <Stack direction="row" spacing={2}>
      <PreviousButton table={table} />
      <NextButton table={table} />
    </Stack>
  );
};

export default ReactTablePagination as typeof ReactTablePagination;
