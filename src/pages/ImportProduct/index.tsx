import { Button, Paper, Stack, Table, TableContainer } from '@mui/material';
import ColumnSelector from '../../components/elements/reactTable/ColumnsSelector';
import ReactTableHeader from '../../components/elements/reactTable/ReactTableHeader';
import { ProductProps } from '../../types/product.type';
import { ImportProductButton } from './components/ImportProductButton';
import ImportProductTableBody from './components/ImportProductTableBody';
import { useImportProductPage } from './hooks';

export default function ImportProduct() {
  const { handleCreateAllProducts, table } = useImportProductPage();
  return (
    <>
      <Stack direction="column" spacing={3} className="mt-6">
        <Stack direction="column" spacing={3}>
          <Stack direction="row" spacing={3} justifyContent="space-between" alignItems="center">
            <ColumnSelector<ProductProps> table={table} />
            <Stack direction="row" spacing={3}>
              <ImportProductButton table={table} />
              <Button variant="contained" size="large" onClick={handleCreateAllProducts}>
                Create all
              </Button>
            </Stack>
          </Stack>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} className="transition-all duration-300 ease-in-out">
              <ReactTableHeader<ProductProps> table={table} />
              <ImportProductTableBody table={table} />
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </>
  );
}
