import { TableBody } from '@mui/material';
import NoItemsFounded from '../../../NoItemsFounded';
import { ImportProductTableBodyProps } from '../../ImportProduct.types';
import ImportProductTableRow from '../ImportProductTableRow';

export default function ImportProductTableBody({ table }: ImportProductTableBodyProps) {
  if (table.getRowModel().rows.length <= 0)
    return (
      <>
        <TableBody className="relative h-56">
          <NoItemsFounded />
        </TableBody>
      </>
    );
  else
    return (
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <ImportProductTableRow row={row} key={row.id} />
        ))}
      </TableBody>
    );
}
