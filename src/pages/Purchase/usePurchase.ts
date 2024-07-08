import { yupResolver } from '@hookform/resolvers/yup';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { fetchProductList } from '../../redux/actions/product.actions';
import { createPurchase, fetchPurchaseList, reviewPurchase, updatePurchase } from '../../redux/actions/purchase.action';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { productSelector } from '../../redux/slices/product.slice';
import { purchaseSelector } from '../../redux/slices/purchase.slice';
import {
  PurchaseFormSchema,
  PurchaseGetRequestParams,
  PurchaseProps,
  PurchaseReviewFormSchema,
} from '../../types/purchase.type';
import { SelectData } from '../../types/selector.type';
import convertToSelectData from '../../ultils/convertToSelectData';
import { getPurchaseParams, purchaseFormColumns, purchaseSchema, reviewSchema } from './Purchase.constants';
import { PurchaseFormProps, PurchaseReviewFormProps, PurchaseTableProps } from './Purchase.type';

export const usePurchaseForm = ({ defaultValues, action }: PurchaseFormProps<PurchaseFormSchema>) => {
  const dispatch = useAppDispatch();
  const { productList } = useAppSelector(productSelector);
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<PurchaseFormSchema>({
    resolver: yupResolver(purchaseSchema),
    defaultValues,
    shouldUnregister: true,
  });

  useEffect(() => {
    dispatch(fetchProductList());
  }, []);

  const onSubmit = async (data: PurchaseFormSchema) => {
    action === 'UPDATE' ? handleUpdatePurchase(data) : handleCreatePurchase(data);
  };
  const handleUpdatePurchase = async (data: PurchaseFormSchema) => {
    dispatch(updatePurchase(data));
  };

  const handleCreatePurchase = async (data: PurchaseFormSchema) => {
    dispatch(createPurchase(data));
  };

  const onReset = () => reset(defaultValues);

  const productData: SelectData[] = convertToSelectData({
    data: productList,
    valueField: 'id',
    nameField: 'name',
  });
  return { handleSubmit, onSubmit, control, isSubmitting, isDirty, onReset, productData };
};

export const usePurchaseTable = ({ searchQuery = undefined }: PurchaseTableProps) => {
  const dispatch = useAppDispatch();
  const { purchaseList } = useAppSelector(purchaseSelector);

  const purchaseTable = useReactTable<PurchaseProps>({
    data: purchaseList,
    columns: purchaseFormColumns,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    let params: PurchaseGetRequestParams = getPurchaseParams(searchQuery);
    dispatch(fetchPurchaseList(params));
  }, [searchQuery]);

  useCallback(() => purchaseTable, []);
  return { purchaseTable };
};

export function useReviewForm({ defaultValues }: PurchaseReviewFormProps<PurchaseReviewFormSchema>) {
  const dispatch = useAppDispatch();
  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting, isDirty },
  } = useForm<PurchaseReviewFormSchema>({
    resolver: yupResolver(reviewSchema),
    defaultValues,
  });

  const onSubmit = async (data: PurchaseReviewFormSchema) => {
    dispatch(reviewPurchase(data));
  };

  const handleResetForm = () => reset(defaultValues);
  return { control, handleSubmit, reset, isSubmitting, isDirty, onSubmit, handleResetForm };
}