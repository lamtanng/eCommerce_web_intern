import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import SearchBar from '../../../components/elements/SearchBar';
import useDebounce from '../../../hooks/useDebounce';
import ProductList from './components/ProductList';

export default function UserProduct() {
  const { handleDebouncedSearch, searchQuery } = useDebounce();

  return (
    <Grid2
      container
      maxWidth="lg"
      rowSpacing={{ lg: 4, md: 2 }}
      columnSpacing={{ lg: 3, md: 2 }}
      columns={{ lg: 12, md: 12 }}
    >
      <Grid2 lg={12}>
        <SearchBar onSearch={handleDebouncedSearch} />
      </Grid2>
      <Grid2 lg={12}>
        <ProductList searchQuery={searchQuery} />
      </Grid2>
    </Grid2>
  );
}
