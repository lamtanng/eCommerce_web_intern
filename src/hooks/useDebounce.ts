import { debounce } from 'lodash';
import { useState } from 'react';

export default function useDebounce(delay?: number) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const handleDebouncedSearch = debounce((searchInput: string) => setSearchQuery(searchInput), delay);

  return { searchQuery, handleDebouncedSearch };
}
