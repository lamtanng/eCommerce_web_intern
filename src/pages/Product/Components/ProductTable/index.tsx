import ExportButton from '../../../../components/elements/buttons/ExportButton';
import ReactTable from '../../../../components/elements/reactTable';
import TableSkeleton from '../../../../components/elements/skeletons/TableSkeleton';
import { useAppSelector } from '../../../../redux/hooks';
import { productSelector } from '../../../../redux/slices/product.slice';
import { ProductProps } from '../../../../types/product.type';
import Error from '../../../Error';
import { ProductTableProps } from '../../Product.type';
import { useProductTable } from '../../hooks';

export default function ProductTable({ searchQuery = undefined }: ProductTableProps) {
  const { table, productList } = useProductTable({ searchQuery });
  const { loading, error } = useAppSelector(productSelector);

  if (error) return <Error errorMsg={error} />;
  if (loading === 'loading') return <TableSkeleton />;
  if (loading === 'succeeded')
    return (
      <>
        <ReactTable<ProductProps> table={table} data={productList} fileName="products" />;
      </>
    );
}
