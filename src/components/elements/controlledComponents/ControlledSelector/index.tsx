import { Checkbox, FormHelperText, Stack, Typography } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import { Controller, FieldValues } from 'react-hook-form';
import { MenuProps } from '../../../../constants/menuProps';
import { ControlledSelectorProps } from '../../../../types/selector.type';
import SelectedItem from './SelectedItem';

export function ControlledSelector<FormValues extends FieldValues>({
  name,
  control,
  data,
  label,
  multiple = false,
  disabled = false,
  isCheckbox = false,
  isRequired = false,
}: ControlledSelectorProps<FormValues>) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControl sx={{ width: 1 / 1 }}>
          <InputLabel id="multi-label">
            {
              <Stack direction="row" spacing={2}>
                {label}
                {isRequired && <Typography color="error">*</Typography>}
              </Stack>
            }
          </InputLabel>
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
                {isCheckbox ?? <Checkbox checked={value.indexOf(selectItem.value) > -1} />}
                {selectItem.name}
              </MenuItem>
              // <SelectRow selectItem={selectItem} key={selectItem.value} />
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
