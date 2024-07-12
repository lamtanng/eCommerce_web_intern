import { Link } from '@mui/material';
import { formatDate } from '../../../ultils/formatDate';
import { createColumnHelper } from '@tanstack/react-table';
import { PurchaseProps } from '../../../types/purchase.type';
import PurchaseTableAction from '../../Purchase/components/Table/PurchaseTableAction';

const columnHelper = createColumnHelper<PurchaseProps>();
export const userPurchaseColumns = [
  columnHelper.accessor((row) => row.id, {
    id: 'id',
    header: 'Purchase ID',
    cell: ({ row }) => (
      <Link underline="none" className="text-black" href={`http://localhost:5173/purchases/${row.original.id}`}>
        {row.original.id}
      </Link>
    ),
  }),
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
  columnHelper.accessor((row) => row.createdAt, {
    id: 'createdAt',
    header: 'Created At',
    cell: ({ row }) => `${formatDate(row.original.createdAt)}`,
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => {
      return <PurchaseTableAction row={row} />;
    },
  }),
];

