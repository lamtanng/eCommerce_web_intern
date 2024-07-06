import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { Controller, FieldValues } from 'react-hook-form';
import { ControlledInputProps } from '../../../../types/input.type';
import { MultiSelectData } from '../../../../types/selector.type';
import SelectedItem from './SelectedItem';

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

interface ControlledSelectorProps<FormValues extends FieldValues> extends ControlledInputProps<FormValues> {
  data: MultiSelectData[];
  multiple?: boolean;
}

export function ControlledMultiSelector<FormValues extends FieldValues>({
  name,
  control,
  data,
  label,
  multiple = false,
}: ControlledSelectorProps<FormValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl sx={{ width: 1 / 1 }}>
          <InputLabel id="multi-label">{label}</InputLabel>
          <Select
            labelId="multi-label"
            id="multi"
            multiple={multiple}
            value={value ? value : []}
            onChange={onChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => <SelectedItem selected={selected} data={data} />}
            MenuProps={MenuProps}
          >
            {data.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText id="multi" error={!!error}>
            {error?.message}
          </FormHelperText>
        </FormControl>
      )}
    />
  );
}
