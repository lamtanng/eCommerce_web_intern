import * as yup from 'yup';
import { PurchaseFormSchemaProps, PurchaseProps } from '../../types/purchase.type';
import { getRequiredMsg } from '../../ultils/getRequiredMsg';
import { createColumnHelper } from '@tanstack/react-table';
import PurchaseTableAction from './components/Table/PurchaseTableAction';

const purchaseSchema: yup.ObjectSchema<PurchaseFormSchemaProps> = yup.object({
  id: yup.string(),
  productId: yup.string().required(getRequiredMsg('Product')),
  amount: yup.number().required(getRequiredMsg('Product')).min(1, 'Amount must be greater than 0'),
});

const purchaseDefault: PurchaseFormSchemaProps = {
  productId: '',
  amount: 0,
};

const columnHelper = createColumnHelper<PurchaseProps>();
const purchaseFormColumns = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'userId',
    header: 'User',
  },
  {
    accessorKey: 'productId',
    header: 'Product',
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
  },
  {
    accessorKey: 'totalPrice',
    header: 'Total',
  },
  {
    accessorKey: 'reviewNote',
    header: 'Review',
  },
  {
    accessorKey: 'reviewComment',
    header: 'Comment',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
  },
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return <PurchaseTableAction row={row} />;
    },
  }),
];

export { purchaseSchema, purchaseDefault, purchaseFormColumns };
