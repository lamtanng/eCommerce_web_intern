import { Table } from '@tanstack/react-table';

export const usePagination = <TData>(table: Table<TData>) => {
  const getSortedOrder = (desc: boolean, fieldName: string) => `${desc ? '-' : ''}` + fieldName;
  let currentPageIndex = (table.getState().pagination.pageIndex + 1).toString();
  let pageSize = table.getState().pagination.pageSize.toString();
  let pageTotal = table.getPageCount();
  const resetPageIndex = (pageIndex: number = 0) => {
    table.setPageIndex(() => pageIndex);
  };

  return { currentPageIndex, pageSize, pageTotal, getSortedOrder, resetPageIndex };
};
