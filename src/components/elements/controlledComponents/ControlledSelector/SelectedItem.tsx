import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { filter } from 'lodash';
import { SelectData } from '../../../../types/selector.type';

export default function SelectedItem({ selectedNames, data }: { selectedNames: string[]; data: SelectData[] }) {
  const selectedValues = getSelectedNames({ selectedNames, data });

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
      {selectedValues.map((value) => (
        <Chip key={value} label={value} />
      ))}
    </Box>
  );
}

/**
 * @description Get the selected names form selected values to render
 * @returns array of selected names
 */
export const getSelectedNames = ({ selectedNames, data }: { selectedNames: string[]; data: SelectData[] }) =>
  filter(data, (cate) => selectedNames.includes(cate.value)).map((value) => value.name);
