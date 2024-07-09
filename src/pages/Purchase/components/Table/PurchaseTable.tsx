import ReactTable from '../../../../components/elements/reactTable';
import { PurchaseProps } from '../../../../types/purchase.type';
import { PurchaseTableProps } from '../../Purchase.type';
import { usePurchaseTable } from '../../usePurchase';

export default function PurchaseTable({ searchQuery = undefined }: PurchaseTableProps) {
  const { table } = usePurchaseTable({ searchQuery });
  return <ReactTable<PurchaseProps> table={table} />;
}
