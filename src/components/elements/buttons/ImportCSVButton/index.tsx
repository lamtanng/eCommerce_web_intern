import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Button } from '@mui/material';
import { FormEventHandler } from 'react';
import { VisuallyHiddenInput } from '../FileUploadButton/styled';

interface ImportCSVButtonProps {
  handleFileChange: FormEventHandler<HTMLInputElement>;
}

export function ImportCSVButton({ handleFileChange }: ImportCSVButtonProps) {
  return (
    <Button component="label" variant="outlined" startIcon={<CloudUploadIcon />}>
      Import file
      <VisuallyHiddenInput type="file" onInput={handleFileChange} accept=".csv" />
    </Button>
  );
}
