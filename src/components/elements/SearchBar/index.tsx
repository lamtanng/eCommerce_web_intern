import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from '@mui/material';

interface SearchBarProps {
  onSearch: (searchInput: string) => void;
  placeholder?: string;
}

function SearchBar({ onSearch, placeholder = 'Searching' }: SearchBarProps) {
  return (
    <>
      <Paper className='py-[2px] px-[4px] flex flex-row items-center w-full md:w-[300px]'>
        <IconButton sx={{ p: '2px' }} aria-label="menu"></IconButton>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={placeholder}
          onChange={(e) => onSearch(e.target.value as string)}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}

export default SearchBar;
