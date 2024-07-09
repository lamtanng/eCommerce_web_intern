import { Button } from '@mui/material';
import { RowData } from '@tanstack/react-table';
import { usePagination } from '../../../hooks/usePagination';
import { ReactTableProps } from '../reactTable/ReactTable.type';

interface PreviousButtonProps<TData extends RowData> extends ReactTableProps<TData> {}

function PreviousButton<TData>({ table }: PreviousButtonProps<TData>) {
  const { currentPageIndex } = usePagination<TData>(table);
  const isPreviousPage = !(Number(currentPageIndex) > 1);
  console.log('currentPageIndex: ', currentPageIndex);

  return (
    <Button variant="outlined" onClick={() => table.previousPage()} disabled={isPreviousPage}>
      Previous
    </Button>
  );
}

function NextButton<TData>({ table }: PreviousButtonProps<TData>) {
  return (
    <Button
      variant="outlined"
      disabled={!table.getCanNextPage()}
      onClick={() => {
        table.nextPage();
      }}
    >
      Next
    </Button>
  );
}

export { NextButton, PreviousButton };
