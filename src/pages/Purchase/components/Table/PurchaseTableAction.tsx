import { Row } from '@tanstack/react-table';
import { lazy } from 'react';
import ConfirmButton from '../../../../components/elements/buttons/ConfirmButton';
import DialogFormButton from '../../../../components/elements/buttons/DialogFormButton';
import { removePurchase } from '../../../../redux/actions/purchase.action';
import { useAppDispatch } from '../../../../redux/hooks';
import { PurchaseProps } from '../../../../types/purchase.type';
const PurchaseForm = lazy(() => import('../../components/Form/PurchaseForm'));

export default function PurchaseTableAction({ row }: { row: Row<PurchaseProps> }) {
  const dispatch = useAppDispatch();
  const handleDeletePurchase = (id: PurchaseProps['id']) => {
    dispatch(removePurchase(id));
  };
  return (
    <>
      <ConfirmButton onConfirm={() => handleDeletePurchase(row.original.id)} />
      <DialogFormButton>
        <PurchaseForm defaultValues={row.original} action="UPDATE" />
      </DialogFormButton>
    </>
  );
}
