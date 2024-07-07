import { TableCell, TableHead, TableRow } from '@mui/material';
import { flexRender, RowData } from '@tanstack/react-table';
import { memo } from 'react';
import { ReactTableProps } from './ReactTable.type';

interface ReactTableHeaderProps<TData extends RowData> extends ReactTableProps<TData> {}

function ReactTableHeader<TData extends RowData>({ table }: ReactTableHeaderProps<TData>) {
  return (
    <TableHead>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <TableCell key={header.id}>
              {header.placeholderId ? null : flexRender(header.column.columnDef.header, header.getContext())}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableHead>
  );
}

export default memo(ReactTableHeader) as typeof ReactTableHeader;
