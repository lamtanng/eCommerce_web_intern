import { MenuItem } from '@mui/material';
import { SelectData } from '../../../../types/selector.type';

export default function SelectRow({ selectItem }: { selectItem: SelectData }) {
  return (
    <MenuItem key={selectItem.value} value={selectItem.value}>
      {selectItem.name}
    </MenuItem>
  );
}
