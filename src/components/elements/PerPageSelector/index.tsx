import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1 ? theme.typography.fontWeightRegular : theme.typography.fontWeightMedium,
  };
}

interface PerPageSelectorProps {
  perPage: number;
  setPerPage: (perPage: number) => void;
}

export default function PerPageSelector({ perPage, setPerPage }: PerPageSelectorProps): JSX.Element {
  const theme = useTheme();

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">Items/page</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
        //   multiple
          value={perPage}
          onChange={(value) => setPerPage(value.target.value as number)}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {[6, 9, 12, 18].map((perPage) => (
            <MenuItem
              key={perPage}
              value={perPage}
              //   style={getStyles(perPage, personName, theme)}
            >
              {perPage}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
