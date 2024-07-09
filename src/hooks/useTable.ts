import { ColumnDef, getCoreRowModel, RowData, useReactTable, VisibilityState } from '@tanstack/react-table';
import { useMemo, useState } from 'react';
import { VisibleColumnStorageKey } from '../types/visibleColumnStorageKey.type';

interface UseTableProps<TData extends RowData> {
  columnDefs: ColumnDef<TData, any>[];
  data: TData[];
  localStorageKey: VisibleColumnStorageKey;
}

export function useTable<TData extends RowData>({ columnDefs, data, localStorageKey }: UseTableProps<TData>) {
  const visibleColumnsDefaults: VisibilityState = getVisibleColumns(localStorageKey);
  const [columnVisibility, setColumnVisibility] = useState(visibleColumnsDefaults);
  const [columns] = useState<typeof columnDefs>(() => [...columnDefs]);
  const table = useReactTable<TData>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      columnVisibility,
    },
    onColumnVisibilityChange: (updaterOrValue) => {
      setColumnVisibility((prev) => {
        const newColumnVisibility = typeof updaterOrValue === 'function' ? updaterOrValue(prev) : updaterOrValue;
        localStorage.setItem(localStorageKey, JSON.stringify(newColumnVisibility));
        return newColumnVisibility;
      });
    },
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  });

  useMemo(() => table, []);

  return { table };
}

const getVisibleColumns = (localStorageKey: VisibleColumnStorageKey) =>
  localStorage.getItem(localStorageKey) != 'undefined' ? JSON.parse(String(localStorage.getItem(localStorageKey))) : {};
