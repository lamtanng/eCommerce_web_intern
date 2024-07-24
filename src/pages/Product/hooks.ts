import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { useTable } from '../../hooks/useTable';
import { fetchCategory } from '../../redux/actions/category.actions';
import { createProduct, fetchProductList, importProduct, updateProduct } from '../../redux/actions/product.actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { categorySelector } from '../../redux/slices/category.slice';
import { productSelector, updateImportedProducts } from '../../redux/slices/product.slice';
import { ProductFormSchema, ProductProps } from '../../types/product.type';
import { SelectData } from '../../types/selector.type';
import convertToSelectData from '../../ultils/convertToSelectData';
import { getCategoryParams } from '../Category/Category.constants';
import { deleteEmptyFilters, setSearchFilterParams } from '../Purchase/hooks';
import { columnDefs, productFilterColumns, productSchema } from './Product.constants';
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
    categoryList.length === 0 && dispatch(fetchCategory(params));
  }, []);

  const onSubmit = async (data: ProductFormSchema) => {
    if (action === 'UPDATE') handleUpdateProduct(data);
    else if (action === 'CREATE') handleCreateProduct(data);
    else handleUpdateImportedProduct(data);
  };

  const handleUpdateProduct = async (data: ProductFormSchema) => {
    dispatch(updateProduct(data));
  };

  const handleCreateProduct = async (data: ProductFormSchema) => {
    dispatch(createProduct(data));
  };
  const handleUpdateImportedProduct = async (data: ProductFormSchema) => {
    console.log(data);
    dispatch(updateImportedProducts(data));
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
  const [searchParams, setSearchParams] = useSearchParams({});
  const { table, pagination, columnFilters, currentPageIndex, pageSize, resetPageIndex } = useTable<ProductProps>({
    columnDefs,
    data: productList,
    localStorageKey: 'productCols',
  });

  useEffect(() => {
    columnFilters.length > 0
      ? setSearchFilterParams({ searchParams, columnFilters })
      : deleteEmptyFilters<ProductProps>({ searchParams, filterColumns: productFilterColumns });
  }, [columnFilters]);

  useEffect(() => {
    resetPageIndex();
  }, [searchQuery]);

  useEffect(() => {
    setPaginateURLParams();
    dispatch(fetchProductList(searchParams));
  }, [pagination]);

  const setPaginateURLParams = () => {
    searchParams.set('productName', searchQuery || '');
    searchParams.set('page', currentPageIndex);
    searchParams.set('offset', pageSize);
  };

  return { table, productList };
}
