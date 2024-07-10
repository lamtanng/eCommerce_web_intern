import ReactTable from '../../../../components/elements/reactTable';
import TableSkeleton from '../../../../components/elements/skeletons/TableSkeleton';
import { useAppSelector } from '../../../../redux/hooks';
import { categorySelector } from '../../../../redux/slices/category.slice';
import { CategoryProps } from '../../../../types/category.type';
import Error from '../../../Error';
import { CategoryTableProps } from '../../Category.types';
import { useCategoryTable } from '../../hooks';

function CategoryTable({ searchQuery = undefined }: CategoryTableProps) {
  const { table } = useCategoryTable({ searchQuery });
  const { loading, error } = useAppSelector(categorySelector);

  if (error) return <Error errorMsg={error} />;
  if (loading === 'loading') return <TableSkeleton />;
  return <ReactTable<CategoryProps> table={table} />;
}

export default CategoryTable;
