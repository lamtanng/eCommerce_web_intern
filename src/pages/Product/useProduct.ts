import { yupResolver } from '@hookform/resolvers/yup';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useEffect, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { fetchCategory } from '../../redux/actions/category.actions';
import { createProduct, fetchProductList, updateProduct } from '../../redux/actions/product.actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { categorySelector } from '../../redux/slices/category.slice';
import { productSelector } from '../../redux/slices/product.slice';
import { ProductFormSchema, ProductProps } from '../../types/product.type';
import { SelectData } from '../../types/selector.type';
import convertToSelectData from '../../ultils/convertToSelectData';
import { getCategoryParams } from '../Category/Category.constants';
import { columnDefs, getProductParams, productSchema } from './Product.constants';
import { ProductFormProps, ProductTableProps } from './Product.type';

export function useProductForm({ defaultValues, action }: ProductFormProps<ProductFormSchema>) {
  const dispatch = useAppDispatch();
  const { categoryList, loading, error } = useAppSelector(categorySelector);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<ProductFormSchema>({
    resolver: yupResolver(productSchema),
    defaultValues,
    shouldUnregister: true,
  });

  useEffect(() => {
    let params = getCategoryParams();
    dispatch(fetchCategory(params));
  }, []);

  const onSubmit = async (data: ProductFormSchema) => {
    action === 'UPDATE' ? handleUpdateProduct(data) : handleCreateProduct(data);
  };

  const handleUpdateProduct = async (data: ProductFormSchema) => {
    dispatch(updateProduct(data));
    console.log(data);
  };

  const handleCreateProduct = async (data: ProductFormSchema) => {
    dispatch(createProduct(data));
  };

  const onReset = () => reset(defaultValues);

  const cateSelectData: SelectData[] = convertToSelectData({
    data: categoryList,
    valueField: 'id',
    nameField: 'name',
  });

  return {
    error,
    loading,
    categoryList,
    control,
    onReset,
    handleSubmit,
    isSubmitting,
    isDirty,
    onSubmit,
    cateSelectData,
  };
}

export function useProductTable({ searchQuery = undefined }: ProductTableProps) {
  const dispatch = useAppDispatch();
  const { productList } = useAppSelector(productSelector);
  const productTable = useReactTable<ProductProps>({
    data: productList,
    columns: columnDefs,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    let params = getProductParams(searchQuery);
    dispatch(fetchProductList(params));
  }, [searchQuery]);

  useMemo(() => productTable, [productList]);
  return { productTable };
}
