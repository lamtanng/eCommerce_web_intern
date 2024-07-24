import { Paper, Stack, Table, TableContainer } from '@mui/material';
import ColumnSelector from '../../components/elements/reactTable/ColumnsSelector';
import ReactTableHeader from '../../components/elements/reactTable/ReactTableHeader';
import ReactTablePagination from '../../components/elements/reactTable/ReactTablePagination';
import { useTable } from '../../hooks/useTable';
import { useAppSelector } from '../../redux/hooks';
import { productSelector } from '../../redux/slices/product.slice';
import { ProductProps } from '../../types/product.type';
import { productFilterColumns } from '../Product/Product.constants';
import { ImportProductButton } from './components/ImportCSVButton';
import ImportProductTableBody from './components/ImportProductTableBody';
import { importProductColumnDefs } from './Product.constants';

export default function ImportProduct() {
  const { productList } = useAppSelector(productSelector);
  const { table } = useTable<ProductProps>({
    columnDefs: importProductColumnDefs,
    data: productList,
    localStorageKey: 'importProductCols',
  });

  return (
    <>
      <ImportProductButton table={table} />
      <Stack direction="column" spacing={3} className="mt-6">
        <Stack direction="column" spacing={3}>
          <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center">
            <ColumnSelector<ProductProps> table={table} />
          </Stack>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} className="transition-all duration-300 ease-in-out">
              <ReactTableHeader<ProductProps> table={table} filterColumns={productFilterColumns} />
              <ImportProductTableBody table={table} />
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </>
  );
}
