import { FormControlLabel, MenuItem } from '@mui/material';
import { ChangeEventHandler, ReactNode } from 'react';

export interface CheckboxButtonProps {
  value?: string | number | undefined;
  checked?: boolean | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  label?: ReactNode;
}
export function CheckboxButton({ value = undefined, checked = false, onChange, label }: CheckboxButtonProps) {
  return (
    <MenuItem value={value}>
      <FormControlLabel
        sx={{ width: '100%', paddingLeft: 3 }}
        control={
          <input
            className="h-4 w-4 rounded border-red-300 text-indigo-600 focus:ring-indigo-600"
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />
        }
        label={label}
      />
    </MenuItem>
  );
}
