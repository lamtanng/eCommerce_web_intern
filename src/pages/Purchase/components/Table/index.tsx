import ReactTable from '../../../../components/elements/reactTable';
import TableSkeleton from '../../../../components/elements/skeletons/TableSkeleton';
import { useAppSelector } from '../../../../redux/hooks';
import { purchaseSelector } from '../../../../redux/slices/purchase.slice';
import { PurchaseProps } from '../../../../types/purchase.type';
import { PurchaseTableProps } from '../../Purchase.type';
import { usePurchaseTable } from '../../hooks';

export default function PurchaseTable({ searchQuery = undefined }: PurchaseTableProps) {
  const { table } = usePurchaseTable({ searchQuery });
  const { loading, error } = useAppSelector(purchaseSelector);

  if (error) return <>error</>;
  if (loading === 'loading') return <TableSkeleton />;
  if (loading === 'succeeded') return <ReactTable<PurchaseProps> table={table} />;
}
