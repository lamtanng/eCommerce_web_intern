import { Stack } from '@mui/material';
import { RowData } from '@tanstack/react-table';
import { ReactTableProps } from '../ReactTable.type';
import { NextButton, PreviousButton } from '../../buttons/NavigateButton';

interface ReactTablePaginationProps<TData extends RowData> extends ReactTableProps<TData> {}

const ReactTablePagination = <TData extends RowData>({ table }: ReactTablePaginationProps<TData>) => {
  return (
    <Stack direction="row" spacing={2} alignSelf='end'>
      <PreviousButton table={table} />
      <NextButton table={table} />
    </Stack>
  );
};

export default ReactTablePagination as typeof ReactTablePagination;
