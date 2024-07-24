import { Button } from '@mui/material';
import ReactTable from '../../../../components/elements/reactTable';
import TableSkeleton from '../../../../components/elements/skeletons/TableSkeleton';
import { useAppSelector } from '../../../../redux/hooks';
import { categorySelector } from '../../../../redux/slices/category.slice';
import { CategoryProps } from '../../../../types/category.type';
import Error from '../../../Error';
import { CategoryTableProps } from '../../Category.types';
import { useCategoryTable } from '../../hooks';

const fileColumns = ['Name', 'Email', 'Phone Number', 'Age'];

function CategoryTable({ searchQuery = undefined }: CategoryTableProps) {
  const { table, categoryList } = useCategoryTable({ searchQuery });
  const { loading, error } = useAppSelector(categorySelector);

  if (error) return <Error errorMsg={error} />;
  if (loading === 'loading') return <TableSkeleton />;
  return (
    <>
      <ReactTable<CategoryProps> table={table} data={categoryList} fileName='categories'/>
    </>
  );
}

export default CategoryTable;
