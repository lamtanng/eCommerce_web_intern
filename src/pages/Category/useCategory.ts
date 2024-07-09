import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTable } from '../../hooks/useTable';
import { createCategory, fetchCategory, updateCategory } from '../../redux/actions/category.actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { categorySelector } from '../../redux/slices/category.slice';
import { CategoryParams, CategoryProps } from '../../types/category.type';
import { categorySchema, columnDefs, getCategoryParams } from './Category.constants';
import { CategoryFormProps, CategorySchema, CategoryTableProps } from './Category.types';

export function useCategoryTable({ searchQuery }: CategoryTableProps) {
  const dispatch = useAppDispatch();
  const { categoryList, error, loading } = useAppSelector(categorySelector);

  const { table } = useTable<CategoryProps>({
    columnDefs,
    data: categoryList,
    localStorageKey: 'cateCols',
  });

  useEffect(() => {
    let params: CategoryParams = getCategoryParams(searchQuery);
    dispatch(fetchCategory(params));
  }, [searchQuery]);

  return {
    table,
    loading,
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
