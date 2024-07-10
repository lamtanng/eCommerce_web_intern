import { PaginationState } from '@tanstack/react-table';
import { PaginationParams } from '../types/pagination.type';

const pageSize = 2;
const pageIndex = 0;
const itemsPerPage = [5, 10, 15, 20, 25];

const getPaginationParams = ({
  page = (pageIndex + 1).toString(),
  offset = pageSize.toString(),
}: PaginationParams) => ({
  page,
  offset,
});
const defaultPaginationParams: PaginationState = {
  pageIndex: pageIndex,
  pageSize: pageSize,
};

export { defaultPaginationParams, getPaginationParams, itemsPerPage, pageIndex, pageSize };
