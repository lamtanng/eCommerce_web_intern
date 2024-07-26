import { yupResolver } from '@hookform/resolvers/yup';
import { Row } from '@tanstack/react-table';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTable } from '../../hooks/useTable';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { categorySelector } from '../../redux/slices/category.slice';
import {
  ImportedProductProps,
  importedProductSelector,
  setTriggeredProduct,
} from '../../redux/slices/importedProduct.slice';
import { ProductFormSchema, ProductProps } from '../../types/product.type';
import { getProductWithCateID } from '../../ultils/getIDfromCateNames';
import { productSchema } from '../Product/Product.constants';
import { importProductColumnDefs } from './ImportProduct.constants';

export function useImportProductPage() {
  const dispatch = useAppDispatch();
  const { categoryList } = useAppSelector(categorySelector);
  const { productList } = useAppSelector(importedProductSelector);
  const { table } = useTable({
    columnDefs: importProductColumnDefs,
    data: productList,
    localStorageKey: 'importProductCols',
  });

  const handleCreateAllProducts = async () => {
    const tableLength = table.getRowCount();
    const rows = table.getRowModel().rows;

    for (let rowIndex = 0; rowIndex < tableLength; rowIndex++) {
      let productDefaults = getProductWithCateID({ categoryList, productWithCateName: rows[rowIndex].original });
      dispatch(setTriggeredProduct({ id: productDefaults.id, triggered: true }));
    }
  };
  return { handleCreateAllProducts, table };
}

export function useTableForm({ row }: { row: Row<ProductProps> }) {
  const { categoryList } = useAppSelector(categorySelector);
  const { productList } = useAppSelector(importedProductSelector);
  const rowProduct = productList.find((product) => product.id === row.original.id) as ImportedProductProps;
  let productDefaults = getProductWithCateID({ categoryList, productWithCateName: rowProduct }) as ImportedProductProps;

  const {
    trigger,
    register,
    setValue,
    reset,
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty },
  } = useForm<ProductFormSchema>({
    resolver: yupResolver(productSchema),
    values: row.original,
    shouldUnregister: true,
  });

  useEffect(() => {
    resetProductRow();
  }, [rowProduct]);

  const resetProductRow = () => {
    setValue('name', productDefaults.name, { shouldValidate: true });
    setValue('basePrice', productDefaults.basePrice, { shouldValidate: true });
    setValue('discountPercentage', productDefaults.discountPercentage, { shouldValidate: true });
    setValue('stock', productDefaults.stock, { shouldValidate: true });
  };

  return {
    errors,
    register,
    control,
    productDefaults,
    trigger,
    handleSubmit,
    isSubmitting,
    isDirty,
    reset,
  };
}
