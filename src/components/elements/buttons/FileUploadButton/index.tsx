import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import { uploadProductImage } from '../../../../redux/actions/product.actions';
import { useAppDispatch } from '../../../../redux/hooks';
import MediaImage from '../../CardImage';
import { VisuallyHiddenInput } from './styled';

export interface InputFileUploadProps {
  id: string | undefined;
  oldPicture: string | undefined;
}

export default function InputFileUpload({ id, oldPicture }: InputFileUploadProps) {
  const [selectedFile, setSelectedFile] = React.useState<Blob>();
  const dispatch = useAppDispatch();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSave = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      dispatch(uploadProductImage({ id, formData }));
    }
  };

  return (
    <>
      <MediaImage selectedFile={selectedFile} oldPicture={oldPicture} />
      <Stack spacing={4} direction="row" alignItems="center" justifyContent="center" marginTop={3}>
        <Button component="label" role={undefined} variant="outlined" tabIndex={-1} startIcon={<CloudUploadIcon />}>
          Upload file
          <VisuallyHiddenInput onChange={handleFileChange} type="file" />
        </Button>
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </Stack>
    </>
  );
}
