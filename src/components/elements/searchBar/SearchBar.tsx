import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';

function SearchBar({ onSearch }: { onSearch: (searchInput: string) => void }) {
  return (
    <>
      <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
        <IconButton sx={{ p: '2px' }} aria-label='menu'></IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder='Search category'
          onChange={(e) => onSearch(e.target.value as string)}
        />
        <IconButton type='button' sx={{ p: '10px' }} aria-label='search'>
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}

export default SearchBar;
