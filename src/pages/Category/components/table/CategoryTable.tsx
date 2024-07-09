import ReactTable from '../../../../components/elements/reactTable';
import { CategoryProps } from '../../../../types/category.type';
import { CategoryTableProps } from '../../Category.types';
import { useCategoryTable } from '../../useCategory';

function CategoryTable({ searchQuery = undefined }: CategoryTableProps) {
  const { table } = useCategoryTable({ searchQuery });

  return <ReactTable<CategoryProps> table={table} />;
}

export default CategoryTable;
