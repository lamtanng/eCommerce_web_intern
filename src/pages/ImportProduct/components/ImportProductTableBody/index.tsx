import { TableBody } from '@mui/material';
import { ReactTableProps } from '../../../../components/elements/reactTable/ReactTable.type';
import { ProductProps } from '../../../../types/product.type';
import NoItemsFounded from '../../../NoItemsFounded';
import ImportProductTableRow from '../ImportProductTableRow';

export interface ImportProductTableBodyProps extends ReactTableProps<ProductProps> {}
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
