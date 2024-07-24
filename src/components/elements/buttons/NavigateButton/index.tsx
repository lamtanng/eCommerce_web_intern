import { Button } from '@mui/material';
import { RowData } from '@tanstack/react-table';
import { usePagination } from '../../../../hooks/usePagination';
import { ReactTableProps } from '../../reactTable/ReactTable.type';

interface PreviousButtonProps<TData extends RowData> extends ReactTableProps<TData> {
  disabled?: boolean;
}

function PreviousButton<TData>({ table }: PreviousButtonProps<TData>) {
  const { currentPageIndex } = usePagination<TData>(table);
  const isPreviousPage = !(Number(currentPageIndex) > 1);

  return (
    <Button variant="outlined" onClick={() => table.previousPage()} disabled={isPreviousPage}>
      Previous
    </Button>
  );
}

function NextButton<TData>({ table, disabled }: PreviousButtonProps<TData>) {
  return (
    <Button
      variant="outlined"
      disabled={disabled}
      onClick={() => {
        table.nextPage();
      }}
    >
      Next
    </Button>
  );
}

export { NextButton, PreviousButton };

