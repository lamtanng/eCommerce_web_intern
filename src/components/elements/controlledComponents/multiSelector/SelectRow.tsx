import { MenuItem } from '@mui/material';
import { MultiSelectData } from '../../../../types/selector.type';

export default function SelectRow({ selectItem }: { selectItem: MultiSelectData }) {
  return <MenuItem value={selectItem.value}>{selectItem.name}</MenuItem>;
}
