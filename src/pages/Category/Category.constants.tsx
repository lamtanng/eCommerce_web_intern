import { createColumnHelper } from '@tanstack/react-table';
import * as yup from 'yup';
import { CategoryParams, CategoryProps } from '../../types/category.type';
import { getRequiredMsg } from '../../ultils/getMessage';
import CategoryTableAction from './components/CategoryTable/CategoryTableActions';

const categorySchema: yup.ObjectSchema<CategoryProps> = yup.object({
  id: yup.string().optional(),
  name: yup.string().required(getRequiredMsg('Name')),
});

const categoryDefaults: CategoryProps = {
  id: '',
  name: '',
};

const getCategoryParams = (cateName?: string): CategoryParams => ({
  categoryName: cateName ?? '',
  page: 1,
  offset: 5,
});

const columnHelper = createColumnHelper<CategoryProps>();
const columnDefs = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Category Name',
  },
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return <CategoryTableAction row={row} />;
    },
  }),
];

export { categoryDefaults, categorySchema, columnDefs, getCategoryParams };
