import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { MenuProps } from '../../../constants/menuProps';

interface PerPageSelectorProps {
  perPage: number;
  setPerPage: (perPage: number) => void;
}

export default function PerPageSelector({ perPage, setPerPage }: PerPageSelectorProps): JSX.Element {
  return (
    <div>
      <FormControl sx={{ width: 100 }}>
        <InputLabel id="demo-multiple-name-label">Items</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={perPage}
          onChange={(value) => setPerPage(value.target.value as number)}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {[6, 9, 12, 18].map((perPage) => (
            <MenuItem key={perPage} value={perPage}>
              {perPage}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
