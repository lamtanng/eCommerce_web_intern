import { Stack } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from 'react';
import PerPageSelector from '../../../components/elements/PerPageSelector';
import SearchBar from '../../../components/elements/SearchBar';
import useDebounce from '../../../hooks/useDebounce';
import ColumnLayout from './components/ColumnLayout';
import ProductList from './components/ProductList';
import { defaultColumns, defaultPerPage } from './UserProduct.constants';

export default function UserProduct() {
  const { handleDebouncedSearch, searchQuery } = useDebounce();
  const [perPage, setPerPage] = useState(defaultPerPage);
  const [columns, setColumns] = useState(defaultColumns);

  const handleColumnsChange = (columns: number) => {
    setColumns(columns);
  };
  const handlePerPageChange = (perPage: number) => {
    setPerPage(perPage);
  };

  return (
    <Grid2
      container
      maxWidth="xl"
      rowSpacing={{ lg: 4, md: 2, sm: 2, xs: 5 }}
      columnSpacing={{ lg: 3, md: 2 }}
      columns={{ lg: 12, md: 12 }}
    >
      <Grid2 lg={12} className="w-full">
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
          <PerPageSelector perPage={perPage} setPerPage={handlePerPageChange} />
          <Stack className="mx-0 flex w-full flex-row items-center justify-end gap-5">
            <ColumnLayout handleColumnsChange={handleColumnsChange} />
            <SearchBar onSearch={handleDebouncedSearch} />
          </Stack>
        </Stack>
      </Grid2>
      <ProductList searchQuery={searchQuery} perPage={perPage} columns={columns} />
    </Grid2>
  );
}
