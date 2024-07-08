import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { Controller, FieldValues } from 'react-hook-form';
import { ControlledSelectorProps } from '../../../../types/selector.type';
import { MenuProps } from './ControlledSelector.constants';
import SelectedItem from './SelectedItem';

export function ControlledSelector<FormValues extends FieldValues>({
  name,
  control,
  data,
  label,
  multiple = false,
  disabled = false,
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
            disabled={disabled}
            id="multi"
            multiple={multiple}
            value={value ? value : []}
            onChange={onChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selectedNames) => <SelectedItem selectedNames={selectedNames} data={data} />}
            MenuProps={MenuProps}
          >
            {data.map((selectItem) => (
              <MenuItem key={selectItem.value} value={selectItem.value}>
                {selectItem.name}
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
