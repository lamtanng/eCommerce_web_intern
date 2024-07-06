import { createColumnHelper } from '@tanstack/react-table';
import * as yup from 'yup';
import { CategoryParams, CategoryProps } from '../../types/category.type';
import { getRequiredMsg } from '../../ultils/getRequiredMsg';
import { CategorySchemaProps } from './Category.types';
import ActionColumn from './components/CategoryFormActions';

const categorySchema: yup.ObjectSchema<CategorySchemaProps> = yup.object({
  name: yup.string().required(getRequiredMsg('Name')),
});

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
      return <ActionColumn row={row} />;
    },
  }),
];

export { categorySchema, columnDefs, getCategoryParams };
