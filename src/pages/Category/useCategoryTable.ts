import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import debounce from 'lodash/debounce';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { createCategory, deleteCategory, fetchCategory, updateCategory } from '../../redux/actions/category.actions';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { categorySelector } from '../../redux/slices/category.slice';
import { CategoryParams, CategoryProps } from '../../types/category.type';
import { categorySchema, columnDefs, getCategoryParams } from './Category.constants';
import { CategorySchemaProps } from './Category.types';
import { yupResolver } from '@hookform/resolvers/yup';

export function useCategoryTable() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { categoryList, error, loading } = useAppSelector(categorySelector);
  const dispatch = useAppDispatch();

  const categoryTable = useReactTable<CategoryProps>({
    data: categoryList,
    columns: columnDefs,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    let params: CategoryParams = getCategoryParams(searchQuery);
    dispatch(fetchCategory(params));
  }, [searchQuery]);

  const handleSearch = debounce((searchInput: string) => setSearchQuery(searchInput), 800);

  const handleDeleteCategory = async (id: CategoryProps['id']) => {
    dispatch(deleteCategory(id));
  };

  const handleUpdateCategory: SubmitHandler<CategoryProps> = async (data: CategoryProps) => {
    dispatch(updateCategory(data));
  };
  const handleCreateCategory = async (data: CategorySchemaProps) => {
    dispatch(createCategory(data));
  };

  useMemo(() => categoryTable, []);
  useCallback(() => handleDeleteCategory, []);
  useCallback(() => handleCreateCategory, []);
  useCallback(() => handleUpdateCategory, []);
  useCallback(() => handleSearch, []);

  return {
    handleDeleteCategory,
    handleCreateCategory,
    handleUpdateCategory,
    handleSearch,
    categoryTable,
    loading,
    error,
  };
}

export function useCategoryForm({ defaultValues }: { defaultValues: CategorySchemaProps | undefined }) {
  const form = useForm<CategorySchemaProps>({
    resolver: yupResolver(categorySchema),
    defaultValues,
  });
  const handleResetFields = () => {
    form.reset(defaultValues);
  };

  useMemo(() => form, []);
  return { form, handleResetFields };
}
