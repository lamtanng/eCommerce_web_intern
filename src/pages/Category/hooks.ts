import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { useTable } from '../../hooks/useTable';
import { createCategory, fetchCategory, updateCategory } from '../../redux/actions/category.actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { categorySelector } from '../../redux/slices/category.slice';
import { CategoryProps } from '../../types/category.type';
import getSearchParams from '../../ultils/getSearchParams';
import { categorySchema, columnDefs } from './Category.constants';
import { CategoryFormProps, CategorySchema, CategoryTableProps } from './Category.types';

export function useCategoryTable({ searchQuery }: CategoryTableProps) {
  const dispatch = useAppDispatch();
  const { categoryList, error, loading } = useAppSelector(categorySelector);
  const [searchParams, setSearchParams] = useSearchParams({});

  const { table, pagination, currentPageIndex, pageSize } = useTable<CategoryProps>({
    columnDefs,
    data: categoryList,
    localStorageKey: 'cateCols',
  });

  useEffect(() => {
    setPaginateURLParams();
    dispatch(fetchCategory(getSearchParams(searchParams)));
  }, [searchQuery, pagination]);

  const setPaginateURLParams = () => {
    setSearchParams({
      categoryName: searchQuery || '',
      page: currentPageIndex,
      offset: pageSize,
    });
    searchParams.set('categoryName', searchQuery || '');
    searchParams.set('page', currentPageIndex);
    searchParams.set('offset', pageSize);
  };

  return {
    table,
    loading,
    categoryList,
    error,
  };
}

export function useCategoryForm({ action, defaultValues }: CategoryFormProps<CategorySchema>) {
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<CategorySchema>({
    resolver: yupResolver(categorySchema),
    defaultValues,
  });

  const onSubmit = async (data: CategorySchema) => {
    action === 'UPDATE' ? handleUpdateCategory(data) : handleCreateCategory(data);
  };

  const handleUpdateCategory: SubmitHandler<CategoryProps> = async (data: CategoryProps) => {
    dispatch(updateCategory(data));
  };
  const handleCreateCategory = async (data: CategoryProps) => {
    console.log(data);

    dispatch(createCategory(data));
  };

  const handleResetForm = () => reset(defaultValues);

  return {
    handleSubmit,
    handleResetForm,
    handleCreateCategory,
    handleUpdateCategory,
    control,
    isSubmitting,
    isDirty,
    onSubmit,
  };
}
