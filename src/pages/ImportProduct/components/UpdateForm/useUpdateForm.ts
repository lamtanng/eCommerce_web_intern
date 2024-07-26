import { Row } from '@tanstack/react-table';
import { useEffect } from 'react';
import { fetchCategory } from '../../../../redux/actions/category.actions';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { categorySelector } from '../../../../redux/slices/category.slice';
import { setTriggeredProduct, updateImportedProducts } from '../../../../redux/slices/importedProduct.slice';
import { ProductFormSchema, ProductProps } from '../../../../types/product.type';
import { SelectData } from '../../../../types/selector.type';
import convertToSelectData from '../../../../ultils/convertToSelectData';
import { getProductWithCateName } from '../../../../ultils/getIDfromCateNames';
import { getCategoryParams } from '../../../Category/Category.constants';
import { useTableForm } from '../../hooks';

export function useUpdateForm({ row }: { row: Row<ProductProps> }) {
  const dispatch = useAppDispatch();
  const { categoryList } = useAppSelector(categorySelector);
  const { handleSubmit, control, isSubmitting, isDirty, reset, productDefaults } = useTableForm({
    row,
  });

  useEffect(() => {
    let params = getCategoryParams();
    categoryList.length === 0 && dispatch(fetchCategory(params));
  }, [categoryList]);

  const onSubmit = async (data: ProductFormSchema) => {
    reset(productDefaults);
    const formattedData = getProductWithCateName({ categoryList, productWithCateID: data });
    dispatch(updateImportedProducts(formattedData));
    dispatch(setTriggeredProduct({ id: formattedData.id, triggered: false }));
  };

  const cateSelectData: SelectData[] = convertToSelectData({
    data: categoryList,
    valueField: 'id',
    nameField: 'name',
  });

  const onReset = () => reset(productDefaults);

  return {
    control,
    onReset,
    cateSelectData,
    onSubmit,
    handleSubmit,
    isSubmitting,
    isDirty,
  };
}
