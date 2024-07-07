import { debounce } from 'lodash';
import { useMemo, useState } from 'react';

export default function useDebounce(delay: number = 800) {
  const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
  const handleDebouncedSearch = debounce((searchInput: string) => setSearchQuery(searchInput), delay);
  useMemo(() => searchQuery, [searchQuery]);
  return { searchQuery, handleDebouncedSearch };
}
