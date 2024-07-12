import ReactTable from '../../../../components/elements/reactTable';
import TableSkeleton from '../../../../components/elements/skeletons/TableSkeleton';
import { useAppSelector } from '../../../../redux/hooks';
import { purchaseSelector } from '../../../../redux/slices/purchase.slice';
import { PurchaseProps } from '../../../../types/purchase.type';
import Error from '../../../Error';
import { PurchaseTableProps } from '../../Purchase.type';
import { usePurchaseTable } from '../../hooks';

export default function PurchaseTable({ searchQuery = undefined, columnDefs }: PurchaseTableProps<PurchaseProps>) {
  const { table, purchaseList } = usePurchaseTable({ searchQuery, columnDefs });
  const { loading, error } = useAppSelector(purchaseSelector);

  if (error) return <Error errorMsg={error} />;
  if (loading === 'loading') return <TableSkeleton />;
  if (loading === 'succeeded') return <ReactTable<PurchaseProps> table={table} data={purchaseList} fileName='purchases'/>;
}
