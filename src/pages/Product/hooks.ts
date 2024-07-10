import { yupResolver } from '@hookform/resolvers/yup';
import queryString from 'query-string';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { useTable } from '../../hooks/useTable';
import { fetchCategory } from '../../redux/actions/category.actions';
import { createProduct, fetchProductList, updateProduct } from '../../redux/actions/product.actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { categorySelector } from '../../redux/slices/category.slice';
import { productSelector } from '../../redux/slices/product.slice';
import { ProductFormSchema, ProductProps } from '../../types/product.type';
import { SelectData } from '../../types/selector.type';
import convertToSelectData from '../../ultils/convertToSelectData';
import getSearchParams from '../../ultils/getSearchParams';
import { getCategoryParams } from '../Category/Category.constants';
import { columnDefs, getProductURLParams, productSchema } from './Product.constants';
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
  // const [searchParams, setSearchParams] = useSearchParams({});
  let { table, pagination, currentPageIndex, pageSize } = useTable<ProductProps>({
    columnDefs,
    data: productList,
    localStorageKey: 'productCols',
  });
  const [proParams, setProParams] = useState(
    getProductURLParams({ productName: searchQuery, page: currentPageIndex, offset: pageSize }),
  );

  useEffect(() => {
    // setPaginateURLParams();
    dispatch(fetchProductList(proParams));
  }, [proParams]);

  useEffect(() => {
    setPaginateURLParams();
  }, [pagination, searchQuery]);

  const parsed = queryString.parse(location.search);
  // console.log(parsed);

  const setPaginateURLParams = () => {
    setProParams({
      productName: searchQuery || '',
      page: currentPageIndex,
      offset: pageSize,
    });
    console.log(searchQuery);

    // searchParams.set('productName', searchQuery || '');
    // searchParams.set('page', currentPageIndex);
    // searchParams.set('offset', pageSize);
  };

  return { table };
}
