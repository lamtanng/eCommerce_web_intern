import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { useTable } from '../../hooks/useTable';
import { fetchProductList } from '../../redux/actions/product.actions';
import {
  createPurchase,
  fetchPurchaseList,
  fetchPurchasesWithAdmin,
  reviewPurchase,
  updatePurchase,
} from '../../redux/actions/purchase.action';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { productSelector } from '../../redux/slices/product.slice';
import { purchaseSelector } from '../../redux/slices/purchase.slice';
import { PurchaseFormSchema, PurchaseProps, PurchaseReviewFormSchema } from '../../types/purchase.type';
import { SelectData } from '../../types/selector.type';
import { getStoredAuth } from '../../ultils/authToken';
import convertToSelectData from '../../ultils/convertToSelectData';
import getSearchParams from '../../ultils/getSearchParams';
import { purchaseFilterColumns, purchaseSchema, reviewSchema } from './Purchase.constants';
import { PurchaseFormProps, PurchaseReviewFormProps, PurchaseTableProps } from './Purchase.type';
import { ColumnFiltersState, RowData } from '@tanstack/react-table';
import { ReactTableProps } from '../../components/elements/reactTable/ReactTable.type';

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
    productList.length === 0 && dispatch(fetchProductList());
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

  useCallback(() => handleCreatePurchase, []);
  useCallback(() => handleUpdatePurchase, []);
  useCallback(() => onSubmit, []);
  return { handleSubmit, onSubmit, control, isSubmitting, isDirty, onReset, productData };
};

export const usePurchaseTable = ({ searchQuery = undefined, columnDefs }: PurchaseTableProps<PurchaseProps>) => {
  const dispatch = useAppDispatch();
  const { purchaseList } = useAppSelector(purchaseSelector);
  const [searchParams, setSearchParams] = useSearchParams({});
  const role = getStoredAuth()?.userRole;

  const { table, pagination, currentPageIndex, pageSize, columnFilters } = useTable<PurchaseProps>({
    columnDefs,
    data: purchaseList,
    localStorageKey: 'purchaseCols',
  });

  useEffect(() => {
    setURLParams();
    role === 'ADMIN'
      ? dispatch(fetchPurchasesWithAdmin(getSearchParams(searchParams)))
      : dispatch(fetchPurchaseList(getSearchParams(searchParams)));
  }, [searchQuery, pagination, columnFilters]);

  const setURLParams = () => {
    columnFilters.length > 0
      ? setSearchFilterParams({ searchParams, columnFilters })
      : deleteEmptyFilters<PurchaseProps>({ searchParams, filterColumns: purchaseFilterColumns });
    searchParams.set('page', currentPageIndex);
    searchParams.set('offset', pageSize);
  };

  return { table, purchaseList };
};

//

export function deleteEmptyFilters<TData extends RowData>({
  searchParams,
  filterColumns,
}: {
  searchParams: URLSearchParams;
  filterColumns: ReactTableProps<TData>['filterColumns'];
}) {
  return (
    filterColumns && filterColumns.length > 0 && filterColumns.map((ColumnId) => searchParams.delete(String(ColumnId)))
  );
}

export const setSearchFilterParams = ({
  searchParams,
  columnFilters,
}: {
  searchParams: URLSearchParams;
  columnFilters: ColumnFiltersState;
}) => {
  columnFilters.map((el) => {
    searchParams.set(el.id, String(el.value));
  });
};
//

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
