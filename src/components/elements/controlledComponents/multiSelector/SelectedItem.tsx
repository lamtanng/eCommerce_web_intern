import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { filter } from 'lodash';
import { MultiSelectData } from '../../../../types/selector.type';

export default function SelectedItem({ selected, data }: { selected: string[]; data?: MultiSelectData[] }) {
  const selectedValues = filter(data, (cate) => selected.includes(cate.value)).map((value) => value.name);

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
      {selectedValues.map((value) => (
        <Chip key={value} label={value} />
      ))}
    </Box>
  );
}

/**
 * @description Get the selected values form selected name
 * @returns array of selected values
 */
export const getSelectedValues = ({ selected, data }: { selected: string[]; data: MultiSelectData[] }) =>
  filter(data, (cate) => selected.includes(cate.value)).map((value) => value.name);
