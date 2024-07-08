import { Row } from '@tanstack/react-table';
import { lazy } from 'react';
import ConfirmButton from '../../../../components/elements/buttons/ConfirmButton';
import DialogFormButton from '../../../../components/elements/buttons/DialogFormButton';
import { removeProduct } from '../../../../redux/actions/product.actions';
import { useAppDispatch } from '../../../../redux/hooks';
import { ProductProps } from '../../../../types/product.type';
const ProductForm = lazy(() => import('../form/ProductForm'));

export default function ProductTableAction({ row }: { row: Row<ProductProps> }) {
  const dispatch = useAppDispatch();
  const handleDeleteProduct = (id: ProductProps['id']) => {
    dispatch(removeProduct(id));
  };
  return (
    <>
      <ConfirmButton onConfirm={() => handleDeleteProduct(row.original.id)} />
      <DialogFormButton>
        <ProductForm defaultValues={row.original} action="UPDATE" />
      </DialogFormButton>
    </>
  );
}
