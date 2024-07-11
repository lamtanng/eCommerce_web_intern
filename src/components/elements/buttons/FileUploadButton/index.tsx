import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { CardMedia, Stack } from '@mui/material';
import Button from '@mui/material/Button';
import * as React from 'react';
import ImageDefault from '../../../../assets/product_default.jpg';
import { uploadProductImage } from '../../../../redux/actions/product.actions';
import { useAppDispatch } from '../../../../redux/hooks';
import { VisuallyHiddenInput } from './styled';

interface InputFileUploadProps {
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

  const getDefaultImage = () => {
    if (oldPicture) {
      return `http://${oldPicture}`;
    }
    if (selectedFile) {
      return URL.createObjectURL(selectedFile);
    } else {
      return ImageDefault;
    }
  };

  return (
    <>
      <CardMedia
        id="imgPreview"
        component="img"
        width="100%"
        height="300px"
        className="transform object-scale-down object-center transition-transform duration-200 ease-in-out hover:scale-110"
        alt="Product Image"
        image={getDefaultImage()}
        ref={(img) => (img = img)}
        onError={(e) => (e.currentTarget.src = ImageDefault)}
      />
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
