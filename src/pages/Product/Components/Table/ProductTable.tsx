import ReactTable from '../../../../components/elements/reactTable';
import { ProductProps } from '../../../../types/product.type';
import { ProductTableProps } from '../../Product.type';
import { useProductTable } from '../../useProduct';

export default function ProductTable({ searchQuery = undefined }: ProductTableProps) {
  const { table } = useProductTable({ searchQuery });
  return <ReactTable<ProductProps> table={table} />;
}
