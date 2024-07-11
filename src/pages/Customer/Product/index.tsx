import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import SearchBar from '../../../components/elements/SearchBar';
import useDebounce from '../../../hooks/useDebounce';
import ProductList from './components/ProductList';
import { useState } from 'react';
import PerPageSelector from '../../../components/elements/PerPageSelector';
import { set } from 'lodash';
import { Stack } from '@mui/material';

export default function UserProduct() {
  const { handleDebouncedSearch, searchQuery } = useDebounce();
  const [perPage, setPerPage] = useState(6);
  const handlePerPageChange = (perPage: number) => {
    setPerPage(perPage);
  };

  return (
    <Grid2
      container
      maxWidth="lg"
      rowSpacing={{ lg: 4, md: 2 }}
      columnSpacing={{ lg: 3, md: 2 }}
      columns={{ lg: 12, md: 12 }}
    >
      <Grid2 lg={12}>
        <Stack direction="row" spacing={2} justifyContent="space-between" alignItems="center">
          <PerPageSelector perPage={perPage} setPerPage={handlePerPageChange} />
          <SearchBar onSearch={handleDebouncedSearch} />
        </Stack>
      </Grid2>
      <Grid2 lg={12}>
        <ProductList searchQuery={searchQuery} perPage={perPage} />
      </Grid2>
    </Grid2>
  );
}
