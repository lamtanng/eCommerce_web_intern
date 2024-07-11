import { Row } from '@tanstack/react-table';
import { lazy } from 'react';
import ConfirmButton from '../../../../components/elements/buttons/ConfirmButton';
import DialogFormButton from '../../../../components/elements/buttons/DialogFormButton';
import InputFileUpload from '../../../../components/elements/buttons/FileUploadButton';
import { removeProduct } from '../../../../redux/actions/product.actions';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { categorySelector } from '../../../../redux/slices/category.slice';
import { ProductProps } from '../../../../types/product.type';
import ImageDefault from '../../../../assets/product_default.jpg';
import { getProductWithCateID } from '../../../../ultils/getIDfromCateNames';
import { CardMedia } from '@mui/material';
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
      <DialogFormButton>
        <ProductForm defaultValues={productDefaults} action="UPDATE" />
      </DialogFormButton>
      <ConfirmButton onConfirm={() => handleDeleteProduct(row.original.id)} />
    </>
  );
}

export function ImageButton({ row }: { row: Row<ProductProps> }) {
  return (
    <DialogFormButton
      dialogButton={
        <CardMedia
          component="img"
          className="aspect-square w-16 transform transition-transform duration-200 ease-in-out hover:scale-110"
          alt={row.original.name}
          image={`http://${row.original.picture}`}
          ref={(img) => (img = img)}
          onError={(e) => (e.currentTarget.src = ImageDefault)}
        />
      }
    >
      <InputFileUpload id={row.original.id} oldPicture={row.original.picture} />
    </DialogFormButton>
  );
}
