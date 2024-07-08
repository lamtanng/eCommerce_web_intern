import { TableBody, TableCell, TableRow } from '@mui/material';
import { flexRender, RowData } from '@tanstack/react-table';
import { ReactTableProps } from './ReactTable.type';

interface ReactTableBodyProps<TData extends RowData> extends ReactTableProps<TData> {}

function ReactTableBody<TData extends RowData>({ table }: ReactTableBodyProps<TData>) {
  return (
    <TableBody>
      {table.getRowModel().rows.map((row) => (
        <TableRow key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <TableCell key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())} </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}

export default ReactTableBody as typeof ReactTableBody;
