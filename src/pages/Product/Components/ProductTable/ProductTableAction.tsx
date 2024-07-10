import { Row } from '@tanstack/react-table';
import { lazy } from 'react';
import ConfirmButton from '../../../../components/elements/buttons/ConfirmButton';
import DialogFormButton from '../../../../components/elements/buttons/DialogFormButton';
import { removeProduct } from '../../../../redux/actions/product.actions';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { categorySelector } from '../../../../redux/slices/category.slice';
import { ProductProps } from '../../../../types/product.type';
import { getProductWithCateID } from '../../../../ultils/getIDfromCateNames';
const ProductForm = lazy(() => import('../ProductForm'));

export default function ProductTableAction({ row }: { row: Row<ProductProps> }) {
  const dispatch = useAppDispatch();
  const { categoryList } = useAppSelector(categorySelector);
  const handleDeleteProduct = (id: ProductProps['id']) => {
    dispatch(removeProduct(id));
  };

  let productDefaults = getProductWithCateID({ categoryList, productWithCateName: row.original });

  return (
    <>
      <ConfirmButton onConfirm={() => handleDeleteProduct(row.original.id)} />
      <DialogFormButton>
        <ProductForm defaultValues={productDefaults} action="UPDATE" />
      </DialogFormButton>
    </>
  );
}
