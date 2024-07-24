import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import { Button } from '@mui/material';
import { Row } from '@tanstack/react-table';
import { lazy } from 'react';
import { UseFormTrigger } from 'react-hook-form';
import DialogFormButton from '../../../../components/elements/buttons/DialogFormButton';
import { SubmitButtonProps } from '../../../../components/elements/buttons/SubmitButton';
import { createImportedProduct } from '../../../../redux/actions/product.actions';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { categorySelector } from '../../../../redux/slices/category.slice';
import { ProductFormSchema, ProductProps } from '../../../../types/product.type';
import { getProductWithCateID } from '../../../../ultils/getIDfromCateNames';
const ImportProductForm = lazy(() => import('../ImportProductForm'));

interface ImportProductTableActionProps extends SubmitButtonProps {
  row: Row<ProductProps>;
  trigger: UseFormTrigger<ProductFormSchema>;
}

export default function ImportProductTableAction({ row, trigger }: ImportProductTableActionProps) {
  const dispatch = useAppDispatch();
  const { categoryList } = useAppSelector(categorySelector);
  let productDefaults = getProductWithCateID({ categoryList, productWithCateName: row.original });

  const handleAddProduct = async () => {
    const isValidate = await trigger();
    isValidate && dispatch(createImportedProduct(productDefaults));
  };
  return (
    <>
      <DialogFormButton dialogButton={<BorderColorRoundedIcon />}>
        <ImportProductForm defaultValues={productDefaults} action="IMPORT" />
      </DialogFormButton>
      <Button variant="text" onClick={handleAddProduct} className="text-green-500">
        <AddCircleRoundedIcon />
      </Button>
    </>
  );
}
